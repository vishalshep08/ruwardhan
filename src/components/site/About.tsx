import { motion } from "framer-motion";
import { Sprout, Target, Eye, HeartHandshake } from "lucide-react";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Ruwardhan"
      title={<>An integrated agricultural <span className="text-gradient">ecosystem</span></>}
      subtitle="We are a farmer-owned, technology-driven producer company building the rails for India's next chapter of rural prosperity."
      bg="default"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent/30 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=70"
            alt="Farmer surveying fields with technology"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-elegant)] sm:aspect-[4/5]"
          />
          <div className="absolute -bottom-5 -right-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:-bottom-6 sm:-right-6 sm:p-5">
            <div className="font-display text-2xl font-bold text-primary sm:text-3xl">2024</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
              Established
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-6 lg:mt-0"
        >
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            <strong className="text-primary">Ruwardhan Farmer Producer Company Limited</strong> is
            building the integrated agricultural backbone India deserves — clean energy on
            every farm, precision drones in every field, fair inputs in every hand and a
            government scheme close to every household.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/80 md:text-base">
            Our farmer-first philosophy means every division — from solar to consultancy —
            exists to lift household incomes and rural dignity. We pair corporate execution
            with grassroots empathy.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Pillar icon={<Eye className="h-5 w-5" />} title="Vision">
              A self-reliant, technology-led farming community prospering sustainably.
            </Pillar>
            <Pillar icon={<Target className="h-5 w-5" />} title="Mission">
              Deliver end-to-end solutions across energy, inputs, equipment and markets.
            </Pillar>
            <Pillar icon={<Sprout className="h-5 w-5" />} title="Philosophy">
              Build with farmers, not for farmers — shared ownership, shared upside.
            </Pillar>
            <Pillar icon={<HeartHandshake className="h-5 w-5" />} title="Promise">
              Transparent pricing, measurable outcomes, lifelong support.
            </Pillar>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Pillar({
  icon, title, children,
}: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-5">
      <div className="mb-3 inline-grid h-10 w-10 place-items-center rounded-lg bg-secondary/15 text-secondary">
        {icon}
      </div>
      <div className="font-display text-base font-semibold text-primary sm:text-lg">{title}</div>
      <p className="mt-1 text-sm text-foreground/70">{children}</p>
    </div>
  );
}
