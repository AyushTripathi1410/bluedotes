import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const posts = [
  {
    id: 1,
    title: "Understanding India's EPR Regulations for Plastic Waste: A Complete Guide",
    excerpt: "India's Extended Producer Responsibility framework has evolved significantly since 2022. Here's everything producers, importers, and brand owners need to know to stay compliant.",
    category: 'EPR Compliance',
    date: 'March 15, 2026',
    readTime: '8 min read',
    color: 'from-blue-500 to-cyan-500',
    icon: '♻️',
    image: 'https://media.gettyimages.com/id/2245574298/photo/outdoor-recycling-facility-showing-large-compressed-waste-bales-stacked.jpg?b=1&s=2048x2048&w=0&k=20&c=rybPpRYmInApCr_fb7JqW5RYe1qhd6f6a2dS1YmfQR8=',

  },
  {
    id: 2,
    title: 'The Business Case for ESG Reporting in India: Beyond Compliance',
    excerpt: "With SEBI's BRSR framework now mandatory for top-listed companies, ESG reporting is no longer optional. But the real opportunity lies in using ESG data to drive business value.",
    category: 'ESG Consulting',
    date: 'February 28, 2026',
    readTime: '6 min read',
    color: 'from-cyan-500 to-blue-600',
    icon: '📊',
    image: 'https://media.gettyimages.com/id/2226156127/photo/esg-environment-social-and-governance-concept-investing-in-sustainable-and-ethical.jpg?b=1&s=2048x2048&w=0&k=20&c=lTmNWzVD600rkUzGhLidrOuY3Y9B4x07n69nc18AdlU=',
  },
  {
    id: 3,
    title: 'Biomining Legacy Landfills: Turning Environmental Liabilities into Assets',
    excerpt: "India has over 3,000 legacy landfill sites occupying valuable urban land. Biomining offers a proven pathway to reclaim this land while recovering valuable materials.",
    category: 'Biomining',
    date: 'February 10, 2026',
    readTime: '10 min read',
    color: 'from-teal-500 to-green-600',
    icon: '⛏️',
    image: 'https://media.gettyimages.com/id/2215988256/photo/overhead-drone-view-of-landfill-in-novato-marin-county-california-on-a-sunny-day.jpg?b=1&s=2048x2048&w=0&k=20&c=35TzzwSIXHIJiZb5JHI3oVBFVRJj0ptK8xp3L1PP2pQ=',
  },
  {
    id: 4,
    title: 'How Waste Audits Can Reduce Your Operational Costs by 20-30%',
    excerpt: "Most organizations are sitting on significant waste-related cost savings they don't know about. A systematic waste audit is the first step to unlocking this value.",
    category: 'Waste Audit',
    date: 'January 25, 2026',
    readTime: '7 min read',
    color: 'from-green-500 to-emerald-500',
    icon: '📋',
    image: 'https://media.gettyimages.com/id/1774039020/photo/female-worker-checks-the-stock-and-controls-the-separation-of-recyclable-waste-of-the-plastic.jpg?b=1&s=2048x2048&w=0&k=20&c=PQegK9GBPYtsx-uxv0cSFSEQ9EVxeRWcaHdMHxgXuKw=',
  },
  {
    id: 5,
    title: 'Building Effective IEC Campaigns for Waste Segregation at Source',
    excerpt: "Behavior change is the hardest part of waste management. Here are evidence-based strategies for designing IEC campaigns that actually work.",
    category: 'IEC Campaigns',
    date: 'January 12, 2026',
    readTime: '9 min read',
    color: 'from-purple-500 to-pink-500',
    icon: '📢',
    image: 'https://media.gettyimages.com/id/2239437958/photo/recycling-smiling-man-holding-plastic-box-with-different-waste-paper-on-pink-background.jpg?b=1&s=2048x2048&w=0&k=20&c=vcQwJGY1ZqbTloAOGgD_sM-jpNkoT8yocAarKLvxgp0=',
  },
  {
    id: 6,
    title: "The Role of Informal Waste Collectors in India's Circular Economy",
    excerpt: "India's 4 million informal waste collectors recover an estimated 20% of all recyclable waste. Formalizing and supporting this workforce is key to scaling circular economy outcomes.",
    category: 'Social Impact',
    date: 'December 20, 2025',
    readTime: '8 min read',
    color: 'from-yellow-500 to-orange-500',
    icon: '👥',
    image: 'https://media.gettyimages.com/id/2228593367/photo/workers-at-waste-management-facility.jpg?b=1&s=2048x2048&w=0&k=20&c=kJuG97fo7EM8PRAHLPSJk_zThtYJ2sEXuHMT4xyfC38=',
  },
];

const categories = ['All', 'EPR Compliance', 'ESG Consulting', 'Biomining', 'Waste Audit', 'IEC Campaigns', 'Social Impact'];

export default function BlogPage() {
  return (
    <>
      <title>Blog — BlueDots Environmental Solutions</title>
      <meta name="description" content="Insights, guides, and expert perspectives on EPR compliance, ESG reporting, waste management, and sustainability in India." />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-blue-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
              <Leaf className="w-4 h-4 text-accent" />
              Insights & Resources
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Environmental Intelligence
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Expert insights on EPR compliance, ESG reporting, waste management, and building a circular economy in India.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 8C1248 6 1344 10 1392 12L1440 14V60H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group bg-card rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all overflow-hidden mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured image */}
              <div className="relative min-h-64 overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${posts[0].color} opacity-50`} />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">Featured</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-4xl">{posts[0].icon}</span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{posts[0].category}</span>
                  <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{posts[0].readTime}</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-4 leading-snug group-hover:text-secondary transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">{posts[0].date}</span>
                  <Button asChild className="gradient-blue-green text-white border-0">
                    <Link to="#">Read Article <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category filter */}
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 mb-10">
            <Tag className="w-4 h-4 text-muted-foreground shrink-0" />
            {categories.map(cat => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary first:bg-primary first:text-white"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Background image top half */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-full bg-white/90 text-primary text-xs font-medium shadow">{post.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-2xl">{post.icon}</div>
                </div>
                {/* Content */}
                <div className="p-6 bg-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-muted-foreground text-xs flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-bold text-primary text-base mb-3 leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs">{post.date}</span>
                    <Link to="#" className="text-primary text-sm font-medium hover:text-secondary flex items-center gap-1 transition-colors">
                      Read <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Leaf className="w-10 h-10 text-accent mx-auto mb-4" />
          <h2 className="font-heading text-3xl font-bold text-primary mb-3">Stay Informed</h2>
          <p className="text-muted-foreground mb-6">Get the latest insights on environmental compliance and sustainability delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="gradient-blue-green text-white border-0 shadow-lg px-6 rounded-xl">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}










