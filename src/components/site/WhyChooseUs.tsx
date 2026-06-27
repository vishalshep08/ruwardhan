import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { whyChoose } from "@/constants/companyData";
import { Section } from "./Section";

export function WhyChooseUs() {
  return (
    <Section
      eyebrow="Why Ruwardhan"
      title={<>Built like a corporate. <span className="text-gradient">Rooted with farmers.</span></>}
      subtitle="Eight reasons leading farmers, investors and government partners choose us."
      bg="sage"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {whyChoose.map((w, i) => {
          const Icon = (Icons[w.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
          return (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-6"
            >
              <div className="mb-3 inline-grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-accent group-hover:text-accent-foreground sm:mb-4 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-display text-base font-semibold text-primary sm:text-lg">{w.title}</div>
              <p className="mt-1.5 text-sm text-foreground/70">{w.text}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
