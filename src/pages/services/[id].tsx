import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Recycle, ClipboardList, Factory, Mountain,
  RefreshCw, Megaphone, BarChart3, Users,
  CheckCircle2, ArrowRight, ChevronDown, ChevronUp,
  Leaf, Zap, Shield, TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getServiceById } from '@/data/services';

const iconMap: Record<string, React.ElementType> = {
  Recycle, ClipboardList, Factory, Mountain, RefreshCw, Megaphone, BarChart3, Users
};

// Map service IDs to image slots
const serviceImages: Record<string, string> = {
  'epr-compliance': 'https://media.gettyimages.com/id/1327571998/photo/employees-in-a-recycling-industry-inspect-plastic-bottle-raw-materials-to-be-used-in-the.jpg?b=1&s=2048x2048&w=0&k=20&c=gu7gdSpP-pjdvb2nwASCuKTUpJ_ISXC3vszs5-rJcl0=',
  'waste-audit': 'https://media.gettyimages.com/id/1604895623/photo/asian-male-foreman-manager-discussion-with-business-man-and-woman-ceo-in-warehouse-company.jpg?b=1&s=2048x2048&w=0&k=20&c=GpIhDtcW7WWsP6edTtCOV_lmiRKhFRJO9fvQnrBa-bI=',
  'industrial-waste': 'https://media.gettyimages.com/id/1292726466/photo/waste-sorting-and-recycling-plant-garbage-moves-on-a-conveyor-belt.jpg?b=1&s=2048x2048&w=0&k=20&c=BwvGj6kcDB7uQK3agkgsLxrChJcfJoR7rqihZjrIGLQ=',
  'biomining': 'https://media.gettyimages.com/id/1434108486/photo/landfill-at-a-country-side-aerial-view-of-a-crowded-ash-dump.jpg?b=1&s=2048x2048&w=0&k=20&c=G4Eq7j9LQW8-_-7plZZoUEFLL0o3JLeefz-5G8jJMC8=',
  'plastic-recycling': 'https://media.gettyimages.com/id/1600566085/photo/group-of-workers-at-the-recycling-centre-sorting-plastic-waste-ad-preparing-for-recycling.jpg?b=1&s=2048x2048&w=0&k=20&c=ymplH-poyki9JZ0koVT3saosTvOu2YoOEHahFFlY1BQ=',
  'esg-consulting': 'https://media.gettyimages.com/id/2163568549/photo/innovative-team-in-office-discussing-energy-model-project.jpg?b=1&s=2048x2048&w=0&k=20&c=siVO5sP-1I3NCLX0SvE6LovqzMV3qOFtIi3l76cWDtc=',
  'iec-campaigns': 'https://media.gettyimages.com/id/1411087241/photo/cute-little-girl-throw-paper-garbage-into-blue-container-in-a-park-garbage-sorting-set-bins.jpg?b=1&s=2048x2048&w=0&k=20&c=fWvgxmpWHB4RE3CPuzKAYiqKiz9K2bXa8k2H_18DMrQ=',
  'collector-development':
  '/photo-1542601906990-b4d3fb778b09.avif',
}

const roadmapSteps = [
  { step: 1, title: 'Requirement Analysis', desc: 'We conduct in-depth discovery sessions to understand your current state, challenges, regulatory obligations, and sustainability goals. This includes stakeholder interviews, document review, and site visits.', icon: '🔍', duration: '1-2 weeks' },
  { step: 2, title: 'Research & Strategy', desc: 'Our team researches best practices, regulatory requirements, and technology options relevant to your context. We develop a strategic framework with clear objectives and KPIs.', icon: '📊', duration: '2-3 weeks' },
  { step: 3, title: 'Environmental Assessment', desc: 'Comprehensive on-site assessment to characterize waste streams, measure environmental impacts, identify compliance gaps, and establish baseline data for impact measurement.', icon: '🌿', duration: '1-3 weeks' },
  { step: 4, title: 'Solution Design', desc: 'We design a customized solution architecture including systems, processes, technology platforms, and stakeholder engagement plans. Detailed project plan with milestones and deliverables.', icon: '✏️', duration: '2-4 weeks' },
  { step: 5, title: 'Implementation', desc: 'Expert execution of the designed solution with transparent progress tracking. Regular check-ins, issue resolution, and adaptive management to ensure successful delivery.', icon: '⚙️', duration: 'Project-specific' },
  { step: 6, title: 'Monitoring & Reporting', desc: 'Continuous monitoring of key performance indicators with real-time dashboards. Regular impact reports demonstrating environmental outcomes and compliance status.', icon: '📈', duration: 'Ongoing' },
  { step: 7, title: 'Optimization & Support', desc: 'Ongoing analysis of performance data to identify improvement opportunities. Continuous support, training, and system optimization to maximize long-term impact.', icon: '🚀', duration: 'Ongoing' },
];

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = getServiceById(id || '');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Leaf;

  return (
    <>
      <title>{service.title} — BlueDots Environmental Solutions</title>
      <meta name="description" content={service.shortDescription} />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium">{service.category}</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
              {service.title}
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mb-8">{service.tagline}</p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 border-0 shadow-xl px-8 py-6 text-base rounded-xl font-semibold">
              <Link to="/contact">Book Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 8C1248 6 1344 10 1392 12L1440 14V60H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-72 sm:h-96 mb-10"
          >
            <img
              src={serviceImages[service.id] || '/airo-assets/images/pages/home/hero'}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">{service.category}</span>
              <h2 className="text-white font-heading font-bold text-2xl mt-2">{service.tagline}</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-red-50 border border-red-100 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-red-500" />
                </div>
                <h2 className="font-heading font-bold text-lg text-red-700">The Challenge</h2>
              </div>
              <p className="text-red-800/80 leading-relaxed">{service.problem}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 border border-green-100 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="font-heading font-bold text-lg text-green-700">Our Solution</h2>
              </div>
              <p className="text-green-800/80 leading-relaxed">{service.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6">About This Service</h2>
          <p className="text-foreground/80 text-lg leading-relaxed">{service.fullDescription}</p>
        </div>
      </section>

      {/* Benefits + Technologies */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-blue-green flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary">Key Benefits</h2>
              </div>
              <div className="space-y-3">
                {service.benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80 text-sm">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary">Technologies & Tools</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {service.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="p-4 rounded-xl border border-border bg-card text-center hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="w-8 h-8 rounded-lg gradient-blue-green flex items-center justify-center mx-auto mb-2">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-foreground/80">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">Pricing Tiers</h2>
            <p className="text-muted-foreground">Choose the plan that fits your organization's needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-7 border-2 relative ${
                  tier.highlighted
                    ? 'border-primary bg-primary text-white shadow-2xl scale-105'
                    : 'border-border bg-card shadow-sm'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`font-heading font-bold text-xl mb-1 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                  {tier.name}
                </h3>
                <div className={`text-3xl font-bold mb-5 ${tier.highlighted ? 'text-white' : 'text-primary'}`}>
                  {tier.price}
                </div>
                <ul className="space-y-3 mb-7">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.highlighted ? 'text-accent' : 'text-accent'}`} />
                      <span className={`text-sm ${tier.highlighted ? 'text-white/85' : 'text-foreground/75'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    tier.highlighted
                      ? 'bg-white text-primary hover:bg-white/90'
                      : 'gradient-blue-green text-white border-0'
                  }`}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Our Process
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">
              How We Deliver This Service
            </h2>
            <p className="text-muted-foreground">A structured 7-step methodology for guaranteed results</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <div className="space-y-4">
              {roadmapSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative pl-16"
                >
                  {/* Step circle */}
                  <div className="absolute left-0 top-4 w-12 h-12 rounded-full gradient-blue-green flex items-center justify-center shadow-lg z-10 text-xl">
                    {step.icon}
                  </div>

                  <div
                    className={`rounded-2xl border cursor-pointer transition-all ${
                      expandedStep === i
                        ? 'border-primary/30 bg-primary/5 shadow-md'
                        : 'border-border bg-card hover:border-primary/20 hover:shadow-sm'
                    }`}
                    onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                  >
                    <div className="flex items-center justify-between p-5">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-muted-foreground">STEP {step.step}</span>
                        <h3 className="font-heading font-semibold text-primary">{step.title}</h3>
                        <span className="hidden sm:block text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{step.duration}</span>
                      </div>
                      {expandedStep === i
                        ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                        : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                      }
                    </div>
                    {expandedStep === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5"
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-blue-green">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Book a free consultation with our experts to discuss your specific requirements.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 shadow-xl px-10 py-6 text-base rounded-xl">
            <Link to="/contact">Book Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
