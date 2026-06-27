import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf } from "lucide-react";
import { Stats } from "./Stats";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=80')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 gradient-hero opacity-95" aria-hidden="true" />

      {/* Floating leaves — fewer on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute hidden text-accent/40 sm:block"
          style={{ left: `${(i * 13) % 95}%`, top: `${(i * 17) % 80}%` }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 25, -10, 0],
            opacity: [0.25, 0.6, 0.25],
          }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.4 }}
        >
          <Leaf className="h-6 w-6 md:h-8 md:w-8" />
        </motion.div>
      ))}

      <div className="container relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 md:px-8 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-primary-foreground"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur sm:mb-5 sm:px-4 sm:text-xs">
            <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            The Heart of Every Farmer
          </span>
          <h1 className="font-display text-3xl font-bold leading-[1.05] sm:text-4xl md:text-6xl lg:text-7xl">
            Empowering Farmers.{" "}
            <span className="text-gradient">Transforming Agriculture.</span>{" "}
            Building a Sustainable Future.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/85 sm:mt-6 sm:text-base md:text-lg">
            Technology · Renewable Energy · Agricultural Innovation · Farmer Prosperity —
            an integrated ecosystem built by farmers, for farmers.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#divisions"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition hover:bg-highlight sm:w-auto"
            >
              Explore Divisions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary-foreground/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20 sm:w-auto"
            >
              Become Our Partner
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <Stats />
        </motion.div>
      </div>
    </section>
  );
}
