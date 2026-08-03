import Link from "next/link";

export default function PageHero({ title, text, parent }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__content animate">
          <nav className="page-hero__breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            {parent && (
              <>
                <Link href={parent.href}>{parent.label}</Link>
                <span>/</span>
              </>
            )}
            <span>{title}</span>
          </nav>
          <h1 className="page-hero__title">{title}</h1>
          {text && <p className="page-hero__text">{text}</p>}
        </div>
      </div>
    </section>
  );
}
