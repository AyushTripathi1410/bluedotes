import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
{ label: 'Home', href: '/' },
{ label: 'Services', href: '/services' },
{ label: 'Process', href: '/process' },
{ label: 'About', href: '/about' },
{ label: 'Blog', href: '/blog' },
{ label: 'Contact', href: '/contact' }];


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || !isHome ?
      'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' :
      'bg-transparent'}`
      }>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/bluedot-logo.jpg"
              alt="BlueDot Environmental Solutions"
              className="h-12 w-auto object-contain"
            />

            <div className="flex flex-col leading-none">
              <span
                className={`font-heading font-bold text-lg tracking-tight transition-colors ${
                  isScrolled || !isHome ? 'text-primary' : 'text-white'
                }`}
              >
                BlueDot
              </span>

              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  isScrolled || !isHome
                    ? 'text-muted-foreground'
                    : 'text-white/70'
                }`}
              >
                Environmental Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              location.pathname === link.href ?
              isScrolled || !isHome ?
              'bg-primary/10 text-primary' :
              'bg-white/20 text-white' :
              isScrolled || !isHome ?
              'text-foreground/70 hover:text-primary hover:bg-primary/5' :
              'text-white/80 hover:text-white hover:bg-white/10'}`
              }>
              
                {link.label}
              </Link>
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="gradient-blue-green text-white border-0 shadow-lg hover:opacity-90 hover:scale-105 transition-all">
              
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled || !isHome ?
            'text-foreground hover:bg-muted' :
            'text-white hover:bg-white/10'}`
            }>
            
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white border-t border-border shadow-xl overflow-hidden">
          
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              location.pathname === link.href ?
              'bg-primary/10 text-primary' :
              'text-foreground/70 hover:text-primary hover:bg-muted'}`
              }>
              
                  {link.label}
                </Link>
            )}
              <Button asChild className="mt-3 gradient-blue-green text-white border-0">
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}