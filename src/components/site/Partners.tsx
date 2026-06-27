import { motion } from "framer-motion";
import { partners } from "@/constants/companyData";
import { Section } from "./Section";

export function Partners() {
  return (
    <Section
      eyebrow="Partners & Allies"
      title={<>Working with India's <span className="text-gradient">institutional leaders</span></>}
      bg="sage"
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {partners.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="grid h-24 place-items-center rounded-xl border border-border bg-card text-center text-xs font-semibold uppercase tracking-wider text-foreground/70 transition hover:border-secondary hover:text-secondary"
          >
            {p}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
