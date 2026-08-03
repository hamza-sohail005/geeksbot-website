export const legalStyles = {
  wrapper: { maxWidth: "800px", margin: "0 auto", padding: "60px 20px" },
  updated: { color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "40px" },
  heading: { color: "var(--heading)", marginBottom: "16px", fontSize: "1.5rem" },
  paragraph: { color: "var(--text-subtle)", lineHeight: 1.8, marginBottom: "12px" },
  list: { color: "var(--text-subtle)", paddingLeft: "20px", marginBottom: "12px" },
  listItem: { marginBottom: "8px" },
  strong: { color: "var(--heading)" },
  link: { color: "#6366f1", textDecoration: "none" },
};

export default function LegalSection({ title, children }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={legalStyles.heading}>{title}</h2>
      {children}
    </div>
  );
}
