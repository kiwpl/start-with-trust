import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const UNIT_OPTIONS = ["1-50", "51-100", "101-200", "200+"];

export const DemoModal = ({ open, onClose }: DemoModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [property, setProperty] = useState("");
  const [unitCount, setUnitCount] = useState(UNIT_OPTIONS[0]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setName(""); setEmail(""); setProperty(""); setUnitCount(UNIT_OPTIONS[0]);
    setSuccess(false); setError(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const { error } = await supabase.from("demo_requests").insert({
      name: name.trim(),
      email: email.trim(),
      property_name: property.trim(),
      unit_count: unitCount,
    });
    setSubmitting(false);
    if (error) {
      setError("Something went wrong. Please try again.");
      return;
    }
    setSuccess(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            style={{ backgroundColor: "rgba(44, 36, 32, 0.5)" }}
            onClick={handleClose} />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-2xl bg-card border border-sand shadow-warm p-8"
          >
            <button onClick={handleClose}
              className="absolute right-4 top-4 text-taupe hover:text-charcoal transition-colors">
              <X size={20} />
            </button>

            {success ? (
              <div className="py-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10">
                  <Check className="text-terracotta" size={28} />
                </div>
                <h3 className="font-serif text-2xl text-charcoal">Thank you.</h3>
                <p className="mt-2 text-taupe">
                  We'll be in touch within one business day to schedule your demo with Caroline.
                </p>
                <button onClick={handleClose}
                  className="mt-6 rounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-white hover:opacity-90 transition">
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Book a demo</p>
                <h3 className="mt-2 font-serif text-2xl text-charcoal">
                  Meet Caroline.
                </h3>
                <p className="mt-1 text-sm text-taupe">
                  Tell us about your property — we'll show you what after-hours can feel like.
                </p>

                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <Field label="Full name" value={name} onChange={setName} required />
                  <Field label="Email address" type="email" value={email} onChange={setEmail} required />
                  <Field label="Property name" value={property} onChange={setProperty} required />
                  <div>
                    <label className="block text-xs font-medium text-charcoal mb-1.5">
                      Number of units
                    </label>
                    <select
                      value={unitCount}
                      onChange={(e) => setUnitCount(e.target.value)}
                      className="w-full rounded-lg border border-sand bg-card px-3.5 py-2.5 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/40"
                    >
                      {UNIT_OPTIONS.map(o => <option key={o} value={o}>{o} units</option>)}
                    </select>
                  </div>

                  {error && <p className="text-xs text-red-600">{error}</p>}

                  <button type="submit" disabled={submitting}
                    className="w-full rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition disabled:opacity-60">
                    {submitting ? "Sending…" : "Request my demo"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Field = ({
  label, value, onChange, type = "text", required,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) => (
  <div>
    <label className="block text-xs font-medium text-charcoal mb-1.5">{label}</label>
    <input
      type={type} value={value} required={required}
      maxLength={200}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-sand bg-card px-3.5 py-2.5 text-sm text-charcoal placeholder:text-taupe/60 focus:outline-none focus:ring-2 focus:ring-terracotta/40"
    />
  </div>
);
