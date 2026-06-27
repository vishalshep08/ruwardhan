import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Section } from "./Section";
import { company } from "@/constants/companyData";

const fields: { id: string; label: string; type?: string; required?: boolean }[] = [
  { id: "name", label: "Full Name", required: true },
  { id: "phone", label: "Phone", type: "tel", required: true },
  { id: "village", label: "Village" },
  { id: "district", label: "District" },
  { id: "state", label: "State" },
  { id: "email", label: "Email", type: "email" },
];

const services = [
  "Solar Projects", "Farm Consultancy", "Equipment Rental", "Drone Spraying",
  "Water Supply", "Training", "Government Scheme", "Other",
];

export function Contact() {
  const [form, setForm] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*New Enquiry — Ruwardhan FPC*`,
      ``,
      `*Full Name:* ${form.name ?? ""}`,
      `*Phone:* ${form.phone ?? ""}`,
      form.village ? `*Village:* ${form.village}` : null,
      form.district ? `*District:* ${form.district}` : null,
      form.state ? `*State:* ${form.state}` : null,
      form.email ? `*Email:* ${form.email}` : null,
      form.service ? `*Service:* ${form.service}` : null,
      form.message ? `\n*Message:*\n${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };


  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build the next <span className="text-gradient">farming chapter</span> together</>}
      subtitle="Whether you're a farmer, investor, government partner or CSR sponsor — we'd love to talk."
    >
      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="rounded-3xl bg-primary p-5 text-primary-foreground shadow-[var(--shadow-elegant)] sm:p-7">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">Reach Ruwardhan</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Our farmer-success team responds within one working day.
            </p>
            <ul className="mt-5 space-y-4 text-sm sm:mt-6">
              <Info icon={<MapPin className="h-4 w-4 sm:h-5 sm:w-5" />} label="Office">{company.address}</Info>
              <Info icon={<Phone className="h-4 w-4 sm:h-5 sm:w-5" />} label="Phone">
                <a href={`tel:${company.phone}`} className="hover:text-accent">{company.phone}</a>
              </Info>
              <Info icon={<Mail className="h-4 w-4 sm:h-5 sm:w-5" />} label="Email">
                <a href={`mailto:${company.email}`} className="break-all hover:text-accent">{company.email}</a>
              </Info>
              <Info icon={<Clock className="h-4 w-4 sm:h-5 sm:w-5" />} label="Hours">{company.hours}</Info>
            </ul>
          </div>
          <div className="mt-5 overflow-hidden rounded-3xl border border-border shadow-sm sm:mt-6">
            <iframe
              src={company.mapEmbed}
              title="Ruwardhan office location"
              className="h-52 w-full sm:h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-5 shadow-sm sm:p-7 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((f) => (
              <Field key={f.id} {...f} value={form[f.id] ?? ""} onChange={(v) => setForm({ ...form, [f.id]: v })} />
            ))}
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Service of Interest
              </label>
              <select
                value={form.service ?? ""}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
              >
                <option value="">Select a service…</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Message
              </label>
              <textarea
                rows={4}
                value={form.message ?? ""}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
                placeholder="Tell us about your farm, need or partnership idea…"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-secondary sm:w-auto"
          >
            <Send className="h-4 w-4" />
            Send Enquiry
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Info({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 sm:h-9 sm:w-9">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold uppercase tracking-widest text-accent">{label}</div>
        <div className="text-sm text-primary-foreground/90">{children}</div>
      </div>
    </li>
  );
}

function Field({
  id, label, type = "text", required, value, onChange,
}: {
  id: string; label: string; type?: string; required?: boolean;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label} {required && <span className="text-highlight">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/30"
      />
    </div>
  );
}
