import { useEffect, useRef, useState } from "react";
import CountUpLib from "react-countup";
import { stats } from "@/constants/companyData";

// Safe CJS/ESM interop: in SSR (TanStack Start) the default import may resolve
// to the entire module object instead of the component itself.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CountUp = ((CountUpLib as any).default ?? CountUpLib) as (props: any) => JSX.Element;

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setStart(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setStart(true),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur md:grid-cols-4"
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-primary/40 p-4 text-primary-foreground sm:p-6 md:p-8"
        >
          <div className="font-display text-2xl font-bold text-accent sm:text-3xl md:text-5xl">
            {start ? (
              <CountUp end={s.value} duration={2.2} separator="" />
            ) : (
              0
            )}
            {s.suffix}
          </div>
          <div className="mt-1 text-[10px] font-medium uppercase tracking-widest text-primary-foreground/80 sm:mt-2 sm:text-xs md:text-sm">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
