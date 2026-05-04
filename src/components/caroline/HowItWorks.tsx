import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Resident Calls", body: "Caroline answers instantly, any time of night." },
  { n: "02", title: "Issue Triaged", body: "She gathers details, assesses urgency in real time." },
  { n: "03", title: "Coordinator Alerted", body: "The right person is notified immediately." },
  { n: "04", title: "Resident Updated", body: "An automated callback closes the loop." },
];

export const HowItWorks = () => (
  <section id="how" className="bg-beige py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="eyebrow">The process</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-[1.05]">
          From the first ring to full resolution.
        </h2>
      </motion.div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative"
          >
            <div className="font-serif text-terracotta text-4xl">{s.n}</div>
            <div className="mt-4 h-px w-10 bg-terracotta/40" />
            <h3 className="mt-5 font-serif text-2xl text-charcoal">{s.title}</h3>
            <p className="mt-2 text-taupe leading-relaxed text-[15px]">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
