import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export const Hero = ({ onCta }: { onCta: () => void }) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory via-ivory to-[hsl(var(--background-warm))]/40" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Caroline · After-hours voice agent</p>
          <h1 className="mt-5 font-serif text-5xl sm:text-6xl lg:text-[5.2rem] leading-[1.02] text-charcoal" style={{ fontVariantLigatures: "none" }}>
            After&#8209;hours,
            <br />
            <span className="text-terracotta italic">handled with grace.</span>
          </h1>
          <p className="mt-7 text-lg text-taupe max-w-xl leading-relaxed">
            Caroline answers every maintenance call your residents make after hours —
            calmly triaging the issue, reaching the right coordinator, and following up
            so no one is left waiting in the dark.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={onCta}
              className="rounded-full bg-terracotta px-7 py-3.5 text-sm font-medium text-white hover:opacity-90 transition shadow-soft">
              Get Started
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[11px] tracking-[0.18em] uppercase text-taupe">
            <span>24/7 live answer</span>
            <span className="text-sand">|</span>
            <span>Built with Retell AI</span>
            <span className="text-sand">|</span>
            <span>AI triage</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 bg-terracotta/5 blur-3xl rounded-full" />
          <div className="rounded-2xl bg-card border border-sand shadow-warm p-7">
            <div className="flex items-center justify-between pb-4 border-b border-sand">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terracotta opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta" />
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-terracotta">LIVE</span>
              </div>
              <Phone size={14} className="text-taupe" />
            </div>

            <p className="mt-5 font-serif text-xl leading-snug text-charcoal italic">
              "Hello, this is Caroline with Courtland Mews. How can I help you this evening?"
            </p>

            <dl className="mt-6 divide-y divide-sand text-sm">
              <Row k="Caller" v="Unit 612" />
              <Row k="Issue" v="Flooding · bathroom ceiling" />
              <Row k="Urgency" v={<span className="text-terracotta font-medium">Emergency</span>} />
              <Row k="Coordinator" v="Dispatched · 11s" />
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Row = ({ k, v }: { k: string; v: React.ReactNode }) => (
  <div className="flex justify-between items-center py-2.5">
    <dt className="text-taupe text-xs uppercase tracking-wider">{k}</dt>
    <dd className="text-charcoal">{v}</dd>
  </div>
);
