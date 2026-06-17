import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const services = [
  'EPR Compliance', 'Waste Audit', 'Industrial Waste Management',
  'Biomining', 'Plastic Recycling', 'IEC Campaigns',
  'ESG Consulting', 'Collector Development Centre', 'Other'
];

const faqs = [
  { q: 'How long does a typical engagement take?', a: 'Engagement duration varies by service. A waste audit typically takes 2-4 weeks, while EPR compliance setup takes 4-8 weeks. We provide detailed timelines during the consultation.' },
  { q: 'Do you work with small businesses?', a: 'Yes! We work with organizations of all sizes — from startups to large enterprises. Our tiered pricing ensures solutions are accessible to businesses at every stage.' },
  { q: 'What industries do you serve?', a: 'We serve manufacturing, FMCG, retail, hospitality, real estate, and municipal bodies. Our expertise spans all sectors generating significant waste or requiring environmental compliance.' },
  { q: 'Do you provide pan-India services?', a: 'Yes, we operate across India with offices in Noida and field teams in 8+ states. We can serve clients anywhere in India.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Contact Us — BlueDots Environmental Solutions</title>
      <meta name="description" content="Get in touch with BlueDots Environmental Solutions. Schedule a free consultation for EPR compliance, waste management, or ESG consulting." />

      {/* Hero */}
      <section className="pt-32 pb-20 gradient-blue-green relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4 text-accent" />
              Get In Touch
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's Build Something<br />Sustainable Together
            </h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Schedule a free consultation with our environmental experts. We'll assess your needs and recommend the right solutions.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 8C1248 6 1344 10 1392 12L1440 14V60H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-2">Contact Information</h2>
                <p className="text-muted-foreground text-sm">Reach out through any channel — we typically respond within 24 hours.</p>
              </div>

              {[
                { icon: Mail, label: 'Email', value: 'contact@bluedotes.com', href: 'mailto:contact@bluedotes.com' },
                { icon: Phone, label: 'Phone', value: '+91 7982732788', href: 'tel:+7982732788' },
                { icon: MapPin, label: 'Office', value: 'Noida, Uttar Pradesh, India', href: '#' },
                { icon: Clock, label: 'Hours', value: 'Mon–Sat, 9:00 AM – 6:00 PM IST', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl gradient-blue-green flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium mb-0.5">{label}</div>
                    <div className="text-primary font-medium text-sm">{value}</div>
                  </div>
                </a>
              ))}

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Noida, Uttar Pradesh</p>
                  <a
                    href="https://maps.google.com/?q=Noida,Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-xs hover:underline mt-1 block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 mb-6">Thank you for reaching out. Our team will contact you within 24 hours to schedule your consultation.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-sm p-8">
                  <h2 className="font-heading text-2xl font-bold text-primary mb-6">Schedule a Consultation</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-foreground/80 mb-1.5 block">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground/80 mb-1.5 block">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground/80 mb-1.5 block">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-foreground/80 mb-1.5 block">Company / Organization</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={e => setForm({ ...form, company: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <Label htmlFor="service" className="text-sm font-medium text-foreground/80 mb-1.5 block">Service of Interest</Label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={e => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-xl border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="mb-6">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground/80 mb-1.5 block">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Tell us about your environmental challenges and what you're looking to achieve..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="rounded-xl resize-none"
                    />
                  </div>
                  {error && <p className="text-destructive text-sm mb-4">{error}</p>}
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="w-full gradient-blue-green text-white border-0 shadow-lg py-6 text-base rounded-xl"
                  >
                    {loading ? 'Sending...' : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                  </Button>
                  <p className="text-muted-foreground text-xs text-center mt-3">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-primary mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="bg-card rounded-2xl border border-border overflow-hidden"
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-primary text-sm">{faq.q}</span>
                  <span className="text-muted-foreground shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
