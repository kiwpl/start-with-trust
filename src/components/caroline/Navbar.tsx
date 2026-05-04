import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export const Navbar = ({ onBookDemo }: { onBookDemo: () => void }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 120);
    setScrolled(latest > 24);
  });

  const links = [
    { label: "How it Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Compare", href: "#compare" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-ivory/80 backdrop-blur-md border-b border-sand" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
          <span className="font-serif text-xl text-charcoal tracking-tight">Caroline</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-charcoal/80 hover:text-terracotta transition-colors">
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
    </motion.header>
  );
};
