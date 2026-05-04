import { useEffect, useState } from "react";

const LINKS = [
  { label: "How it Works", href: "#how", id: "how" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Compare", href: "#compare", id: "compare" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = LINKS
      .map(l => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 bg-ivory/70 border-b border-sand/60"
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
          <span className="font-serif text-xl text-charcoal tracking-tight">Caroline</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                active === l.id
                  ? "text-terracotta font-medium"
                  : "text-charcoal/80 hover:text-terracotta"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onBookDemo}
          className="rounded-full border border-terracotta text-terracotta px-5 py-2 text-sm font-medium hover:bg-terracotta hover:text-white transition-colors"
        >
          Book a Demo
        </button>
      </div>
    </header>
  );
};
