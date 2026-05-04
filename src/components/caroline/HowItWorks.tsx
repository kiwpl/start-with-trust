import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { n: "01", title: "Resident Calls", body: "Caroline answers instantly, any time of night." },
  { n: "02", title: "Issue Triaged", body: "She gathers details, assesses urgency in real time." },
  { n: "03", title: "Coordinator Alerted", body: "The right person is notified immediately." },
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

const TYPING = [
  { who: "resident", text: "There's water leaking under my kitchen sink." },
  { who: "caroline", text: "Got it — is the water actively dripping or a slow leak?" },
];

const TriageVisual = () => {
  const [shown, setShown] = useState(0);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShown(1), 1200);
    const t2 = setTimeout(() => setShown(2), 3200);
    const t3 = setTimeout(() => setShowCard(true), 4400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
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
      {shown < 2 && (
        <div className="flex justify-start">
          <div className="bg-beige px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
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
            <span className="text-charcoal font-medium">Water leak · kitchen</span>
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
  const [delivered, setDelivered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDelivered(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="max-w-sm mx-auto">
      <div className="text-xs uppercase tracking-[0.2em] text-taupe mb-3">SMS · To Mike (Coordinator)</div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#3478F6] text-white rounded-2xl rounded-br-sm px-4 py-3 ml-auto max-w-[90%]"
      >
        <p className="text-[14px] leading-relaxed">
          Emergency: Water leak in Unit 4B kitchen. Resident on line.
        </p>
      </motion.div>
      <div className="mt-2 flex items-center justify-end gap-2 text-xs text-taupe">
        {delivered && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[10px]"
          >
            ✓
          </motion.span>
        )}
        <span>{delivered ? "Delivered · 3s ago" : "Sending…"}</span>
      </div>
    </div>
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
              <svg width="48" height="48" viewBox="0 0 48 48" className="mb-4">
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
              <p className="font-serif text-xl text-charcoal leading-snug">Issue logged.</p>
              <p className="text-sm text-taupe mt-2 leading-relaxed">
                Coordinator dispatched.
                <br />
                ETA 20 min.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </PhoneFrame>
    </div>
  );
};
