import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  ArrowRight, Recycle, ClipboardList, Factory, Mountain,
  RefreshCw, Megaphone, BarChart3, Users,
  Leaf, Globe, TrendingUp, Award, ChevronRight, Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const stats = [
  { value: '200+', label: 'Projects Completed', icon: Award },
  { value: '50K+', label: 'Tonnes CO₂ Reduced', icon: Globe },
  { value: '150+', label: 'Happy Clients', icon: Users },
  { value: '8+', label: 'Years of Excellence', icon: TrendingUp },
];

const iconMap: Record<string, React.ElementType> = {
  Recycle, ClipboardList, Factory, Mountain, RefreshCw, Megaphone, BarChart3, Users
};

const serviceImageSlots: Record<string, string> = {
  'epr-compliance': 'https://media.gettyimages.com/id/2245574298/photo/outdoor-recycling-facility-showing-large-compressed-waste-bales-stacked.jpg?b=1&s=2048x2048&w=0&k=20&c=rybPpRYmInApCr_fb7JqW5RYe1qhd6f6a2dS1YmfQR8=',
  'waste-audit': 'https://media.gettyimages.com/id/1774039020/photo/female-worker-checks-the-stock-and-controls-the-separation-of-recyclable-waste-of-the-plastic.jpg?b=1&s=2048x2048&w=0&k=20&c=PQegK9GBPYtsx-uxv0cSFSEQ9EVxeRWcaHdMHxgXuKw=',
  'industrial-waste': 'https://media.gettyimages.com/id/1323486593/photo/engineer-pointing-forward-engineer-driving-a-loader-in-the-recycling-plant.jpg?b=1&s=2048x2048&w=0&k=20&c=2cKTuNTRMyYQmB29C1vaupGSpctG_cNGD7iL28vG8Hk=',
  'biomining': 'https://media.gettyimages.com/id/2215988256/photo/overhead-drone-view-of-landfill-in-novato-marin-county-california-on-a-sunny-day.jpg?b=1&s=2048x2048&w=0&k=20&c=35TzzwSIXHIJiZb5JHI3oVBFVRJj0ptK8xp3L1PP2pQ=',
  'plastic-recycling': 'https://media.gettyimages.com/id/1399760405/photo/plastic-bottle-crushed-or-small-pieces-of-cut-colorful-plastic-bottles-with-blurred-green.jpg?b=1&s=2048x2048&w=0&k=20&c=BCFk4yiPn0iXu_yx4qvAux4MzykbgUQ-X1KwN9IlAsY=',
  'esg-consulting': 'https://media.gettyimages.com/id/2226156127/photo/esg-environment-social-and-governance-concept-investing-in-sustainable-and-ethical.jpg?b=1&s=2048x2048&w=0&k=20&c=lTmNWzVD600rkUzGhLidrOuY3Y9B4x07n69nc18AdlU=',
  'iec-campaigns': 'https://media.gettyimages.com/id/2239437958/photo/recycling-smiling-man-holding-plastic-box-with-different-waste-paper-on-pink-background.jpg?b=1&s=2048x2048&w=0&k=20&c=vcQwJGY1ZqbTloAOGgD_sM-jpNkoT8yocAarKLvxgp0=',
  'collector-development':
  '/photo-1542601906990-b4d3fb778b09.avif',
};

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Head of Sustainability, Exide',
    text: 'BlueDot transformed our EPR compliance process. Their expertise and technology platform made what seemed complex completely manageable.',
    rating: 5,
  },
  {
    name: 'Suraj',
    role: 'CSR Director, Shree Cements',
    text: 'The waste audit conducted by BlueDot revealed significant cost-saving opportunities we had completely missed. Exceptional team.',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Head of Sustainability, Hindustan Unilever Limited',
    text: 'Their biomining project reclaimed 15 acres of landfill land. The results exceeded our expectations in both timeline and quality.',
    rating: 5,
  },
];

const howItWorks = [
  { step: '01', title: 'Requirement Analysis', desc: 'We understand your environmental challenges and compliance needs.' },
  { step: '02', title: 'Research & Strategy', desc: 'Data-driven strategy development tailored to your context.' },
  { step: '03', title: 'Solution Design', desc: 'Custom solution architecture with clear milestones.' },
  { step: '04', title: 'Implementation', desc: 'Expert execution with transparent progress tracking.' },
  { step: '05', title: 'Monitoring & Reporting', desc: 'Continuous monitoring with impact dashboards.' },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <title>BlueDot Environmental Solutions — Driving Sustainable Change</title>
      <meta name="description" content="BlueDots Environmental Solutions LLP provides expert EPR compliance, waste management, ESG consulting, and sustainability services across India." />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-blue-green" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://img1.wsimg.com/isteam/getty/2257568426')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Animated orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/90 text-sm font-medium mb-6"
            >
              <Leaf className="w-4 h-4 text-accent" />
              India's Premier Environmental Solutions Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Driving Sustainable Change with{' '}
              <span className="text-accent">Smart Environmental</span>{' '}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            >
              From EPR compliance to ESG consulting, BlueDot helps organizations navigate the circular economy with science-backed strategies and measurable impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white border-0 shadow-xl shadow-green-500/30 text-base px-8 py-6 rounded-xl"
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 text-base px-8 py-6 rounded-xl backdrop-blur-sm"
              >
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L48 70C96 60 192 40 288 33.3C384 27 480 33 576 40C672 47 768 53 864 50C960 47 1056 33 1152 26.7C1248 20 1344 20 1392 20L1440 20V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-72 lg:h-80"
            >
              <img
                src="https://img1.wsimg.com/isteam/getty/2246814470"
                alt="Solar energy field — renewable energy in India"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-heading font-bold text-xl">Powering India's Green Future</p>
                <p className="text-white/75 text-sm mt-1">Science-backed solutions with measurable impact</p>
              </div>
            </motion.div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl gradient-blue-green flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Recycle className="w-4 h-4" />
              What We Do
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Comprehensive Environmental Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From waste management to ESG consulting, we provide end-to-end environmental solutions for a sustainable future.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.slice(0, 8).map((service, i) => {
              const Icon = iconMap[service.icon] || Leaf;
              const imgSlot = serviceImageSlots[service.id];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden relative"
                >
                  <Link to={`/services/${service.id}`} className="block h-full">
                    {/* Background image */}
                    {imgSlot && (
                      <img
                        src={imgSlot}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {/* Gradient overlay — light at top, dark at bottom */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/90 transition-all duration-300`} />
                    {/* Content */}
                    <div className="relative z-10 p-6 flex flex-col h-full min-h-[220px]">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-auto group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="mt-16">
                        <h3 className="font-heading font-semibold text-white mb-2 text-sm leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-white/70 text-xs leading-relaxed mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center gap-1 text-accent text-xs font-medium">
                          Learn more <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="gradient-blue-green text-white border-0 shadow-lg px-8">
              <Link to="/services">View All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Our Process
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              How We Deliver Results
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven methodology that transforms environmental challenges into sustainable opportunities.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-full gradient-blue-green flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                    <span className="font-heading font-bold text-white text-lg">{step.step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-primary text-sm mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              <Link to="/process">View Full Process <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY BLUEDOTS */}
      <section className="py-20 gradient-blue-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose BlueDot?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              We combine deep domain expertise with cutting-edge technology to deliver measurable environmental impact.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-96"
            >
              <img
                src="https://img1.wsimg.com/isteam/getty/2246801285"
                alt="Sustainable green city environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card rounded-2xl p-4">
                  <p className="text-white font-semibold text-sm">Building Greener Cities</p>
                  <p className="text-white/70 text-xs mt-1">Transforming urban environments through science-backed sustainability</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Science-Backed Approach', desc: 'Every solution is grounded in environmental science and data analytics for maximum impact.', icon: '🔬' },
                { title: 'End-to-End Expertise', desc: 'From strategy to implementation and monitoring — we handle the complete journey.', icon: '🎯' },
                { title: 'Regulatory Mastery', desc: 'Deep knowledge of Indian and international environmental regulations keeps you compliant.', icon: '⚖️' },
                { title: 'Technology-Enabled', desc: 'Proprietary platforms for waste tracking, compliance management, and impact reporting.', icon: '💻' },
                { title: 'Proven Track Record', desc: '200+ successful projects across industries with measurable environmental outcomes.', icon: '📊' },
                { title: 'Stakeholder Engagement', desc: 'Expert facilitation of multi-stakeholder processes for lasting behavior change.', icon: '🤝' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card rounded-2xl p-5 hover:bg-white/15 transition-colors"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Star className="w-4 h-4" />
              Client Stories
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Trusted by Industry Leaders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-blue-green flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-primary text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 sm:p-16 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <div className="relative">
                <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                  Ready to Build a Sustainable Future?
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  Let's discuss how BlueDot can help your organization achieve its environmental goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 shadow-xl px-8 py-6 text-base rounded-xl">
                    <Link to="/contact">Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-base rounded-xl">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
