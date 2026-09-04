export function scrollToAndHighlight(id) {
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "center" });
  if (el.tagName === "DETAILS") {
    el.open = true;
  }

  el.classList.add("geek-highlight");
  setTimeout(() => el.classList.remove("geek-highlight"), 2000);
  return true;
}
