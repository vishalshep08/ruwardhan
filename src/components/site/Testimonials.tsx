import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/constants/companyData";
import { Section } from "./Section";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Voices from the field"
      title={<>Trusted by farmers, <span className="text-gradient">backed by partners</span></>}
    >
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
            className="relative rounded-3xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-7"
          >
            <Quote className="absolute right-4 top-4 h-8 w-8 text-secondary/15 sm:h-10 sm:w-10 sm:right-5 sm:top-5" />
            <div className="flex gap-0.5 text-accent">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85 sm:mt-4">
              "{t.text}"
            </blockquote>
            <figcaption className="mt-4 border-t border-border pt-4 sm:mt-5">
              <div className="font-display text-sm font-semibold text-primary sm:text-base">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
