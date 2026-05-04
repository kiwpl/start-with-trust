import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  tagline: string;
  monthly: string;
  annual: string;
  priceSuffix: { m: string; a: string };
  blurb: string;
  features: string[];
  cta: string;
  ctaStyle: "filled" | "outline" | "dark";
  popular?: boolean;
  customPrice?: boolean;
  annualHelper?: string;
};

const TIERS: Tier[] = [
  {
    name: "Basic",
    tagline: "Essentials",
    monthly: "$149",
    annual: "$1,240",
    priceSuffix: { m: "/mo", a: "/yr" },
    annualHelper: "~$103/mo · save $548",
    blurb: "For boutique residential properties up to 50 units.",
    features: [
      "Up to 150 inbound calls/month",
      "Triage & urgency classification",
      "Coordinator SMS & email alerts",
      "Call logs & written summaries",
      "Email support",
    ],
    cta: "Get Started",
    ctaStyle: "outline",
  },
  {
    name: "Pro",
    tagline: "Professional",
    monthly: "$349",
    annual: "$2,908",
    priceSuffix: { m: "/mo", a: "/yr" },
    annualHelper: "~$242/mo · save $1,280",
    blurb: "For mid-size properties or small portfolios up to 200 units.",
    features: [
      "Up to 300 inbound calls/month",
      "Triage & urgency classification",
      "Coordinator SMS & email alerts",
      "Call logs & written summaries",
      "Automated resident callbacks",
      "Call history dashboard",
      "Multi-property support (up to 10)",
      "Priority support",
    ],
    cta: "Get Started",
    ctaStyle: "filled",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    priceSuffix: { m: "", a: "" },
    blurb: "For large portfolios, property managers, and white-label partners.",
    features: [
      "Up to 500 inbound calls/month",
      "Everything in Pro",
      "Dedicated account manager",
      "SLA guarantee",
      "Unlimited multi-property support",
    ],
    cta: "Let's Talk",
    ctaStyle: "dark",
    customPrice: true,
  },
];

export const Pricing = ({ onCta }: { onCta: () => void }) => {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-28"
      style={{
        backgroundImage: "url('https://as2.ftcdn.net/jpg/05/75/03/73/1000_F_575037343_vhp5rQzfIseWVxWErMiAw9UmG3Y89p3u.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(245, 241, 235, 0.87)", zIndex: 0 }} />
      <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="eyebrow">Simple, transparent pricing</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-[1.05]">
            For property managers who value their residents.
          </h2>
        </motion.div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-sand bg-card p-1">
            <ToggleBtn active={!annual} onClick={() => setAnnual(false)}>Monthly</ToggleBtn>
            <ToggleBtn active={annual} onClick={() => setAnnual(true)}>
              Annual
              <span className="ml-2 inline-block rounded-full bg-terracotta/15 text-terracotta text-[9px] font-semibold tracking-wider px-2 py-0.5 uppercase">
                Save 17%
              </span>
            </ToggleBtn>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-7">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`relative rounded-2xl bg-card border border-sand p-8 flex flex-col ${
                t.popular ? "shadow-warm lg:-translate-y-3" : "shadow-soft"
              }`}
            >
              {t.popular && (
                <>
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-terracotta rounded-t-2xl" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </>
              )}

              <div>
                <h3 className="font-serif text-3xl text-charcoal">{t.name}</h3>
                <p className="text-xs uppercase tracking-[0.18em] text-taupe mt-1">{t.tagline}</p>
              </div>

              <div className="mt-6 min-h-[64px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={annual ? "a" : "m"}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="font-serif text-5xl text-charcoal">
                      {annual ? t.annual : t.monthly}
                    </span>
                    <span className="text-taupe text-sm">
                      {annual ? t.priceSuffix.a : t.priceSuffix.m}
                    </span>
                  </motion.div>
                </AnimatePresence>
                {t.customPrice && (
                  <p className="text-xs text-taupe mt-1">Tailored to your portfolio</p>
                )}
                {annual && t.annualHelper && (
                  <p className="text-xs text-terracotta mt-1.5">{t.annualHelper}</p>
                )}
              </div>

              <p className="mt-4 text-taupe text-[15px] leading-relaxed">{t.blurb}</p>

              <div className="my-7 h-px bg-sand" />

              <ul className="space-y-3 flex-1">
                {t.features.map(f => (
                  <li key={f} className="flex gap-3 text-sm text-charcoal">
                    <Check className="text-terracotta flex-shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onCta}
                className={`mt-8 rounded-full py-3 text-sm font-medium transition ${
                  t.ctaStyle === "filled"
                    ? "bg-terracotta text-white hover:opacity-90"
                    : t.ctaStyle === "outline"
                    ? "border border-terracotta text-terracotta hover:bg-terracotta hover:text-white"
                    : "border border-charcoal/80 text-charcoal hover:bg-charcoal hover:text-white"
                }`}
                style={t.ctaStyle === "dark" ? { borderColor: "#2C2420" } : undefined}
              >
                {t.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ToggleBtn = ({
  active, onClick, children,
}: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button onClick={onClick}
    className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
      active ? "text-white" : "text-charcoal/70 hover:text-charcoal"
    }`}>
    {active && (
      <motion.span layoutId="toggle-pill"
        className="absolute inset-0 rounded-full bg-terracotta -z-0"
        transition={{ type: "spring", stiffness: 400, damping: 35 }} />
    )}
    <span className="relative z-10 flex items-center">{children}</span>
  </button>
);
