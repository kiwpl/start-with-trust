import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { n: "01", title: "Resident Calls", body: "Caroline answers instantly, any time of night." },
  { n: "02", title: "Issue Triaged", body: "She gathers details, assesses urgency in real time." },
  { n: "03", title: "Coordinator Alerted", body: "A detailed email summary is always sent to the coordinator. In a true emergency, Caroline also calls them directly." },
  { n: "04", title: "Resident Updated", body: "An automated callback closes the loop." },
];

const DURATION = 10000;

export const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(Date.now());
  const rafRef = useRef<number>();

  useEffect(() => {
    startRef.current = Date.now();
    setProgress(0);

    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(pct);
      if (elapsed >= DURATION) {
        setActive((a) => (a + 1) % STEPS.length);
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active]);

  const handleClick = (i: number) => {
    if (i === active) {
      startRef.current = Date.now();
      setProgress(0);
    } else {
      setActive(i);
    }
  };

  return (
    <section id="how-it-works" className="bg-beige py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">The process</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-[1.05]">
            From the first ring to full resolution.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          {/* Left: step list */}
          <div className="lg:col-span-2 order-2 lg:order-1 space-y-8">
            {STEPS.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.n}
                  onClick={() => handleClick(i)}
                  className="block w-full text-left transition-opacity duration-500"
                  style={{ opacity: isActive ? 1 : 0.35 }}
                >
                  <div className="text-xs font-medium tracking-[0.2em] uppercase text-terracotta">
                    Step {s.n}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl text-charcoal">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-taupe leading-relaxed text-[15px]">{s.body}</p>
                  <div className="mt-4 h-[2px] w-full bg-terracotta/15 overflow-hidden rounded-full">
                    <div
                      className="h-full bg-terracotta"
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                        transition: isActive ? "none" : "width 0.3s ease",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: visual */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="relative rounded-2xl bg-white border border-sand shadow-soft p-8 sm:p-10 min-h-[380px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  {active === 0 && <CallVisual />}
                  {active === 1 && <TriageVisual />}
                  {active === 2 && <AlertVisual />}
                  {active === 3 && <UpdateVisual />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── Visuals ───────── */

const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-[260px] h-[420px] rounded-[36px] bg-charcoal p-3 shadow-warm">
    <div className="w-full h-full rounded-[28px] bg-ivory relative overflow-hidden flex flex-col">
      {children}
    </div>
  </div>
);

const CallVisual = () => (
  <div className="flex items-center justify-center py-4">
    <PhoneFrame>
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        {/* ripples */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="absolute rounded-full border border-terracotta/40"
              style={{
                width: 80,
                height: 80,
                animation: `ripple 2s ease-out ${i * 0.6}s infinite`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 w-16 h-16 rounded-full bg-terracotta flex items-center justify-center text-white text-2xl">
          ☎
        </div>
        <p className="relative z-10 mt-6 eyebrow">Incoming call</p>
        <p className="relative z-10 mt-1 font-serif text-2xl text-charcoal">Unit 4B</p>
        <div className="relative z-10 mt-6 flex items-center gap-2 text-xs text-taupe">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Connected
        </div>
      </div>
    </PhoneFrame>
    <style>{`
      @keyframes ripple {
        0% { transform: scale(0.6); opacity: 0.8; }
        100% { transform: scale(2.2); opacity: 0; }
      }
    `}</style>
  </div>
);

const TYPING: { who: "resident" | "caroline"; text: string }[] = [
  { who: "resident", text: "My bathroom ceiling is flooding — water is pouring through, I don't know what to do." },
  { who: "caroline", text: "Okay, I need you to stay calm. Is the water actively pouring right now, or has it slowed down?" },
  { who: "resident", text: "It's still pouring, it's getting worse." },
  { who: "caroline", text: "Got it. Can I get your name and unit number quickly?" },
  { who: "resident", text: "It's Sarah, unit 612." },
  { who: "caroline", text: "Thank you Sarah. I'm logging this as an emergency and the coordinator is being contacted right now." },
];

const TriageVisual = () => {
  const [shown, setShown] = useState(0);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setShown(1), 600),
      setTimeout(() => setShown(2), 1900),
      setTimeout(() => setShown(3), 3200),
      setTimeout(() => setShown(4), 4400),
      setTimeout(() => setShown(5), 5500),
      setTimeout(() => setShown(6), 6800),
      setTimeout(() => setShowCard(true), 8200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="space-y-3 max-w-md mx-auto">
      {TYPING.slice(0, shown).map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex ${m.who === "caroline" ? "justify-start" : "justify-end"}`}
        >
          <div
            className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed ${
              m.who === "caroline"
                ? "bg-beige text-charcoal rounded-bl-sm"
                : "bg-terracotta text-white rounded-br-sm"
            }`}
          >
            {m.text}
          </div>
        </motion.div>
      ))}
      {shown < TYPING.length && (
        <div className={`flex ${TYPING[shown].who === "caroline" ? "justify-start" : "justify-end"}`}>
          <div className={`px-4 py-3 rounded-2xl flex gap-1 ${TYPING[shown].who === "caroline" ? "bg-beige rounded-bl-sm" : "bg-terracotta/30 rounded-br-sm"}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-taupe animate-bounce" style={{ animationDelay: "0s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-taupe animate-bounce" style={{ animationDelay: "0.15s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-taupe animate-bounce" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      )}
      {showCard && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-4 p-4 rounded-xl border border-sand bg-ivory"
        >
          <div className="eyebrow mb-2">Triage</div>
          <div className="flex justify-between text-sm py-1">
            <span className="text-taupe">Issue</span>
            <span className="text-charcoal font-medium">Flooding · bathroom ceiling</span>
          </div>
          <div className="flex justify-between text-sm py-1">
            <span className="text-taupe">Urgency</span>
            <span className="font-medium">🔴 Emergency</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const AlertVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-lg mx-auto rounded-xl border border-sand bg-white shadow-soft overflow-hidden"
    >
      {/* Email header */}
      <div className="flex items-start gap-3 px-5 py-4 border-b border-sand">
        <div className="w-9 h-9 rounded-full bg-terracotta text-white flex items-center justify-center font-serif text-sm shrink-0">
          C
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[13px] text-charcoal font-medium truncate">
              Caroline AI <span className="text-taupe font-normal">&lt;onboarding@resend.dev&gt;</span>
            </p>
            <span className="text-[11px] text-taupe shrink-0">now</span>
          </div>
          <p className="text-[13px] text-taupe mt-0.5">to mike@property.com</p>
        </div>
      </div>
      {/* Subject */}
      <div className="px-5 pt-4">
        <p className="font-serif text-[15px] font-semibold leading-snug text-red-600">
          🚨 EMERGENCY Maintenance Request — Courtland Mews — Unit 612 (Flooding)
        </p>
      </div>
      {/* Body */}
      <div className="px-5 py-4 space-y-1.5 text-[13px] leading-relaxed">
        {[
          ["Caller", "Sarah"],
          ["Caller Phone", "+1 (647) 478-7502"],
          ["Unit", "612"],
          ["Issue Type", "Plumbing — Active Flooding"],
        ].map(([k, v]) => (
          <div key={k} className="flex gap-2">
            <span className="text-taupe w-[110px] shrink-0">{k}:</span>
            <span className="text-charcoal">{v}</span>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-taupe w-[110px] shrink-0">Description:</span>
          <span className="text-charcoal">
            Resident reported water actively pouring through the bathroom ceiling, ongoing and worsening at time of call. Logged as immediate emergency. Coordinator contacted directly.
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-taupe w-[110px] shrink-0">Urgency:</span>
          <span className="text-red-600 font-medium">Immediate (Emergency)</span>
        </div>
      </div>
    </motion.div>
  );
};

const UpdateVisual = () => {
  const [stage, setStage] = useState<"calling" | "summary">("calling");
  useEffect(() => {
    const t = setTimeout(() => setStage("summary"), 2200);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="flex items-center justify-center py-4">
      <PhoneFrame>
        <AnimatePresence mode="wait">
          {stage === "calling" ? (
            <motion.div
              key="calling"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center px-6"
            >
              <div className="w-16 h-16 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta text-2xl animate-pulse">
                ☎
              </div>
              <p className="mt-5 eyebrow">Outgoing</p>
              <p className="mt-1 font-serif text-2xl text-charcoal">Caroline calling…</p>
            </motion.div>
          ) : (
            <motion.div
              key="summary"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col items-center justify-center px-5 text-center"
            >
              <svg width="40" height="40" viewBox="0 0 48 48" className="mb-3">
                <circle cx="24" cy="24" r="22" fill="none" stroke="#22c55e" strokeWidth="2" opacity="0.25" />
                <motion.path
                  d="M14 25 L21 32 L34 17"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </svg>
              <p className="font-serif text-lg text-charcoal leading-snug font-medium">
                Update from your coordinator
              </p>
              <p className="text-[13px] text-taupe mt-2 leading-relaxed">
                Your coordinator has reviewed the issue and confirmed they will arrange for a plumber to assess the leak. You may also receive a direct call from them.
              </p>
              <p className="eyebrow mt-3 text-[10px]">Logged · Coordinator confirmed</p>
            </motion.div>
          )}
        </AnimatePresence>
      </PhoneFrame>
    </div>
  );
};
