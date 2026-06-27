import { Leaf, MapPin, Phone, Mail } from "lucide-react";
import { company, divisions } from "@/constants/companyData";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Business Divisions", href: "#divisions" },
  { label: "Projects", href: "#timeline" },
  { label: "Impact", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

const divisionLinks = [
  "Solar Energy",
  "Poultry Farming",
  "Packaged Drinking Water",
  "Agricultural Inputs",
  "Tools Bank & Drone Services",
  "Farmer Consultancy",
];

export function Footer() {
  return (
    <footer className="bg-primary pt-12 pb-6 text-primary-foreground sm:pt-16 sm:pb-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground sm:h-11 sm:w-11">
                <Leaf className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-base font-bold sm:text-lg">RUWARDHAN</div>
                <div className="text-[10px] uppercase tracking-widest text-accent">
                  Farmer Producer Company
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-primary-foreground/75">
              An integrated agricultural enterprise empowering farmers through
              innovation, renewable energy and sustainable rural development.
            </p>
            <p className="mt-3 text-sm italic text-accent/90">
              "The Heart of Every Farmer."
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent sm:text-base">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80 sm:mt-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent sm:text-base">
              Divisions
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80 sm:mt-4">
              {divisionLinks.map((name) => (
                <li key={name}>
                  <a href="#divisions" className="transition hover:text-accent">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-accent sm:text-base">
              Reach Us
            </h4>
            <ul className="mt-3 space-y-3 text-sm text-primary-foreground/80 sm:mt-4">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${company.phone}`} className="hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href={`mailto:${company.email}`}
                  className="break-all hover:text-accent"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-5 text-center text-xs text-primary-foreground/60 sm:mt-12 sm:gap-3 sm:pt-6 md:flex-row md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} Ruwardhan Farmer Producer Company Limited. All rights reserved.</p>
          <p>
            Registered in India · {company.roc} · CIN: {company.cin}
          </p>
        </div>
      </div>
    </footer>
  );
}
