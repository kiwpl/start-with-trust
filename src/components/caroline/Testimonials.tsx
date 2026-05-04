import { motion } from "framer-motion";

const T = [
  {
    quote: "We used to get woken up at 2am twice a week. Since Caroline, our team sleeps through the night.",
    name: "Sarah M.", role: "Property Manager", city: "Toronto, ON",
  },
  {
    quote: "Residents actually comment that the after-hours experience feels more professional than our daytime staff. That says everything.",
    name: "James T.", role: "Building Owner", city: "Vancouver, BC",
  },
  {
    quote: "Setup took less than a day. Caroline handled her first emergency call the same evening.",
    name: "Priya K.", role: "Portfolio Manager", city: "Calgary, AB",
  },
];

export const Testimonials = () => (
  <section className="py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="eyebrow">What managers are saying</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl text-charcoal leading-[1.05]">
          Trusted by properties across the country.
        </h2>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {T.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="rounded-2xl bg-card border border-sand p-7 shadow-soft flex flex-col"
          >
            <span className="font-serif text-5xl leading-none text-terracotta/60">"</span>
            <blockquote className="mt-2 text-taupe leading-relaxed font-serif text-xl flex-1">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-sand">
              <div className="text-charcoal font-medium text-sm">{t.name}</div>
              <div className="text-taupe text-xs mt-0.5">{t.role} · {t.city}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
