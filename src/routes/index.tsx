import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { BusinessDivisions } from "@/components/site/BusinessDivisions";
import { Timeline } from "@/components/site/Timeline";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Services } from "@/components/site/Services";
import { FutureExpansion } from "@/components/site/FutureExpansion";
import { Gallery } from "@/components/site/Gallery";
import { WorldMap } from "@/components/site/WorldMap";
import { Testimonials } from "@/components/site/Testimonials";
import { Partners } from "@/components/site/Partners";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ruwardhan FPC — Empowering Farmers, Transforming Agriculture" },
      {
        name: "description",
        content:
          "Ruwardhan Farmer Producer Company Limited — integrated agricultural ecosystem across solar, drones, agri-inputs, consultancy and government schemes.",
      },
      { property: "og:title", content: "Ruwardhan FPC — Empowering Farmers" },
      {
        property: "og:description",
        content:
          "India's farmer-first integrated agricultural ecosystem. Technology, renewable energy and rural prosperity.",
      },
      {
        property: "og:image",
        content:
          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BusinessDivisions />
        <Timeline />
        <Services />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
