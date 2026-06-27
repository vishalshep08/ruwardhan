import { motion } from "framer-motion";
import { mapMarkers } from "@/constants/companyData";
import { Section } from "./Section";

export function WorldMap() {
  return (
    <Section
      eyebrow="Presence & Reach"
      title={<>Rooted in India. <span className="text-gradient">Reaching the world.</span></>}
      subtitle="Current operations, planned expansion and future export corridors."
    >
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--sage)] p-4 shadow-[var(--shadow-card)] sm:p-6 md:p-10">
          {/* On very small screens, show a simplified version */}
          <div className="overflow-x-auto">
            <div className="min-w-[300px]">
              <svg
                viewBox="0 0 700 600"
                className="h-auto w-full"
                role="img"
                aria-label="Map of India and surrounding region with Ruwardhan locations"
              >
                {/* Stylized landmass */}
                <defs>
                  <radialGradient id="land" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="oklch(0.55 0.11 158)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="oklch(0.34 0.072 158)" stopOpacity="0.55" />
                  </radialGradient>
                  <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="oklch(0.78 0.16 65)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="oklch(0.78 0.16 65)" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* India stylized */}
                <path
                  d="M260 140 L320 130 L360 165 L380 220 L370 270 L390 310 L370 360 L350 420 L330 470 L310 520 L290 530 L260 510 L235 460 L215 410 L200 360 L210 310 L200 260 L215 210 L235 170 Z"
                  fill="url(#land)"
                  stroke="oklch(0.34 0.072 158)"
                  strokeWidth="1.5"
                />
                {/* Surrounding regions hint */}
                <path d="M60 280 Q90 260 130 300 L120 360 Q90 380 70 360 Z" fill="oklch(0.55 0.11 158)" opacity="0.15" />
                <path d="M520 380 Q570 360 610 400 L600 470 Q560 490 530 460 Z" fill="oklch(0.55 0.11 158)" opacity="0.15" />

                {mapMarkers.map((m, i) => {
                  const color =
                    m.type === "hq"
                      ? "oklch(0.78 0.16 65)"
                      : m.type === "export"
                        ? "oklch(0.74 0.13 80)"
                        : "oklch(0.55 0.11 158)";
                  return (
                    <g key={m.name}>
                      <circle cx={m.x} cy={m.y} r="22" fill="url(#pulse)">
                        <animate
                          attributeName="r"
                          values="14;26;14"
                          dur="2.4s"
                          begin={`${i * 0.25}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.7;0;0.7"
                          dur="2.4s"
                          begin={`${i * 0.25}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle cx={m.x} cy={m.y} r="5" fill={color} stroke="white" strokeWidth="2" />
                      <text
                        x={m.x + 10}
                        y={m.y + 4}
                        fontSize="11"
                        fontWeight="600"
                        fill="oklch(0.27 0 0)"
                      >
                        {m.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs sm:mt-6 sm:gap-4">
            <LegendDot color="oklch(0.78 0.16 65)" label="Headquarters" />
            <LegendDot color="oklch(0.55 0.11 158)" label="Expansion States" />
            <LegendDot color="oklch(0.74 0.13 80)" label="Future Export Corridors" />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-xs text-muted-foreground sm:text-sm"
        >
          Active in Maharashtra · Expanding pan-India · Building export corridors with international partners.
        </motion.p>
      </div>
    </Section>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
      <span className="h-2 w-2 rounded-full sm:h-2.5 sm:w-2.5" style={{ background: color }} />
      {label}
    </span>
  );
}
