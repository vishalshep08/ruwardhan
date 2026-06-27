import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { divisions } from "@/constants/companyData";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/divisions/$divisionId")({
  head: ({ params }) => {
    const d = divisions.find((x) => x.id === params.divisionId);
    return {
      meta: [
        { title: d ? `${d.title} — Ruwardhan FPC` : "Division — Ruwardhan FPC" },
        {
          name: "description",
          content: d?.description ?? "Ruwardhan Farmer Producer Company division.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const d = divisions.find((x) => x.id === params.divisionId);
    if (!d) throw notFound();
    return d;
  },
  component: DivisionPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="mt-4 text-lg text-muted-foreground">Division not found.</p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
        <Icons.ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>
    </div>
  ),
});

function DivisionPage() {
  const d = Route.useLoaderData();
  const allDivisions = divisions;
  const others = allDivisions.filter((x) => x.id !== d.id).slice(0, 3);
  const Icon = (Icons[d.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sprout;

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />

      {/* ── Hero Banner ── */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden sm:h-[55vh] md:h-[60vh]">
        <img src={d.image} alt={d.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

        {/* Back link */}
        <Link
          to="/"
          hash="divisions"
          className="absolute left-4 top-20 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20 sm:left-6 sm:top-24 sm:px-4 sm:py-2 sm:text-sm md:left-10"
        >
          <Icons.ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          All Divisions
        </Link>

        <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-xl sm:h-16 sm:w-16">
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </span>
              <div>
                <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent sm:text-xs">
                  Business Division
                </div>
                <h1 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">
                  {d.title}
                </h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Overview ── */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
                Overview
              </div>
              <h2 className="font-display text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl">
                What we do in{" "}
                <span className="text-gradient">{d.title}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 sm:mt-5 sm:text-base md:text-lg">
                {d.longDescription}
              </p>

              {/* Services checklist */}
              <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                {d.services.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary/15 text-secondary">
                      <Icons.Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground/80">{s}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/"
                hash="contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 hover:shadow-[var(--shadow-elegant)] sm:px-7 sm:py-3.5"
              >
                Get Started
                <Icons.ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            {/* Gallery strip */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {d.gallery.map((url, i) => (
                <div
                  key={url}
                  className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
                >
                  <img
                    src={url}
                    alt={`${d.title} ${i + 1}`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Highlights / Stats ── */}
      <section className="bg-[var(--sage)] py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:mb-12"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
              Key Numbers
            </div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
              Why it <span className="text-gradient">matters</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {d.highlights.map((h, i) => {
              const HIcon = (Icons[h.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Star;
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm sm:p-6"
                >
                  <span className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-accent sm:mb-3 sm:h-11 sm:w-11">
                    <HIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <div className="font-display text-xl font-bold text-primary sm:text-2xl md:text-3xl">{h.value}</div>
                  <div className="mt-0.5 text-xs font-semibold text-foreground sm:mt-1 sm:text-sm">{h.label}</div>
                  <div className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">{h.sub}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:mb-12"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-secondary">
              How it works
            </div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
              Our <span className="text-gradient">process</span>
            </h2>
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            {/* Vertical connecting line */}
            <div className="absolute bottom-0 left-5 top-0 w-px bg-border" />
            <div className="space-y-6">
              {d.process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-4 pl-14"
                >
                  {/* Step number badge */}
                  <div className="absolute left-0 grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-accent bg-background font-display text-sm font-bold text-accent">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
                    <div className="font-display text-sm font-semibold text-foreground sm:text-base">{p.step}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-primary py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Why Ruwardhan
              </div>
              <h2 className="font-display text-2xl font-semibold leading-tight text-primary-foreground sm:text-3xl md:text-4xl">
                The Ruwardhan{" "}
                <span className="text-gradient">{d.title}</span>{" "}
                advantage
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/70 sm:mt-4 sm:text-base">
                Every division is built farmer-first — with transparent pricing, end-to-end support, and accountability at every step.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-3 sm:space-y-4"
            >
              {d.whyUs.map((w, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur sm:gap-4 sm:p-4"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground sm:h-9 sm:w-9">
                    <Icons.CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <span className="text-sm font-medium text-primary-foreground/90">{w}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[var(--sage)] py-12 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
              Ready to get started with{" "}
              <span className="text-gradient">{d.title}?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-foreground/70 sm:mt-4 sm:text-base">
              Contact us today for a free consultation and find out how Ruwardhan can help your farm grow.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Link
                to="/"
                hash="contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90 hover:shadow-[var(--shadow-elegant)] sm:w-auto"
              >
                Contact Us <Icons.ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919922021920"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-7 py-3.5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground sm:w-auto"
              >
                <Icons.Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Other Divisions ── */}
      {others.length > 0 && (
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 text-center md:mb-10"
            >
              <h2 className="font-display text-2xl font-semibold md:text-3xl">
                Explore other <span className="text-gradient">divisions</span>
              </h2>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
              {others.map((od, i) => {
                const OIcon = (Icons[od.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sprout;
                return (
                  <motion.div
                    key={od.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <Link
                      to="/divisions/$divisionId"
                      params={{ divisionId: od.id }}
                      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={od.image}
                          alt={od.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                        <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                          <OIcon className="h-4 w-4" />
                        </div>
                        <h3 className="absolute bottom-4 left-4 right-4 font-display text-base font-semibold text-white sm:text-lg">
                          {od.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 p-4 text-sm font-semibold text-secondary transition group-hover:gap-3">
                        Learn More <Icons.ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingButtons />
    </div>
  );
}
