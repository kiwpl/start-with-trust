import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

type Cell = boolean | string;

const ROWS: { feature: string; cells: [Cell, Cell, Cell] }[] = [
  { feature: "Inbound calls per month", cells: ["150", "500", "Unlimited"] },
  { feature: "Triage & urgency classification", cells: [true, true, true] },
  { feature: "Coordinator SMS & email alerts", cells: [true, true, true] },
  { feature: "Call logs & written summaries", cells: [true, true, true] },
  { feature: "Automated resident callbacks", cells: [false, true, true] },
  { feature: "Call history dashboard", cells: [false, true, true] },
  { feature: "Custom after-hours greeting", cells: [false, true, true] },
  { feature: "Multi-property support", cells: ["—", "Up to 3", "Unlimited"] },
  { feature: "Custom voice persona & script", cells: [false, false, true] },
  { feature: "Full API access", cells: [false, false, true] },
  { feature: "Dedicated account manager", cells: [false, false, true] },
  { feature: "SLA guarantee", cells: [false, false, true] },
  { feature: "White-label option", cells: [false, false, true] },
];

export const Compare = () => (
  <section id="compare" className="bg-beige py-28">
    <div className="mx-auto max-w-6xl px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="eyebrow">Compare plans</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-[1.05]">
          Find the fit for your portfolio.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
        className="mt-14 rounded-2xl bg-card border border-sand shadow-soft overflow-hidden"
      >
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] text-sm">
          <div className="p-5 border-b border-sand text-xs uppercase tracking-[0.18em] text-taupe">
            Feature
          </div>
          {["Lobby", "Concierge", "Estate"].map(c => (
            <div key={c}
              className="p-5 border-b border-sand text-center font-serif text-lg text-charcoal">
              {c}
            </div>
          ))}

          {ROWS.map((r, i) => (
            <div key={r.feature} className="contents">
              <div className={`p-5 text-charcoal ${i % 2 ? "bg-beige/50" : ""}`}>
                {r.feature}
              </div>
              {r.cells.map((c, idx) => (
                <div key={idx}
                  className={`p-5 text-center text-charcoal/90 ${i % 2 ? "bg-beige/50" : ""}`}>
                  {typeof c === "boolean"
                    ? c
                      ? <Check className="inline text-terracotta" size={18} strokeWidth={2.5} />
                      : <Minus className="inline text-taupe/50" size={16} />
                    : <span className="text-sm">{c}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
