import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  bg = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
  bg?: "default" | "sage" | "dark";
}) {
  const bgClass =
    bg === "sage"
      ? "bg-[var(--sage)]"
      : bg === "dark"
        ? "bg-primary text-primary-foreground"
        : "bg-background";
  return (
    <section id={id} className={`relative py-20 md:py-28 ${bgClass} ${className}`}>
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl font-semibold leading-tight md:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base opacity-80 md:text-lg">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
