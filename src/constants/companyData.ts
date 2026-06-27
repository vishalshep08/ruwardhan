export const company = {
  name: "RUWARDHAN FARMER PRODUCER COMPANY LIMITED",
  short: "RUWARDHAN",
  tagline: "The Heart of Every Farmer",
  established: 2024,
  phone: "+91 99220 21920",
  whatsapp: "919922021920",
  email: "ruwardhanfarma@gmail.com",
  address: "Sansar, Tal. Indapur, District Pune, Maharashtra, India",
  hours: "Mon – Sat · 9:00 AM – 6:30 PM",
  cin: "U01811PN2024PTC228",
  roc: "ROC Pune",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.74877655775!2d72.74110047831068!3d19.082197839313277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIndia!5e0!3m2!1sen!2sin!4v1700000000000",
};

export const stats = [
  { value: 2024, label: "Company Established", suffix: "" },
  { value: 8, label: "Business Divisions", suffix: "" },
  { value: 1000, label: "Farmers to Empower", suffix: "+" },
  { value: 100, label: "Farmer Focused", suffix: "%" },
];

export const divisions = [
  {
    id: "solar",
    title: "Solar Energy",
    icon: "Sun",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=70",
    description:
      "Turn-key solar power solutions for farms, pump-sets and rural enterprises that cut input costs and unlock clean energy revenue.",
    services: ["On-grid & off-grid systems", "Solar water pumps", "Government subsidy assistance"],
    longDescription:
      "Ruwardhan's Solar Energy division delivers end-to-end renewable energy solutions tailored specifically for the agricultural sector. From rooftop panels to large-scale solar pump installations, we handle design, procurement, installation, and maintenance — ensuring every farmer has access to clean, affordable power.",
    highlights: [
      { icon: "Zap", label: "Energy Saved", value: "60–80%", sub: "reduction in electricity bills" },
      { icon: "Sun", label: "Pump Capacity", value: "2–10 HP", sub: "solar pumps installed" },
      { icon: "IndianRupee", label: "Subsidy", value: "Up to 90%", sub: "under PM-KUSUM scheme" },
      { icon: "Leaf", label: "Carbon Offset", value: "Zero", sub: "emissions during operation" },
    ],
    process: [
      { step: "Site Survey", desc: "Our engineers assess land, load requirements and solar irradiance data." },
      { step: "System Design", desc: "Custom design for on-grid, off-grid or hybrid systems." },
      { step: "Subsidy Filing", desc: "Complete documentation for PM-KUSUM and state-level schemes." },
      { step: "Installation", desc: "MNRE-empanelled teams install and commission within days." },
      { step: "Monitoring", desc: "IoT-enabled performance monitoring for every installed unit." },
    ],
    whyUs: [
      "MNRE-empanelled installation partners",
      "End-to-end PM-KUSUM subsidy handling",
      "5-year comprehensive maintenance support",
      "Financing options through NABARD/KCC",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "poultry",
    title: "Poultry",
    icon: "Egg",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1400&q=70",
    description:
      "Integrated poultry programs — from chick supply to feed, vaccination and market linkage — that build steady rural income.",
    services: ["Broiler & layer units", "Feed & veterinary support", "Buy-back arrangements"],
    longDescription:
      "Our Poultry division provides farmers with a fully integrated income stream — supplying day-old chicks, quality feed, veterinary support, and guaranteed buy-back. We focus on both broiler and layer units so rural households can build predictable monthly earnings alongside their crop income.",
    highlights: [
      { icon: "TrendingUp", label: "Income Boost", value: "2×", sub: "average income increase" },
      { icon: "Egg", label: "Chick Supply", value: "500+", sub: "chicks per farmer cycle" },
      { icon: "ShieldCheck", label: "Mortality Rate", value: "< 3%", sub: "with our vet support" },
      { icon: "IndianRupee", label: "Buy-Back", value: "Guaranteed", sub: "market price assured" },
    ],
    process: [
      { step: "Farmer Onboarding", desc: "Training and shed setup guidance for new poultry farmers." },
      { step: "Chick Supply", desc: "High-quality day-old chicks delivered to the farm gate." },
      { step: "Feed & Medicine", desc: "Balanced feed and vaccination schedules maintained throughout." },
      { step: "Veterinary Visits", desc: "Regular field visits by qualified vets to prevent disease." },
      { step: "Buy-Back", desc: "We procure the harvest at pre-agreed market-linked rates." },
    ],
    whyUs: [
      "NABARD-linked financing for shed construction",
      "Guaranteed buy-back at market-linked price",
      "Dedicated veterinary helpline 24/7",
      "Training in biosecurity best practices",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1569288063643-5d29ad6ad7a5?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "water",
    title: "Packaged Drinking Water",
    icon: "Droplets",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1400&q=70",
    description:
      "BIS-grade packaged drinking water units that bring safe water and skilled employment to rural India.",
    services: ["RO bottling plants", "Branding & distribution", "Quality assurance"],
    longDescription:
      "Access to clean drinking water remains a challenge in many rural areas. Ruwardhan establishes BIS-certified RO bottling plants at the village level, creating both safe water supply and skilled local employment. Our plants are solar-powered, cost-effective, and designed for long-term community ownership.",
    highlights: [
      { icon: "Droplets", label: "Water Quality", value: "BIS", sub: "certified purification" },
      { icon: "Users", label: "Jobs Created", value: "10–15", sub: "per plant per village" },
      { icon: "Leaf", label: "Solar Powered", value: "100%", sub: "renewable energy" },
      { icon: "IndianRupee", label: "Cost", value: "₹5/L", sub: "affordable rural pricing" },
    ],
    process: [
      { step: "Water Testing", desc: "Source water analysis and TDS/contamination assessment." },
      { step: "Plant Setup", desc: "RO plant installation with solar power integration." },
      { step: "BIS Certification", desc: "Documentation and quality certification under IS:14543." },
      { step: "Branding", desc: "Custom label design, bottling and packaging support." },
      { step: "Distribution", desc: "Village-to-village supply chain and retail linkage." },
    ],
    whyUs: [
      "BIS IS:14543 certified plant setup",
      "Solar-powered zero-cost operations",
      "Turnkey project with training included",
      "NABARD and state grant assistance",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "inputs",
    title: "Agricultural Inputs",
    icon: "Sprout",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1400&q=70",
    description:
      "Certified seeds, bio-fertilizers and crop-care products sourced directly for the farmer at fair, transparent prices.",
    services: ["Hybrid & native seeds", "Bio-fertilizers", "Soil-test based advisory"],
    longDescription:
      "Quality inputs delivered at fair prices are the foundation of a profitable harvest. Ruwardhan sources certified hybrid and native seeds, bio-fertilizers, and crop-protection products directly from manufacturers — removing middlemen and ensuring authenticity. Every recommendation is backed by a soil test.",
    highlights: [
      { icon: "Sprout", label: "Seed Varieties", value: "50+", sub: "certified hybrid & native" },
      { icon: "TrendingUp", label: "Yield Increase", value: "30–40%", sub: "average improvement" },
      { icon: "IndianRupee", label: "Savings", value: "20%", sub: "vs open market prices" },
      { icon: "FlaskConical", label: "Soil Tests", value: "Free", sub: "for member farmers" },
    ],
    process: [
      { step: "Soil Testing", desc: "Comprehensive soil health card issued to every farmer." },
      { step: "Crop Advisory", desc: "Agronomist recommends ideal seed variety and input schedule." },
      { step: "Input Supply", desc: "Certified seeds and bio-inputs delivered at farm gate." },
      { step: "Field Monitoring", desc: "Regular crop visits to track growth and adjust inputs." },
      { step: "Yield Assessment", desc: "Post-harvest analysis to refine the next season's plan." },
    ],
    whyUs: [
      "Direct from manufacturer — no middlemen",
      "Free soil testing for all member farmers",
      "Certified organic and bio-fertilizer options",
      "Crop-specific advisory by agronomists",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "tools",
    title: "Agricultural Tools Bank",
    icon: "Wrench",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1400&q=70",
    description:
      "A shared equipment bank — tractors, tillers, harvesters — available on rent so every farmer accesses modern machinery.",
    services: ["Custom hiring centre", "Skilled operators", "Maintenance support"],
    longDescription:
      "Modern machinery transforms farm economics but remains out of reach for most small farmers. Ruwardhan's Tools Bank operates a Custom Hiring Centre (CHC) stocked with tractors, rotavators, seed drills, and harvesters — all available at subsidised rental rates with skilled operators included.",
    highlights: [
      { icon: "Tractor", label: "Machines", value: "20+", sub: "types of equipment" },
      { icon: "Clock", label: "Availability", value: "24/7", sub: "booking via phone/app" },
      { icon: "IndianRupee", label: "Rental Cost", value: "40% off", sub: "vs private market" },
      { icon: "Users", label: "Operators", value: "Trained", sub: "certified professionals" },
    ],
    process: [
      { step: "Booking", desc: "Call or WhatsApp to schedule machinery at least 24 hours ahead." },
      { step: "Deployment", desc: "Machine and operator reach the farm on the agreed date." },
      { step: "Field Operation", desc: "Work completed under operator supervision." },
      { step: "Payment", desc: "Pay per hour/acre — no hidden charges." },
      { step: "Feedback", desc: "Quality check and farmer satisfaction rating recorded." },
    ],
    whyUs: [
      "SMAM-subsidised equipment fleet",
      "Certified and trained operators included",
      "No membership fee for FPC members",
      "Preventive maintenance by in-house team",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1605002123712-dfe9c5a40d23?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "drone",
    title: "Drone Services",
    icon: "Plane",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=70",
    description:
      "Precision agriculture with DGCA-compliant drones for spraying, mapping and crop-health monitoring.",
    services: ["Precision spraying", "Crop health imaging", "Field survey & mapping"],
    longDescription:
      "Drones are rewriting the economics of crop protection. Ruwardhan operates a fleet of DGCA-approved agricultural drones capable of spraying 1 acre in under 10 minutes, generating NDVI crop health maps, and producing centimetre-accurate field surveys — delivered as a service to any registered farmer.",
    highlights: [
      { icon: "Plane", label: "Coverage", value: "1 acre", sub: "in under 10 minutes" },
      { icon: "Droplets", label: "Chemical Use", value: "−30%", sub: "vs conventional spray" },
      { icon: "Map", label: "Mapping", value: "2 cm", sub: "accuracy ground resolution" },
      { icon: "ShieldCheck", label: "Compliance", value: "DGCA", sub: "approved & licensed" },
    ],
    process: [
      { step: "Field Assessment", desc: "Farmer registers crop type, area and spray requirements." },
      { step: "Flight Plan", desc: "Pilot generates an automated flight plan for the field boundary." },
      { step: "Spraying", desc: "Drone executes precise, uniform spray in a single pass." },
      { step: "NDVI Report", desc: "Crop health images delivered to farmer's WhatsApp within hours." },
      { step: "Advisory", desc: "Agronomist interprets report and recommends corrective action." },
    ],
    whyUs: [
      "DGCA-licensed pilots and equipment",
      "30% chemical reduction = direct savings",
      "NDVI crop health maps included",
      "Fastest booking turnaround in region",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "consultancy",
    title: "Farmer Consultancy",
    icon: "Users",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=70",
    description:
      "Agronomy specialists who walk farms with our farmers — choosing crops, planning inputs and maximising yield.",
    services: ["Crop planning", "Soil & water diagnostics", "Profit-driven advisory"],
    longDescription:
      "Good advice is the highest-return input a farmer can receive. Ruwardhan's team of qualified agronomists, farm management experts and rural finance counsellors work alongside farmers throughout the season — from pre-sowing soil analysis through to post-harvest market strategy.",
    highlights: [
      { icon: "Users", label: "Agronomists", value: "10+", sub: "qualified field experts" },
      { icon: "TrendingUp", label: "Yield Gain", value: "25–35%", sub: "for advised farms" },
      { icon: "Leaf", label: "Farmers Served", value: "500+", sub: "active consultations" },
      { icon: "Clock", label: "Response", value: "< 24 hrs", sub: "field visit turnaround" },
    ],
    process: [
      { step: "Initial Meeting", desc: "Farm visit to understand goals, resources and current practices." },
      { step: "Soil & Water Test", desc: "Laboratory analysis drives the nutrient management plan." },
      { step: "Crop Planning", desc: "Season-wise crop calendar tailored to soil and market demand." },
      { step: "In-Season Support", desc: "WhatsApp helpline plus scheduled field visits every fortnight." },
      { step: "Post-Harvest Review", desc: "Yield vs target analysis and lessons for next season." },
    ],
    whyUs: [
      "Certified agronomists with 5+ years field experience",
      "Integrated with soil testing and input supply",
      "Market linkage advisory included",
      "Free consultation for FPC members",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=900&q=70",
    ],
  },
  {
    id: "scheme",
    title: "Government Scheme Assistance",
    icon: "Landmark",
    image:
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=1400&q=70",
    description:
      "End-to-end documentation, application and follow-up for central and state agricultural schemes.",
    services: ["PM-KUSUM, PMFBY, KCC", "NABARD linkages", "Subsidy disbursal tracking"],
    longDescription:
      "Billions in agricultural subsidies go unclaimed every year because farmers lack the documentation support and institutional knowledge to apply. Ruwardhan bridges this gap with a dedicated team that handles PM-KUSUM, PMFBY, Kisan Credit Card, NABARD grants and all state-level schemes end-to-end.",
    highlights: [
      { icon: "Landmark", label: "Schemes Covered", value: "15+", sub: "central & state programs" },
      { icon: "IndianRupee", label: "Subsidy Accessed", value: "₹2 Cr+", sub: "for member farmers" },
      { icon: "FileCheck", label: "Success Rate", value: "95%", sub: "application approvals" },
      { icon: "Clock", label: "Processing", value: "30 days", sub: "average turnaround" },
    ],
    process: [
      { step: "Eligibility Check", desc: "We identify every scheme the farmer qualifies for." },
      { step: "Document Collection", desc: "Our team collects and verifies all required paperwork." },
      { step: "Application Filing", desc: "Online and offline applications filed on behalf of farmer." },
      { step: "Follow-Up", desc: "Regular status tracking with the relevant government office." },
      { step: "Disbursal Support", desc: "We ensure subsidy reaches the farmer's account directly." },
    ],
    whyUs: [
      "Covers PM-KUSUM, PMFBY, KCC, PM-KISAN & more",
      "95% application success rate",
      "No advance payment — fee only on success",
      "Direct liaison with district agriculture office",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=70",
      "https://images.unsplash.com/photo-1541726260-e6b6d35e5b39?auto=format&fit=crop&w=900&q=70",
    ],
  },
];

export const timeline = [
  { title: "Problem", text: "Farmer raises a challenge — yield, cost, water, capital." },
  { title: "Consultation", text: "Our agronomists assess soil, climate and economics." },
  { title: "Technology", text: "Right blend of inputs, machinery and renewable energy." },
  { title: "Implementation", text: "On-ground rollout with skilled operators and SOPs." },
  { title: "Government Support", text: "Subsidy and scheme paperwork handled end-to-end." },
  { title: "Growth", text: "Higher yields, lower costs, stronger cash flow." },
  { title: "Community Development", text: "Local jobs, training and shared infrastructure." },
  { title: "Prosperity", text: "Long-term, dignified rural prosperity." },
];

export const whyChoose = [
  { title: "Technology", icon: "Cpu", text: "Drones, IoT and data-driven farm decisions." },
  { title: "Innovation", icon: "Lightbulb", text: "Continuous R&D in inputs and energy." },
  { title: "Government Guidance", icon: "ShieldCheck", text: "Aligned with central & state policy." },
  { title: "Clean Energy", icon: "Sun", text: "Solar-first farms, lower carbon footprint." },
  { title: "Expert Team", icon: "Users", text: "Agronomists, engineers, rural managers." },
  { title: "Community Development", icon: "Heart", text: "Schools, water, jobs — beyond the farm." },
  { title: "Sustainability", icon: "Leaf", text: "Regenerative practices, lasting soil health." },
  { title: "End-to-End Support", icon: "Handshake", text: "From seed to sale, we stay alongside." },
];

export const services = [
  { title: "Solar Projects", icon: "Sun" },
  { title: "Farm Consultancy", icon: "Users" },
  { title: "Equipment", icon: "Wrench" },
  { title: "Drone Spraying", icon: "Plane" },
  { title: "Water Supply", icon: "Droplets" },
  { title: "Training", icon: "GraduationCap" },
  { title: "Business Development", icon: "TrendingUp" },
  { title: "Market Linkages", icon: "Store" },
  { title: "Documentation", icon: "FileText" },
];

export const future = [
  { year: "2025", title: "Organic Farming", text: "Certified organic clusters across regions." },
  { year: "2025", title: "Dairy", text: "Modern cattle units and chilling network." },
  { year: "2026", title: "Food Processing", text: "Value-added units near farm-gates." },
  { year: "2026", title: "Cold Storage", text: "Multi-commodity cold chains." },
  { year: "2027", title: "Warehousing", text: "WDRA-compliant rural warehouses." },
  { year: "2027", title: "Export", text: "Direct farmer-to-world export channels." },
  { year: "2028", title: "Seed Production", text: "Farmer-owned seed multiplication." },
  { year: "2028", title: "Agri Tourism", text: "Farm-stays and learning experiences." },
];

export const gallery = [
  { cat: "Solar", url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70" },
  { cat: "Solar", url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=70" },
  { cat: "Solar", url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=900&q=70" },
  { cat: "Poultry", url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=70" },
  { cat: "Poultry", url: "https://images.unsplash.com/photo-1569288063643-5d29ad6ad7a5?auto=format&fit=crop&w=900&q=70" },
  { cat: "Poultry", url: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farming", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farming", url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farming", url: "https://images.unsplash.com/photo-1530507629858-e3759c1c3666?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farming", url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=70" },
  { cat: "Seeds", url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=70" },
  { cat: "Seeds", url: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=900&q=70" },
  { cat: "Seeds", url: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=900&q=70" },
  { cat: "Drone", url: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=70" },
  { cat: "Drone", url: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=900&q=70" },
  { cat: "Drone", url: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?auto=format&fit=crop&w=900&q=70" },
  { cat: "Machinery", url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=70" },
  { cat: "Machinery", url: "https://images.unsplash.com/photo-1605002123712-dfe9c5a40d23?auto=format&fit=crop&w=900&q=70" },
  { cat: "Machinery", url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=900&q=70" },
  { cat: "Training", url: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=900&q=70" },
  { cat: "Training", url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=70" },
  { cat: "Training", url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=70" },
  { cat: "Water Plant", url: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=900&q=70" },
  { cat: "Water Plant", url: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=900&q=70" },
  { cat: "Water Plant", url: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farm Visits", url: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farm Visits", url: "https://images.unsplash.com/photo-1592991538534-00972b6f59ed?auto=format&fit=crop&w=900&q=70" },
  { cat: "Farm Visits", url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=70" },
  { cat: "Government Programs", url: "https://images.unsplash.com/photo-1607703703520-bb638e84caf2?auto=format&fit=crop&w=900&q=70" },
  { cat: "Government Programs", url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=70" },
  { cat: "Government Programs", url: "https://images.unsplash.com/photo-1541726260-e6b6d35e5b39?auto=format&fit=crop&w=900&q=70" },
];

export const testimonials = [
  { name: "Ramesh Patil", role: "Farmer, Maharashtra", text: "Ruwardhan's solar pump cut my diesel bill to zero. My income doubled in one season.", rating: 5 },
  { name: "Sunita Deshmukh", role: "Agri Entrepreneur", text: "The tools bank and drone spraying gave me access to technology I couldn't dream of owning.", rating: 5 },
  { name: "Anand Kale", role: "NGO Partner", text: "A rare FPO that thinks like a corporate but stays rooted with farmers.", rating: 5 },
  { name: "Priya Joshi", role: "CSR Lead, Pune", text: "Transparent reporting and measurable rural impact — a dependable CSR partner.", rating: 5 },
  { name: "Vijay More", role: "Solar Customer", text: "From paperwork to installation, the team handled everything end-to-end.", rating: 5 },
  { name: "Dr. S. Iyer", role: "Govt. Officer", text: "Ruwardhan's scheme execution is among the cleanest we've audited.", rating: 5 },
];

export const partners = [
  "NABARD", "Government of India", "CSR Council", "Solar Partners",
  "Equipment Partners", "Banks", "FPO Network",
];

export const mapMarkers = [
  { name: "Maharashtra (HQ)", x: 300, y: 360, type: "hq" },
  { name: "Punjab", x: 280, y: 180, type: "expansion" },
  { name: "Gujarat", x: 220, y: 320, type: "expansion" },
  { name: "Karnataka", x: 290, y: 440, type: "expansion" },
  { name: "Tamil Nadu", x: 340, y: 510, type: "expansion" },
  { name: "West Bengal", x: 470, y: 320, type: "expansion" },
  { name: "Middle East (Export)", x: 90, y: 320, type: "export" },
  { name: "South-East Asia (Export)", x: 560, y: 430, type: "export" },
];
