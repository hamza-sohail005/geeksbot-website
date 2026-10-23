// Builds the static version of the site for Hostinger shared hosting.
//   npm run build:hostinger
// Output: dist-hostinger/site/ (contents go into public_html) and
//         dist-hostinger/geeksbot-public_html.zip (upload + extract).
//
// A static export cannot contain API routes, so the build runs on a copy of
// the project without app/api. The chatbot and voice keep working by calling
// the Netlify deploy given in API_BASE (see lib/api-base.js, lib/cors.js).
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const API_BASE = process.env.API_BASE || "https://geeksbot-website.netlify.app";
const root = process.cwd();
const work = path.join(root, ".hostinger-build");
const dist = path.join(root, "dist-hostinger");

// Remove the work copy. The node_modules junction is unlinked first so the
// recursive delete can never walk into the real node_modules.
function cleanWork() {
  const link = path.join(work, "node_modules");
  try {
    if (fs.lstatSync(link).isSymbolicLink()) fs.unlinkSync(link);
  } catch {}
  fs.rmSync(work, { recursive: true, force: true });
}

cleanWork();
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(work);

for (const item of ["app", "components", "data", "lib", "public", "jsconfig.json", "next.config.mjs", "package.json", ".env.local"]) {
  const src = path.join(root, item);
  if (!fs.existsSync(src)) continue;
  fs.cpSync(src, path.join(work, item), {
    recursive: true,
    filter: (p) => !p.startsWith(path.join(root, "app", "api")),
  });
}
fs.symlinkSync(path.join(root, "node_modules"), path.join(work, "node_modules"), "junction");

execSync("npx next build", {
  cwd: work,
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "1", NEXT_PUBLIC_API_BASE: API_BASE },
});

const site = path.join(dist, "site");
fs.mkdirSync(dist, { recursive: true });
fs.cpSync(path.join(work, "out"), site, { recursive: true });

// Apache/LiteSpeed rules: HTTPS, extensionless URLs (/about -> about.html),
// the custom 404 page, and long caching for hashed build files.
fs.writeFileSync(
  path.join(site, ".htaccess"),
  `Options -MultiViews
DirectoryIndex index.html
ErrorDocument 404 /404.html

RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# /about and /about/ serve about.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{DOCUMENT_ROOT}/$1.html -f
RewriteRule ^(.+?)/?$ /$1.html [L]

<IfModule mod_headers.c>
  <FilesMatch "\\.(webp|png|jpg|jpeg|svg|ico|mp4|mp3)$">
    Header set Cache-Control "public, max-age=604800"
  </FilesMatch>
</IfModule>
`
);
fs.writeFileSync(
  path.join(site, "_next", "static", ".htaccess"),
  `<IfModule mod_headers.c>
  Header set Cache-Control "public, max-age=31536000, immutable"
</IfModule>
`
);

const zip = path.join(dist, "geeksbot-public_html.zip");
const winTar = path.join(process.env.SystemRoot || "C:/Windows", "System32", "tar.exe"); // bsdtar: can write .zip
execSync(`"${winTar}" -a -c -f "${zip}" -C "${site}" .`, { stdio: "inherit" });
cleanWork();
console.log(`\nDone: ${site}\n      ${zip}`);
