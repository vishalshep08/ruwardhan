import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { divisions } from "@/constants/companyData";
import { Section } from "./Section";

export function BusinessDivisions() {
  return (
    <Section
      id="divisions"
      eyebrow="Business Divisions"
      title={<>Eight divisions. <span className="text-gradient">One mission.</span></>}
      subtitle="Every Ruwardhan division compounds the next — energy lowers costs, drones lift yields, inputs improve quality, schemes unlock capital."
      bg="sage"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {divisions.map((d, i) => {
          const Icon = (Icons[d.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sprout;
          return <DivisionCard key={d.id} d={d} Icon={Icon} index={i} />;
        })}
      </div>
    </Section>
  );
}

function DivisionCard({
  d, Icon, index,
}: {
  d: (typeof divisions)[number];
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1.5 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={d.image}
          alt={d.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
        <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-accent text-accent-foreground shadow-lg">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-semibold text-primary-foreground">
          {d.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-foreground/75">{d.description}</p>
        <ul className="mt-4 space-y-1.5">
          {d.services.map((s) => (
            <li key={s} className="flex items-start gap-2 text-xs text-foreground/70">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {s}
            </li>
          ))}
        </ul>
        <Link
          to="/divisions/$divisionId"
          params={{ divisionId: d.id }}
          className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-secondary transition group-hover:gap-2.5"
        >
          Learn More
          <Icons.ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
