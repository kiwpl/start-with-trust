import { useEffect } from "react";

const LINKS = [
  { label: "How it Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Compare", href: "#compare", id: "compare" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

const SECTION_IDS = LINKS.map(l => l.id);

export const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
  useEffect(() => {
    let trigger = window.innerHeight * 0.3;

    const getActive = () => {
      let active = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= trigger) active = id;
      }
      return active;
    };

    const update = () => {
      const active = getActive();
      SECTION_IDS.forEach(id => {
        const link = document.querySelector(`nav a[href="#${id}"]`);
        if (!link) return;
        link.classList.toggle("nav-active", id === active);
      });
    };

    const onResize = () => {
      trigger = window.innerHeight * 0.3;
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-40"
      style={{
        backgroundColor: "rgba(28, 14, 8, 0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 no-underline-link">
          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#C4724A" }} />
          <span className="font-serif text-2xl sm:text-[26px] tracking-tight" style={{ color: "#F5F1EB" }}>Caroline</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="nav-link text-sm" style={{ color: "#C8B8A8" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onBookDemo}
          className="rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-terracotta hover:text-white"
          style={{ border: "1px solid rgba(245,241,235,0.5)", color: "#F5F1EB" }}
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
};
