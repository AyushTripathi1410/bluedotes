import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Leaf, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    step: '01',
    title: 'Requirement Analysis',
    tagline: 'Understanding your unique environmental landscape',
    icon: '🔍',
    color: 'from-blue-500 to-blue-600',
    duration: '1–2 Weeks',
    activities: [
      'Stakeholder discovery workshops',
      'Regulatory obligation mapping',
      'Current state documentation review',
      'Site visits and field observations',
      'Sustainability goal alignment sessions',
    ],
    deliverables: ['Discovery Report', 'Stakeholder Map', 'Regulatory Checklist'],
    outcome: 'A comprehensive understanding of your environmental challenges, compliance obligations, and sustainability aspirations that forms the foundation of our engagement.',
  },
  {
    step: '02',
    title: 'Research & Strategy',
    tagline: 'Data-driven strategy tailored to your context',
    icon: '📊',
    color: 'from-indigo-500 to-purple-500',
    duration: '2–3 Weeks',
    activities: [
      'Best practice benchmarking',
      'Technology landscape analysis',
      'Regulatory deep-dive research',
      'Stakeholder engagement strategy',
      'KPI and target framework development',
    ],
    deliverables: ['Strategy Framework', 'KPI Dashboard', 'Technology Roadmap'],
    outcome: 'A robust, evidence-based strategy that sets clear objectives, defines success metrics, and outlines the pathway to achieving your environmental goals.',
  },
  {
    step: '03',
    title: 'Environmental Assessment',
    tagline: 'Scientific baseline measurement and gap analysis',
    icon: '🌿',
    color: 'from-green-500 to-emerald-500',
    duration: '1–3 Weeks',
    activities: [
      'Waste stream characterization and quantification',
      'Carbon footprint baseline measurement',
      'Compliance gap assessment',
      'Environmental risk identification',
      'Opportunity mapping for material recovery',
    ],
    deliverables: ['Assessment Report', 'Baseline Data', 'Gap Analysis', 'Risk Register'],
    outcome: 'Comprehensive baseline data that quantifies your environmental impact, identifies compliance gaps, and reveals opportunities for improvement and cost savings.',
  },
  {
    step: '04',
    title: 'Solution Design',
    tagline: 'Custom architecture for maximum impact',
    icon: '✏️',
    color: 'from-cyan-500 to-teal-500',
    duration: '2–4 Weeks',
    activities: [
      'Solution architecture development',
      'Process design and workflow mapping',
      'Technology platform selection',
      'Stakeholder engagement plan creation',
      'Detailed project plan with milestones',
    ],
    deliverables: ['Solution Blueprint', 'Project Plan', 'Technology Specs', 'Engagement Plan'],
    outcome: 'A detailed, actionable solution design that specifies exactly how we will address your environmental challenges, with clear timelines, responsibilities, and success criteria.',
  },
  {
    step: '05',
    title: 'Implementation',
    tagline: 'Expert execution with transparent progress tracking',
    icon: '⚙️',
    color: 'from-orange-500 to-amber-500',
    duration: 'Project-Specific',
    activities: [
      'Phased solution deployment',
      'Team training and capacity building',
      'Stakeholder onboarding and sensitization',
      'System integration and testing',
      'Adaptive management and issue resolution',
    ],
    deliverables: ['Progress Reports', 'Training Materials', 'System Documentation', 'Issue Log'],
    outcome: 'Successful deployment of the designed solution with all stakeholders trained, systems operational, and initial results demonstrating environmental impact.',
  },
  {
    step: '06',
    title: 'Monitoring & Reporting',
    tagline: 'Real-time visibility into your environmental performance',
    icon: '📈',
    color: 'from-teal-500 to-green-600',
    duration: 'Ongoing',
    activities: [
      'KPI tracking and dashboard updates',
      'Regulatory compliance monitoring',
      'Impact data collection and validation',
      'Stakeholder reporting and communication',
      'Periodic review meetings',
    ],
    deliverables: ['Monthly Impact Reports', 'Compliance Certificates', 'ESG Data', 'Dashboards'],
    outcome: 'Continuous visibility into your environmental performance with verified impact data for regulatory compliance, investor reporting, and stakeholder communication.',
  },
  {
    step: '07',
    title: 'Optimization & Support',
    tagline: 'Continuous improvement for lasting impact',
    icon: '🚀',
    color: 'from-purple-500 to-pink-500',
    duration: 'Ongoing',
    activities: [
      'Performance data analysis and insights',
      'Improvement opportunity identification',
      'System and process optimization',
      'Emerging regulation monitoring',
      'Innovation and technology upgrades',
    ],
    deliverables: ['Optimization Reports', 'Updated Roadmap', 'Innovation Briefings'],
    outcome: 'Continuously improving environmental performance that adapts to changing regulations, technologies, and organizational needs — ensuring long-term sustainability leadership.',
  },
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  return (
    <>
      <title>Our Process — BlueDots Environmental Solutions</title>
      <meta name="description" content="Discover BlueDots' proven 7-step environmental solutions methodology — from requirement analysis to ongoing optimization." />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-blue-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
              <Leaf className="w-4 h-4 text-accent" />
              How We Work
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our 7-Step Proven<br />Methodology
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              A structured, science-backed process that transforms environmental challenges into measurable, lasting impact.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 8C1248 6 1344 10 1392 12L1440 14V60H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Progress bar overview */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl h-56 mb-10"
          >
            <img
              src="https://img1.wsimg.com/isteam/getty/2188554976"
              alt="Environmental strategy team planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-2">How We Work</p>
                <h2 className="font-heading text-3xl font-bold text-white">Click any step to explore</h2>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-between overflow-x-auto scrollbar-hide gap-2 pb-2">
            {steps.map((s, i) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className={`flex flex-col items-center gap-2 min-w-[80px] group transition-all`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all shadow-md ${
                  activeStep === i
                    ? `bg-gradient-to-br ${s.color} scale-110`
                    : 'bg-muted hover:bg-muted/80'
                }`}>
                  {s.icon}
                </div>
                <span className={`text-xs font-medium text-center leading-tight transition-colors ${
                  activeStep === i ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {s.title.split(' ').slice(0, 2).join(' ')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border-2 overflow-hidden transition-all ${
                  activeStep === i ? 'border-primary/30 shadow-xl' : 'border-border hover:border-primary/20'
                }`}
              >
                {/* Header */}
                <button
                  className="w-full text-left"
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                >
                  <div className={`flex items-center gap-5 p-6 ${activeStep === i ? 'bg-primary/5' : 'bg-card hover:bg-muted/30'} transition-colors`}>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-muted-foreground tracking-wider">STEP {step.step}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{step.duration}</span>
                      </div>
                      <h3 className="font-heading font-bold text-primary text-lg">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.tagline}</p>
                    </div>
                    <div className="shrink-0">
                      {activeStep === i
                        ? <ChevronUp className="w-5 h-5 text-primary" />
                        : <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      }
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {activeStep === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-card border-t border-border">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                          {/* Activities */}
                          <div className="md:col-span-1">
                            <h4 className="font-heading font-semibold text-sm text-primary mb-3 uppercase tracking-wider">Key Activities</h4>
                            <ul className="space-y-2">
                              {step.activities.map(a => (
                                <li key={a} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                  <span className="text-sm text-foreground/75">{a}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Deliverables */}
                          <div>
                            <h4 className="font-heading font-semibold text-sm text-primary mb-3 uppercase tracking-wider">Deliverables</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.deliverables.map(d => (
                                <span key={d} className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                                  {d}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Outcome */}
                          <div>
                            <h4 className="font-heading font-semibold text-sm text-primary mb-3 uppercase tracking-wider">Expected Outcome</h4>
                            <p className="text-sm text-foreground/75 leading-relaxed">{step.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">Start Your Environmental Journey</h2>
          <p className="text-muted-foreground mb-8">Our team is ready to guide you through every step of the process.</p>
          <Button asChild size="lg" className="gradient-blue-green text-white border-0 shadow-lg px-10">
            <Link to="/contact">Get Started Today <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
