import { useState } from "react";
import { Navbar } from "@/components/caroline/Navbar";
import { Hero } from "@/components/caroline/Hero";
import { HowItWorks } from "@/components/caroline/HowItWorks";
import { Pricing } from "@/components/caroline/Pricing";
import { Compare } from "@/components/caroline/Compare";
import { Testimonials } from "@/components/caroline/Testimonials";
import { FAQ } from "@/components/caroline/FAQ";
import { FinalCTA, Footer } from "@/components/caroline/FinalCTA";
import { DemoModal } from "@/components/caroline/DemoModal";

const Index = () => {
  const [open, setOpen] = useState(false);
  const onCta = () => setOpen(true);

  return (
    <div className="min-h-screen bg-ivory text-charcoal antialiased">
      <Navbar onBookDemo={onCta} />
      <main>
        <Hero onCta={onCta} />
        <HowItWorks />
        <Pricing onCta={onCta} />
        <Compare />
        <Testimonials />
        <FAQ />
        <FinalCTA onCta={onCta} />
      </main>
      <Footer onBookDemo={onCta} />
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Index;
