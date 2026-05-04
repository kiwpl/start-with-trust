import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, AudioWaveform, Check, ChevronDown, ShieldCheck, PhoneCall,
  Bell, ClipboardList, ArrowRight, Sparkles,
} from "lucide-react";
import { WaitlistModal } from "@/components/caroline2/WaitlistModal";

/* ------------------------------- Helpers -------------------------------- */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

/* -------------------------------- Navbar -------------------------------- */
const Navbar = ({ onCta }: { onCta: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
      scrolled ? "glass border-b border-border/60" : "bg-transparent"
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="h-9 w-9 rounded-xl bg-sage-soft flex items-center justify-center">
            <AudioWaveform className="text-sage" size={18} strokeWidth={2.5} />
          </span>
          <span className="font-bold text-xl text-navy tracking-tight">Caroline</span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition">
              {l.label}
            </a>
          ))}
        </nav>
        <button onClick={onCta}
          className="rounded-full bg-sage text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:shadow-glow hover:opacity-95 transition">
          Book a Demo
        </button>
      </div>
    </header>
  );
};

/* --------------------------------- Hero --------------------------------- */
const Hero = ({ onCta }: { onCta: () => void }) => (
  <section className="relative pt-36 pb-24 overflow-hidden">
    {/* Background blobs */}
    <div className="blob bg-sage-soft -top-20 -left-32 h-[420px] w-[420px]" />
    <div className="blob bg-amber-soft top-32 -right-24 h-[360px] w-[360px]" />

    <div className="relative mx-auto max-w-6xl px-6 lg:px-10 text-center">
      <motion.div {...fadeUp}>
        <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-semibold text-navy/70 shadow-sm">
          <Sparkles size={14} className="text-amber-brand" />
          After-hours, on autopilot
        </span>
      </motion.div>

      <motion.h1 {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}
        className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-navy leading-[1.05] tracking-tight">
        The AI voice agent your<br/> building never sleeps without.
      </motion.h1>

      <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
        Caroline handles after-hours maintenance calls, triages emergencies,
        and keeps your coordinator in the loop — automatically, every night.
      </motion.p>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}
        className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <button onClick={onCta}
          className="group rounded-full bg-sage text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:shadow-glow transition flex items-center gap-2">
          Start Free Trial
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
        <a href="#how"
          className="rounded-full border border-border bg-card text-navy px-7 py-3.5 text-sm font-semibold hover:bg-muted transition">
          See How It Works
        </a>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {[
          { label: "Powered by Retell AI", dot: "bg-sage" },
          { label: "Supabase-backed", dot: "bg-amber-brand" },
          { label: "Live 24/7", dot: "bg-navy" },
        ].map(p => (
          <span key={p.label}
            className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-navy/80 shadow-sm">
            <span className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
            {p.label}
          </span>
        ))}
      </motion.div>

      {/* Floating call card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-16 mx-auto max-w-md rounded-3xl bg-card border border-border shadow-card p-6 text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-sage-soft flex items-center justify-center">
              <PhoneCall className="text-sage" size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">Caroline</p>
              <p className="text-xs text-muted-foreground">Active call · Unit 304</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sage-soft px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-sage">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sage" />
            </span>
            Live
          </span>
        </div>
        <div className="mt-5 space-y-2.5 text-sm">
          <div className="flex justify-between"><span className="text-muted-foreground">Issue</span><span className="text-navy font-medium">Water leak under sink</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Urgency</span><span className="text-amber-brand font-semibold">High</span></div>
          <div className="flex justify-between"><span className="text-muted-foreground">Coordinator</span><span className="text-navy font-medium">Notified · 12s ago</span></div>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ----------------------------- How It Works ----------------------------- */
const HowItWorks = () => {
  const steps = [
    { n: 1, title: "Resident calls after hours", body: "Caroline answers instantly — no voicemail, no waiting." },
    { n: 2, title: "Caroline triages the issue", body: "She identifies urgency, gathers details, and logs the call." },
    { n: 3, title: "Coordinator is notified", body: "Your on-call gets paged; the resident gets a callback." },
  ];
  return (
    <section id="how" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-sage">How it works</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-navy leading-[1.05]">
            From the first ring to full resolution.
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* dashed line */}
          <div className="hidden lg:block absolute top-9 left-[16%] right-[16%] border-t-2 border-dashed border-border" />
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8 relative">
            {steps.map((s, i) => (
              <motion.div key={s.n} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-card border border-border shadow-soft flex items-center justify-center text-xl font-bold text-sage">
                  {s.n}
                </div>
                <h3 className="mt-6 font-bold text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed max-w-xs mx-auto">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------- Features ------------------------------- */
const Features = () => {
  const items = [
    { icon: ShieldCheck, color: "sage", title: "Smart Emergency Triage", body: "Distinguishes active emergencies from routine maintenance, instantly." },
    { icon: PhoneCall, color: "amber", title: "Coordinator Outbound Alerts", body: "Calls your on-call coordinator and relays the situation in plain English." },
    { icon: Bell, color: "sage", title: "Resident Callback Loop", body: "Automatically follows up with residents once the coordinator is on it." },
    { icon: ClipboardList, color: "amber", title: "Persistent Call Logging", body: "Every call saved with caller name, unit, issue type, and urgency level." },
  ];
  return (
    <section id="features" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-sage">What she does</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-navy leading-[1.05]">
            A whole night-shift, in one voice.
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div key={it.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-card border border-border p-6 shadow-soft transition">
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${
                it.color === "sage" ? "bg-sage-soft" : "bg-amber-soft"
              }`}>
                <it.icon size={20} className={it.color === "sage" ? "text-sage" : "text-amber-brand"} />
              </div>
              <h3 className="mt-5 font-bold text-lg text-navy">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- Pricing ------------------------------- */
type Tier = {
  name: string; tagline: string;
  monthly: number | "Custom"; yearly: number | "Custom"; yearlyTotal?: string;
  blurb: string; features: string[]; cta: string; popular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Essentials", tagline: "Single buildings or pilot deployments",
    monthly: 149, yearly: 124, yearlyTotal: "$1,488/yr",
    blurb: "Everything you need to put Caroline on duty for one property.",
    features: [
      "1 property / phone number",
      "Up to 200 inbound calls/month",
      "Emergency triage + urgency classification",
      "Automated coordinator outbound calls",
      "Resident callback loop",
      "Call logs stored for 30 days",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional", tagline: "Property managers with multiple sites",
    monthly: 349, yearly: 290, yearlyTotal: "$3,480/yr",
    blurb: "Scale Caroline across your portfolio with priority routing.",
    features: [
      "Up to 5 properties / phone numbers",
      "Up to 1,000 inbound calls/month",
      "Priority coordinator escalation routing",
      "Custom agent name and greeting",
      "Call logs stored for 90 days",
      "Webhook / Zapier integration",
      "Priority email + chat support",
    ],
    cta: "Start Free Trial", popular: true,
  },
  {
    name: "Enterprise", tagline: "Large portfolios & white-label deployments",
    monthly: "Custom", yearly: "Custom",
    blurb: "Tailored deployments with SLA guarantees and dedicated support.",
    features: [
      "Unlimited properties",
      "Unlimited call volume",
      "Dedicated Retell AI agent configuration",
      "White-label branding",
      "Custom escalation workflows",
      "SLA guarantee",
      "Dedicated onboarding + account manager",
      "SSO + advanced access controls",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = ({ onCta }: { onCta: () => void }) => {
  const [yearly, setYearly] = useState(false);
  return (
    <section id="pricing" className="py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-sage">Pricing</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-navy leading-[1.05]">
            Simple, transparent pricing.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Built for property managers, strata coordinators, and residential operators running on Retell AI.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            <ToggleBtn active={!yearly} onClick={() => setYearly(false)}>Monthly</ToggleBtn>
            <ToggleBtn active={yearly} onClick={() => setYearly(true)}>
              Yearly
              <span className="ml-2 inline-block rounded-full bg-amber-soft text-amber-brand text-[10px] font-bold tracking-wider px-2 py-0.5 uppercase">
                Save 17%
              </span>
            </ToggleBtn>
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {TIERS.map((t, i) => {
            const price = yearly ? t.yearly : t.monthly;
            return (
              <motion.div key={t.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-3xl bg-card p-8 flex flex-col transition ${
                  t.popular
                    ? "border-2 border-sage shadow-glow lg:-translate-y-3"
                    : "border border-border shadow-soft"
                }`}>
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage text-primary-foreground text-[10px] tracking-[0.18em] uppercase font-bold px-3 py-1 rounded-full shadow-soft">
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-2xl text-navy">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>

                <div className="mt-6 min-h-[78px]">
                  <AnimatePresence mode="wait">
                    <motion.div key={yearly ? "y" : "m"}
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.2 }}>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-extrabold text-navy tracking-tight">
                          {typeof price === "number" ? `$${price}` : price}
                        </span>
                        {typeof price === "number" && (
                          <span className="text-muted-foreground text-sm">/mo</span>
                        )}
                      </div>
                      {yearly && t.yearlyTotal && (
                        <p className="text-xs text-muted-foreground mt-1">Billed {t.yearlyTotal}</p>
                      )}
                      {price === "Custom" && (
                        <p className="text-xs text-muted-foreground mt-1">Tailored to your portfolio</p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.blurb}</p>

                <div className="my-7 h-px bg-border" />

                <ul className="space-y-3 flex-1">
                  {t.features.map(f => (
                    <li key={f} className="flex gap-3 text-sm text-navy/90">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-sage-soft flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-sage" strokeWidth={3} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={onCta}
                  className={`mt-8 rounded-full py-3 text-sm font-semibold transition ${
                    t.popular
                      ? "bg-sage text-primary-foreground hover:shadow-glow"
                      : "bg-navy text-white hover:opacity-90"
                  }`}>
                  {t.cta}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ToggleBtn = ({ active, onClick, children }: {
  active: boolean; onClick: () => void; children: React.ReactNode;
}) => (
  <button onClick={onClick}
    className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
      active ? "text-primary-foreground" : "text-navy/70 hover:text-navy"
    }`}>
    {active && (
      <motion.span layoutId="pricing-toggle"
        className="absolute inset-0 rounded-full bg-sage -z-0"
        transition={{ type: "spring", stiffness: 400, damping: 35 }} />
    )}
    <span className="relative z-10 flex items-center">{children}</span>
  </button>
);

/* ---------------------------------- FAQ --------------------------------- */
const FAQS = [
  { q: "What is Retell AI and how does Caroline use it?",
    a: "Caroline is built on Retell AI, a platform for deploying real-time conversational voice agents. Caroline uses Retell to handle live phone calls, understand spoken language, and respond naturally — all without human intervention." },
  { q: "Does Caroline work with any phone system?",
    a: "Caroline uses a dedicated phone number provisioned through Retell AI. No special hardware or PBX integration is required — residents simply call the after-hours number." },
  { q: "What happens when Caroline detects an emergency?",
    a: "Caroline immediately classifies the call as 'immediate' urgency, advises the resident on safety steps, then automatically places an outbound call to the on-call coordinator and follows up with the resident once contact is made." },
  { q: "Can I customize the agent's name and script?",
    a: "Yes — on Professional and Enterprise plans, you can customize the agent's name, greeting, and escalation behavior to match your brand and operational procedures." },
  { q: "Is my call data secure?",
    a: "All call data is stored securely in Supabase with row-level security. Logs are retained per your plan tier and are accessible only to authorized users." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-muted/40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="text-center">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-sage">FAQ</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-navy leading-[1.05]">
            Questions, answered.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.04 }}
                className="rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-5 p-5 text-left">
                  <span className="font-semibold text-navy">{item.q}</span>
                  <ChevronDown size={18}
                    className={`text-sage flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}>
                      <p className="px-5 pb-5 text-muted-foreground leading-relaxed text-[15px]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------- CTA Banner ---------------------------- */
const CTABanner = ({ onCta }: { onCta: () => void }) => (
  <section id="contact" className="py-24">
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <motion.div {...fadeUp}
        className="relative overflow-hidden rounded-[2rem] bg-sage p-10 sm:p-16 text-center shadow-glow">
        <div className="blob bg-white/30 -top-20 -left-20 h-72 w-72" />
        <div className="blob bg-amber-brand/30 -bottom-24 -right-16 h-72 w-72" />
        <div className="relative">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.05]">
            Ready to give your building<br/> 24/7 coverage?
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-xl mx-auto">
            Set up takes under 30 minutes. No hardware. No complicated integrations.
          </p>
          <button onClick={onCta}
            className="mt-8 rounded-full bg-white text-navy px-8 py-3.5 text-sm font-bold hover:opacity-95 transition inline-flex items-center gap-2">
            Start Free Trial
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

/* --------------------------------- Footer ------------------------------- */
const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div>
        <div className="flex items-center gap-2.5">
          <span className="h-9 w-9 rounded-xl bg-sage-soft flex items-center justify-center">
            <AudioWaveform className="text-sage" size={18} strokeWidth={2.5} />
          </span>
          <span className="font-bold text-xl text-navy">Caroline</span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Caroline — After-hours, handled.</p>
      </div>
      <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-navy transition">Privacy Policy</a>
        <a href="#" className="hover:text-navy transition">Terms of Service</a>
        <a href="#contact" className="hover:text-navy transition">Contact</a>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-navy/70">
          <Phone size={12} /> Powered by Retell AI
        </span>
      </nav>
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-8 text-xs text-muted-foreground">
      © 2025 Caroline. All rights reserved.
    </div>
  </footer>
);

/* --------------------------------- Page --------------------------------- */
const Index = () => {
  const [open, setOpen] = useState(false);
  const onCta = () => setOpen(true);
  return (
    <div className="min-h-screen bg-background text-navy">
      <Navbar onCta={onCta} />
      <main>
        <Hero onCta={onCta} />
        <HowItWorks />
        <Features />
        <Pricing onCta={onCta} />
        <FAQ />
        <CTABanner onCta={onCta} />
      </main>
      <Footer />
      <WaitlistModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Index;
