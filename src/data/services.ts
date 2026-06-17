export interface ServiceTier {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  color: string;
  problem: string;
  solution: string;
  benefits: string[];
  technologies: string[];
  tiers: ServiceTier[];
  category: string;
}

export const services: Service[] = [
  {
    id: "epr-compliance",
    title: "Extended Producer Responsibility (EPR)",
    tagline: "Close the loop on plastic waste with regulatory compliance",
    shortDescription: "End-to-end EPR compliance management for producers, importers, and brand owners under India's plastic waste management rules.",
    fullDescription: "Our EPR compliance service provides comprehensive support for businesses navigating India's Extended Producer Responsibility regulations. We handle everything from registration with the Central Pollution Control Board (CPCB) to annual reporting, ensuring your organization meets all legal obligations while contributing to a circular plastic economy.",
    icon: "Recycle",
    color: "from-blue-500 to-cyan-500",
    problem: "Producers and importers face complex, evolving EPR regulations with severe penalties for non-compliance. Managing plastic waste targets, documentation, and CPCB filings is overwhelming without specialized expertise.",
    solution: "BlueDot provides a turnkey EPR compliance solution — from initial registration and target calculation to waste collection partnerships and annual compliance certificates.",
    benefits: [
      "Full CPCB registration and documentation support",
      "Plastic waste collection target calculation",
      "Verified recycler network access",
      "Annual compliance reporting",
      "Real-time compliance dashboard",
      "Legal risk mitigation"
    ],
    technologies: ["CPCB Portal Integration", "Waste Tracking Software", "Digital Certificates", "Compliance Analytics"],
    tiers: [
      { name: "Basic", price: "₹49,999/yr", features: ["CPCB Registration", "Target Calculation", "Basic Reporting", "Email Support"] },
      { name: "Pro", price: "₹1,49,999/yr", features: ["Everything in Basic", "Recycler Network Access", "Quarterly Reviews", "Dedicated Manager", "Real-time Dashboard"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "Multi-state Compliance", "Legal Advisory", "Priority Support", "Custom Integrations"] }
    ],
    category: "Compliance"
  },
  {
    id: "waste-audit",
    title: "Waste Audit & Assessment",
    tagline: "Know your waste, transform your future",
    shortDescription: "Scientific waste characterization and audit services to identify waste streams, quantify volumes, and develop data-driven reduction strategies.",
    fullDescription: "A waste audit is the foundation of any effective waste management strategy. Our certified auditors conduct thorough on-site assessments to characterize your waste streams, identify reduction opportunities, and provide actionable recommendations aligned with sustainability goals.",
    icon: "ClipboardList",
    color: "from-green-500 to-emerald-500",
    problem: "Organizations generate waste without understanding its composition, volume, or value. This leads to missed recycling opportunities, unnecessary disposal costs, and regulatory blind spots.",
    solution: "Our systematic waste audit methodology provides a complete picture of your waste profile, enabling targeted interventions that reduce costs and environmental impact.",
    benefits: [
      "Detailed waste characterization report",
      "Waste reduction opportunity identification",
      "Cost savings analysis",
      "Regulatory compliance gap assessment",
      "Customized waste management plan",
      "Baseline data for sustainability reporting"
    ],
    technologies: ["IoT Waste Sensors", "Data Analytics Platform", "GIS Mapping", "Carbon Calculator"],
    tiers: [
      { name: "Basic", price: "₹29,999", features: ["Single Site Audit", "Waste Characterization", "Basic Report", "Recommendations"] },
      { name: "Pro", price: "₹79,999", features: ["Multi-site Audit", "Detailed Analysis", "Action Plan", "Follow-up Review", "Digital Dashboard"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Enterprise-wide Audit", "Continuous Monitoring", "Annual Reviews", "Integration Support"] }
    ],
    category: "Assessment"
  },
  {
    id: "industrial-waste",
    title: "Industrial Waste Management",
    tagline: "Responsible handling of pre-consumer industrial waste",
    shortDescription: "Comprehensive management of pre-consumer and industrial non-hazardous waste streams through segregation, recycling, and responsible disposal.",
    fullDescription: "Industrial facilities generate significant quantities of pre-consumer waste including packaging materials, off-cuts, and process waste. BlueDot designs and implements integrated waste management systems that maximize material recovery, minimize landfill disposal, and ensure regulatory compliance.",
    icon: "Factory",
    color: "from-orange-500 to-amber-500",
    problem: "Industrial waste management is often reactive and inefficient, leading to high disposal costs, regulatory risks, and missed opportunities for material recovery and circular economy participation.",
    solution: "We design customized industrial waste management systems with clear segregation protocols, recycler partnerships, and digital tracking to maximize value recovery from waste streams.",
    benefits: [
      "Customized waste segregation systems",
      "Verified recycler and processor network",
      "Waste-to-resource identification",
      "Compliance documentation",
      "Cost reduction through material recovery",
      "ESG reporting support"
    ],
    technologies: ["RFID Waste Tracking", "Material Recovery Analytics", "Vendor Management System", "Compliance Portal"],
    tiers: [
      { name: "Basic", price: "₹59,999/yr", features: ["Waste Assessment", "Segregation Plan", "Recycler Linkage", "Quarterly Reports"] },
      { name: "Pro", price: "₹1,79,999/yr", features: ["Everything in Basic", "On-site Training", "Monthly Reviews", "Digital Tracking", "ESG Reports"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Multi-facility Management", "Dedicated Team", "Real-time Monitoring", "Custom Reporting"] }
    ],
    category: "Industrial"
  },
  {
    id: "biomining",
    title: "Biomining & Landfill Remediation",
    tagline: "Reclaiming land, recovering resources from legacy waste",
    shortDescription: "Scientific biomining of legacy landfills to recover valuable materials, reclaim land, and eliminate environmental hazards.",
    fullDescription: "Legacy landfills represent both an environmental liability and an untapped resource. Our biomining service uses advanced mechanical and biological processes to excavate, segregate, and process legacy waste — recovering recyclables, compostable material, and RDF while remediating contaminated land.",
    icon: "Mountain",
    color: "from-teal-500 to-green-600",
    problem: "Legacy landfills occupy valuable land, leach contaminants into groundwater, and emit greenhouse gases. Urban local bodies face mounting pressure to remediate these sites without adequate technical expertise.",
    solution: "BlueDot's biomining methodology systematically processes legacy waste using trommel screens, air classifiers, and biological treatment to maximize material recovery and achieve complete landfill remediation.",
    benefits: [
      "Land reclamation for productive use",
      "Recovery of recyclables and compost",
      "RDF production for energy recovery",
      "Groundwater contamination prevention",
      "Methane emission reduction",
      "Regulatory compliance achievement"
    ],
    technologies: ["Trommel Screening", "Air Classification", "Bioremediation", "Leachate Treatment", "Gas Capture Systems"],
    tiers: [
      { name: "Assessment", price: "₹1,49,999", features: ["Site Survey", "Waste Characterization", "Feasibility Report", "Remediation Plan"] },
      { name: "Implementation", price: "Custom", features: ["Full Biomining Operations", "Material Recovery", "Land Remediation", "Progress Reports"], highlighted: true },
      { name: "Turnkey", price: "Custom", features: ["End-to-end Project", "Equipment Provision", "Operations & Maintenance", "Handover Support"] }
    ],
    category: "Remediation"
  },
  {
    id: "plastic-recycling",
    title: "Plastic Aggregation & Recycling",
    tagline: "Transforming plastic waste into circular economy assets",
    shortDescription: "Systematic collection, aggregation, and channelization of recyclable plastics to verified recyclers, supporting a circular plastic economy.",
    fullDescription: "Plastic waste management requires a robust collection and aggregation infrastructure. BlueDot builds and manages plastic waste collection networks connecting generators, informal sector workers, and verified recyclers to ensure maximum plastic recovery and responsible processing.",
    icon: "RefreshCw",
    color: "from-blue-400 to-indigo-500",
    problem: "Recyclable plastics end up in landfills or the environment due to fragmented collection systems, lack of market linkages, and inadequate infrastructure for aggregation and quality sorting.",
    solution: "We design and operate plastic aggregation centers with quality sorting capabilities, connecting waste generators to verified recyclers through a transparent, technology-enabled supply chain.",
    benefits: [
      "Systematic plastic collection network",
      "Quality sorting and baling",
      "Verified recycler partnerships",
      "Transparent material tracking",
      "Informal sector integration",
      "Carbon credit generation support"
    ],
    technologies: ["Material Tracking Platform", "Quality Testing Equipment", "Baling & Compaction", "Blockchain Traceability"],
    tiers: [
      { name: "Basic", price: "₹39,999/yr", features: ["Collection Network Design", "Recycler Linkage", "Basic Reporting", "Compliance Support"] },
      { name: "Pro", price: "₹1,19,999/yr", features: ["Aggregation Center Setup", "Quality Sorting", "Digital Tracking", "Monthly Reports", "Carbon Credits"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["City-scale Operations", "Informal Sector Integration", "Full Traceability", "ESG Reporting"] }
    ],
    category: "Recycling"
  },
  {
    id: "iec-campaigns",
    title: "IEC & Behavior Change Campaigns",
    tagline: "Inspiring communities to act for a sustainable tomorrow",
    shortDescription: "Strategic Information, Education & Communication campaigns to drive waste segregation behavior, community engagement, and sustainability awareness.",
    fullDescription: "Sustainable waste management ultimately depends on behavior change at the individual and community level. BlueDot designs and executes multi-channel IEC campaigns that combine digital outreach, community engagement, and on-ground activation to drive lasting behavioral shifts.",
    icon: "Megaphone",
    color: "from-purple-500 to-pink-500",
    problem: "Technical waste management solutions fail without community participation. Low awareness, poor segregation habits, and lack of engagement undermine even the best infrastructure investments.",
    solution: "Our IEC campaigns use evidence-based behavior change communication strategies, combining digital media, community workshops, school programs, and on-ground activations to create lasting sustainability habits.",
    benefits: [
      "Customized campaign strategy",
      "Multi-channel content creation",
      "Community workshop facilitation",
      "School and youth programs",
      "Impact measurement and reporting",
      "Stakeholder engagement management"
    ],
    technologies: ["Digital Campaign Tools", "Community Engagement Platform", "Impact Analytics", "Content Management System"],
    tiers: [
      { name: "Basic", price: "₹49,999", features: ["Campaign Strategy", "Digital Content", "2 Workshops", "Impact Report"] },
      { name: "Pro", price: "₹1,49,999", features: ["Full Campaign Design", "Multi-channel Execution", "School Programs", "Monthly Analytics", "Community Portal"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["City-wide Campaigns", "Dedicated Team", "Real-time Analytics", "Government Liaison"] }
    ],
    category: "Awareness"
  },
  {
    id: "esg-consulting",
    title: "ESG Consulting & Reporting",
    tagline: "Navigate sustainability with data-driven ESG excellence",
    shortDescription: "Comprehensive ESG strategy development, materiality assessment, and sustainability reporting aligned with GRI, BRSR, and global frameworks.",
    fullDescription: "As ESG disclosure requirements intensify globally and in India, organizations need expert guidance to develop credible sustainability strategies and reports. BlueDot provides end-to-end ESG consulting from materiality assessment and strategy development to framework-aligned reporting and stakeholder communication.",
    icon: "BarChart3",
    color: "from-cyan-500 to-blue-600",
    problem: "Organizations face growing pressure from investors, regulators, and customers to demonstrate ESG performance, but lack the expertise to develop credible strategies and produce compliant reports.",
    solution: "Our ESG consulting team guides organizations through the complete sustainability journey — from understanding material issues to developing strategies, collecting data, and producing investor-grade ESG reports.",
    benefits: [
      "Materiality assessment and stakeholder mapping",
      "ESG strategy and target setting",
      "GRI, BRSR, and TCFD-aligned reporting",
      "Supply chain ESG assessment",
      "Investor ESG communication support",
      "Continuous improvement roadmap"
    ],
    technologies: ["ESG Data Management Platform", "Carbon Accounting Software", "Stakeholder Engagement Tools", "Reporting Automation"],
    tiers: [
      { name: "Basic", price: "₹99,999/yr", features: ["Materiality Assessment", "ESG Baseline Report", "BRSR Compliance", "Annual Review"] },
      { name: "Pro", price: "₹2,99,999/yr", features: ["Full ESG Strategy", "GRI Report", "Investor Deck", "Quarterly Updates", "Training"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Group-level ESG", "Multi-framework Reporting", "Board Advisory", "Continuous Support"] }
    ],
    category: "Consulting"
  },
  {
    id: "collector-development",
    title: "Collector Development Centre (CDC)",
    tagline: "Empowering waste collectors, strengthening circular systems",
    shortDescription: "Setup and management of Collector Development Centres to formalize, train, and empower waste collectors as key circular economy actors.",
    fullDescription: "Waste collectors are the backbone of India's informal recycling economy, yet they remain marginalized and underserved. BlueDot designs and operates Collector Development Centres that provide infrastructure, training, fair pricing, and social protection to waste collectors, integrating them into formal waste management systems.",
    icon: "Users",
    color: "from-yellow-500 to-orange-500",
    problem: "Informal waste collectors lack access to fair markets, protective equipment, training, and social benefits. This perpetuates poverty cycles while undermining the efficiency of waste collection systems.",
    solution: "Our CDC model creates physical and digital infrastructure to support waste collectors — providing aggregation space, weighing equipment, fair pricing, training, and linkages to social protection schemes.",
    benefits: [
      "Formal waste collector registration",
      "Fair price discovery mechanisms",
      "Safety equipment and training",
      "Social protection scheme linkage",
      "Digital payment systems",
      "Community development programs"
    ],
    technologies: ["Digital Weighing Systems", "Mobile Payment Platform", "Training Management System", "Collector Registry"],
    tiers: [
      { name: "Basic", price: "₹79,999", features: ["CDC Design", "Equipment Specification", "Setup Support", "Initial Training"] },
      { name: "Pro", price: "₹2,49,999", features: ["Full CDC Setup", "Equipment Provision", "Staff Training", "Digital Systems", "6-month Support"], highlighted: true },
      { name: "Enterprise", price: "Custom", features: ["Multi-CDC Network", "Technology Platform", "Ongoing Management", "Impact Reporting"] }
    ],
    category: "Social"
  }
];

export const serviceCategories = [...new Set(services.map(s => s.category))];

export const getServiceById = (id: string) => services.find(s => s.id === id);
