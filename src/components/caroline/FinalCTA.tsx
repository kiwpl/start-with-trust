import { motion } from "framer-motion";

export const FinalCTA = ({ onCta }: { onCta: () => void }) => (
  <section style={{ backgroundColor: "#2C2420" }} className="pt-28 pb-20">
    <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <h2 className="font-serif text-5xl sm:text-6xl leading-[1.05]"
          style={{ color: "#FAF7F2" }}>
          Never miss a 2am call again.
        </h2>
        <p className="mt-5 text-lg" style={{ color: "#C7B8A8" }}>
          Caroline is ready when you are.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button onClick={onCta}
            className="rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-white hover:opacity-90 transition">
            Get Started
          </button>
          <button onClick={onCta}
            className="rounded-full border px-7 py-3.5 text-sm font-medium transition hover:bg-[#FAF7F2] hover:text-[#2C2420]"
            style={{ borderColor: "#FAF7F2", color: "#FAF7F2" }}>
            Book a Demo
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Footer = ({ onBookDemo }: { onBookDemo: () => void }) => (
  <footer style={{ backgroundColor: "#2C2420", color: "#C7B8A8" }} className="pt-12 pb-10">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
          <span className="font-serif text-xl tracking-tight" style={{ color: "#FAF7F2" }}>
            Caroline
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-7 text-sm">
          {[
            ["How it Works", "#how"],
            ["Pricing", "#pricing"],
            ["Compare", "#compare"],
            ["FAQ", "#faq"],
          ].map(([l, h]) => (
            <a key={h} href={h} className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <button onClick={onBookDemo}
          className="rounded-full border border-terracotta text-terracotta px-5 py-2 text-sm font-medium hover:bg-terracotta hover:text-white transition">
          Book a Demo
        </button>
      </div>
      <div className="mt-10 pt-6 border-t text-center text-xs"
        style={{ borderColor: "rgba(199, 184, 168, 0.15)" }}>
        © {new Date().getFullYear()} Caroline · After-hours, handled with grace.
      </div>
    </div>
  </footer>
);
