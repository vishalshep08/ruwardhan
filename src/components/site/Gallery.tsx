import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { gallery } from "@/constants/companyData";
import { Section } from "./Section";

export function Gallery() {
  const cats = useMemo(
    () => ["All", ...Array.from(new Set(gallery.map((g) => g.cat)))],
    [],
  );
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = active === "All" ? gallery : gallery.filter((g) => g.cat === active);

  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title={<>Our work <span className="text-gradient">in the field</span></>}
      subtitle="Real projects across solar, poultry, drones, training and government programs."
      bg="sage"
    >
      {/* Filter chips — scrollable on mobile */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 sm:mb-8 sm:flex-wrap sm:justify-center sm:pb-0">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition sm:px-4 ${
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground/70 hover:border-secondary hover:text-secondary"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((g, i) => (
            <motion.button
              key={g.url}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
              onClick={() => setLightbox(g.url)}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={g.url}
                alt={g.cat}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-primary/80 via-transparent to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100 sm:p-3">
                <span className="rounded-full bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent-foreground sm:px-3 sm:py-1 sm:text-[10px]">
                  {g.cat}
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:h-11 sm:w-11 sm:right-5 sm:top-5"
              onClick={() => setLightbox(null)}
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={lightbox}
              alt=""
              className="max-h-[85vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
