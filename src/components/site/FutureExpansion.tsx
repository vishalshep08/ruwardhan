import { motion } from "framer-motion";
import { future } from "@/constants/companyData";
import { Section } from "./Section";
import { Rocket } from "lucide-react";

export function FutureExpansion() {
  return (
    <Section
      id="future"
      eyebrow="Future Roadmap"
      title={<>What's next for <span className="text-gradient">Ruwardhan</span></>}
      subtitle="A four-year plan that compounds farmer income with new revenue streams."
      bg="dark"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {future.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-accent/20 px-2.5 py-1 text-xs font-bold text-accent sm:px-3">
                {f.year}
              </span>
              <Rocket className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-3 font-display text-lg font-semibold text-primary-foreground sm:mt-4 sm:text-xl">
              {f.title}
            </div>
            <p className="mt-1.5 text-sm text-primary-foreground/75">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
