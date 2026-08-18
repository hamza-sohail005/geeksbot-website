const particles = [
  { top: "6%", left: "9%", size: 5, delay: "0s", duration: "7s" },
  { top: "16%", left: "92%", size: 4, delay: "1.2s", duration: "6.5s" },
  { top: "34%", left: "4%", size: 6, delay: "2.1s", duration: "8s" },
  { top: "48%", left: "96%", size: 4, delay: "0.6s", duration: "7.2s" },
  { top: "62%", left: "7%", size: 5, delay: "1.8s", duration: "6.8s" },
  { top: "74%", left: "90%", size: 6, delay: "0.3s", duration: "9s" },
  { top: "88%", left: "14%", size: 4, delay: "2.6s", duration: "7.5s" },
  { top: "92%", left: "80%", size: 3, delay: "1.4s", duration: "6.2s" },
];

export default function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden="true">
      <span className="site-bg__blob site-bg__blob--1"></span>
      <span className="site-bg__blob site-bg__blob--2"></span>
      <span className="site-bg__blob site-bg__blob--3"></span>
      {particles.map((p, i) => (
        <span
          key={i}
          className="site-bg__particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        ></span>
      ))}
    </div>
  );
}
