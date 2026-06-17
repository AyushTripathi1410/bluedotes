import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Target, Eye, Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const team = [
  { name: 'Sandeep Shukla', role: 'Founder & CEO', bio: 'Environmental engineer with 15+ years in waste management and circular economy consulting.', initials: 'SS', color: 'from-blue-500 to-cyan-500' },
  { name: 'Pankaj Shukla', role: 'Founder & COO', bio: 'Logistics and supply chain expert specializing in waste collection network design and optimization.', initials: 'PS', color: 'from-purple-500 to-indigo-500' },
];

const values = [
  { icon: '🌱', title: 'Sustainability First', desc: 'Every decision we make is guided by its environmental impact and contribution to a circular economy.' },
  { icon: '🔬', title: 'Science-Backed', desc: 'Our solutions are grounded in environmental science, data analytics, and evidence-based best practices.' },
  { icon: '🤝', title: 'Collaborative', desc: 'We work as true partners, building long-term relationships based on transparency and shared success.' },
  { icon: '💡', title: 'Innovative', desc: 'We continuously explore new technologies and approaches to deliver more effective environmental solutions.' },
  { icon: '⚖️', title: 'Accountable', desc: 'We measure and report our impact rigorously, holding ourselves to the highest standards of accountability.' },
  { icon: '🌍', title: 'Inclusive', desc: 'We design solutions that create value for all stakeholders, including marginalized communities.' },
];

const milestones = [
  { year: '2021', event: 'BlueDot founded with a focus on solid waste management consulting' },
  { year: '2022', event: 'Expanded to EPR compliance services as India\'s plastic waste rules evolved' },
  { year: '2022', event: 'Launched ESG consulting practice; completed first biomining project' },
  { year: '2023', event: 'Crossed 100 client milestone; launched proprietary compliance tracking platform' },
  { year: '2024', event: 'Expanded to 8 states; launched Collector Development Centre program' },
  { year: '2026', event: '200+ projects completed; recognized as India\'s leading environmental solutions firm' },
];

export default function AboutPage() {
  return (
    <>
      <title>About Us — BlueDots Environmental Solutions</title>
      <meta name="description" content="Learn about BlueDot Environmental Solutions LLP — our mission, team, and commitment to driving sustainable change across India." />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-blue-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
                <Leaf className="w-4 h-4 text-accent" />
                Our Story
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Committed to a Circular, Sustainable India
              </h1>
              <p className="text-white/75 text-lg leading-relaxed">
                BlueDot Environmental Solutions LLP was founded on a simple but powerful belief: that environmental challenges are also economic opportunities. Since 2021, we've been helping organizations across India transform their relationship with waste, compliance, and sustainability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://img1.wsimg.com/isteam/getty/1626847259"
                  alt="BlueDots team"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-blue-green flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm">200+ Projects</div>
                    <div className="text-muted-foreground text-xs">Across 8 States</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 8C1248 6 1344 10 1392 12L1440 14V60H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission image banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-xl h-56 mb-12"
          >
            <img
              src="https://img1.wsimg.com/isteam/getty/1324157838"
              alt="Green sustainable environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-2">Our Foundation</p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">Mission, Vision & Values</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', color: 'text-blue-600 bg-blue-50', text: 'To contribute to the sustainable development of India through the implementation of integrated waste management practices and circular economy solutions that foster environmental and human well-being.' },
              { icon: Eye, title: 'Our Vision', color: 'text-green-600 bg-green-50', text: 'A future where waste is recognized as a resource, organizations lead with environmental responsibility, and communities thrive in a clean, circular economy.' },
              { icon: Heart, title: 'Our Values', color: 'text-purple-600 bg-purple-50', text: 'Science-backed solutions, stakeholder collaboration, radical transparency, and an unwavering commitment to measurable environmental and social impact.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-primary text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">Our Journey</h2>
            <p className="text-muted-foreground">A decade of driving environmental change across India</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-card rounded-2xl p-5 border border-border shadow-sm inline-block text-left">
                      <div className="font-heading font-bold text-primary text-lg mb-1">{m.year}</div>
                      <p className="text-muted-foreground text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full gradient-blue-green flex items-center justify-center shadow-lg shrink-0 z-10 hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">Meet Our Founders</h2>
            <p className="text-muted-foreground">Passionate experts committed to environmental excellence</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="w-full sm:w-[320px] bg-card rounded-2xl p-6 border border-border shadow-sm text-center hover:shadow-xl transition-all"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-2xl shadow-lg`}
                >
                  {member.initials}
                </div>

                <h3 className="font-heading font-bold text-primary mb-1">
                  {member.name}
                </h3>

                <p className="text-secondary text-xs font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-muted-foreground text-xs leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-3">What Drives Us</h2>
            <p className="text-muted-foreground">The principles that guide every decision we make</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-heading font-semibold text-primary mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-blue-green">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Leaf className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">Join Us in Building a Sustainable India</h2>
          <p className="text-white/70 text-lg mb-8">Partner with BlueDot to transform your environmental challenges into opportunities.</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white border-0 shadow-xl px-10 py-6 text-base rounded-xl">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
