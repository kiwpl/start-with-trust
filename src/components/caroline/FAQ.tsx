import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const QA = [
  {
    q: "How does Caroline handle a genuine emergency like a fire or gas leak?",
    a: "Caroline immediately classifies the call as an emergency, instructs the resident to dial 911 if needed, and pages your on-call coordinator within seconds. She'll keep escalating until a human confirms receipt — and she stays on the line if the resident needs her.",
  },
  {
    q: "What happens if the coordinator doesn't answer Caroline's call?",
    a: "Caroline follows your escalation rules — typically she'll attempt the primary coordinator twice, then move to your secondary contact, and finally to a fallback number you specify. Every step is logged and timestamped.",
  },
  {
    q: "Is resident data stored securely and privately?",
    a: "Yes. All call recordings, transcripts, and resident details are encrypted in transit and at rest. We are SOC 2 aligned and never share data with third parties. Recordings can be auto-purged on a schedule of your choosing.",
  },
  {
    q: "How long does it take to set Caroline up for my property?",
    a: "Most properties are live within one business day. We provision your number, configure your greeting and escalation tree, and run a test call with you before going live.",
  },
  {
    q: "Does Caroline work with our existing property management software?",
    a: "Yes. Caroline integrates with most major PMS platforms — including AppFolio, Buildium, Yardi, and others — to log work orders directly. The Estate plan also includes custom integrations for in-house systems.",
  },
  {
    q: "What is Retell AI and why does it power Caroline?",
    a: "Retell AI is the realtime voice infrastructure behind Caroline. It's what allows her to listen, understand, and respond at near-human latency — without the awkward pauses and dropouts you get from older IVR systems.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-beige py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="eyebrow">Frequently asked</p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-[1.05]">
            Everything you need to know.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-xl bg-card border border-sand overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-5 p-5 text-left"
                >
                  <span className="font-serif text-lg text-charcoal">{item.q}</span>
                  <span className="flex-shrink-0 text-terracotta">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-5 pb-5 text-taupe leading-relaxed text-[15px]">
                        {item.a}
                      </p>
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
