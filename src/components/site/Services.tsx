import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "@/constants/companyData";
import { Section } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title={<>End-to-end services for <span className="text-gradient">every season</span></>}
      subtitle="From the first soil test to market-day pricing — Ruwardhan stays alongside."
    >
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = (Icons[s.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition hover:border-secondary/40 hover:shadow-[var(--shadow-card)] sm:gap-4 sm:p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--sage)] text-secondary sm:h-14 sm:w-14">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <div className="font-display text-sm font-semibold text-primary sm:text-lg">{s.title}</div>
                <div className="text-xs text-muted-foreground">Available across all districts</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
