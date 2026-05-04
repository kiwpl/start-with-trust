import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
});

export const WaitlistModal = ({
  open, onClose, title = "Get early access to Caroline",
  subtitle = "Drop your email and we'll be in touch within one business day.",
}: { open: boolean; onClose: () => void; title?: string; subtitle?: string }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ email });
    if (!parsed.success) { setError(parsed.error.issues[0].message); return; }
    setLoading(true);
    const { error: dbError } = await supabase.from("waitlist").insert({ email: parsed.data.email });
    setLoading(false);
    if (dbError) { setError("Something went wrong. Please try again."); return; }
    setDone(true);
  };

  const close = () => { setEmail(""); setDone(false); setError(null); onClose(); };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/40 backdrop-blur-sm"
          onClick={close}
        >
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full max-w-md rounded-3xl bg-card p-8 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-navy">
              <X size={20} />
            </button>
            {!done ? (
              <>
                <h3 className="font-bold text-2xl text-navy">{title}</h3>
                <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed">{subtitle}</p>
                <form onSubmit={submit} className="mt-6 space-y-3">
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@property.com" maxLength={255}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-navy placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent transition"
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <button
                    type="submit" disabled={loading}
                    className="w-full rounded-xl bg-sage text-primary-foreground font-semibold py-3 hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" size={18} /> : null}
                    {loading ? "Submitting..." : "Request access"}
                  </button>
                </form>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  We'll never share your email. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="mx-auto h-14 w-14 rounded-full bg-sage-soft flex items-center justify-center">
                  <Check className="text-sage" size={28} strokeWidth={3} />
                </div>
                <h3 className="mt-5 font-bold text-2xl text-navy">You're on the list</h3>
                <p className="mt-2 text-muted-foreground">We'll reach out soon to schedule your demo.</p>
                <button onClick={close} className="mt-6 rounded-xl bg-navy text-white font-semibold px-6 py-3 hover:opacity-90 transition">
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
