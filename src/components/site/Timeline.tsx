import { motion } from "framer-motion";
import { timeline } from "@/constants/companyData";
import { Section } from "./Section";

export function Timeline() {
  return (
    <Section
      eyebrow="The Farmer Journey"
      title={<>From problem to <span className="text-gradient">prosperity</span></>}
      subtitle="A repeatable, transparent path every Ruwardhan farmer experiences."
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line — left-5 on mobile, center on md */}
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-secondary/0 via-secondary to-secondary/0 md:left-1/2" />
        <ol className="space-y-6 md:space-y-12">
          {timeline.map((t, i) => (
            <motion.li
              key={t.title}
              initial={{ opacity: 0, x: i % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className={`relative pl-14 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Content card */}
              <div className={`${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
                  <div className="font-display text-base font-semibold text-primary sm:text-xl">
                    {String(i + 1).padStart(2, "0")} · {t.title}
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/70">{t.text}</p>
                </div>
              </div>

              {/* Step circle — positioned on the vertical line */}
              <span className="absolute left-1 top-4 grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md md:left-1/2 md:-translate-x-1/2">
                {i + 1}
              </span>
              <div className="hidden md:block" />
            </motion.li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
