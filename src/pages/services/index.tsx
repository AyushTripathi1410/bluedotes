import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Recycle, ClipboardList, Factory, Mountain,
  RefreshCw, Megaphone, BarChart3, Users, Leaf,
  ArrowRight, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { services, serviceCategories } from '@/data/services';

// Map service IDs to their image slots
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

const iconMap: Record<string, React.ElementType> = {
  Recycle, ClipboardList, Factory, Mountain, RefreshCw, Megaphone, BarChart3, Users
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...serviceCategories];
  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <>
      <title>Our Services — BlueDots Environmental Solutions</title>
      <meta name="description" content="Explore BlueDots' comprehensive environmental services including EPR compliance, waste management, ESG consulting, biomining, and more." />

      {/* Hero */}
      <section className="pt-32 pb-16 gradient-blue-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-white/90 text-sm font-medium mb-5"
          >
            <Leaf className="w-4 h-4 text-accent" />
            Our Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Environmental Solutions for a{' '}
            <span className="text-accent">Circular Economy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            From compliance to consulting, we offer the full spectrum of environmental services to help your organization thrive sustainably.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 8C1248 6 1344 10 1392 12L1440 14V60H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-background sticky top-16 z-30 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'gradient-blue-green text-white shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((service, i) => {
              const Icon = iconMap[service.icon] || Leaf;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  {/* Image thumbnail */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={serviceImages[service.id] || '/airo-assets/images/pages/home/hero'}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent`} />
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 text-primary shadow">
                        {service.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>
                    <div className="space-y-2 mb-5">
                      {service.benefits.slice(0, 3).map(b => (
                        <div key={b} className="flex items-center gap-2 text-xs text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>
                    <Button asChild className={`w-full bg-gradient-to-r ${service.color} text-white border-0 hover:opacity-90 transition-opacity`}>
                      <Link to={`/services/${service.id}`}>
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">Not sure which service you need?</h2>
          <p className="text-muted-foreground mb-8">Our experts will assess your needs and recommend the right solution.</p>
          <Button asChild size="lg" className="gradient-blue-green text-white border-0 shadow-lg px-8">
            <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
