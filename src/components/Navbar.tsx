import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-lime/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold text-lime cursor-pointer"
        >
          KP
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              whileHover={{ color: '#C6FF34' }}
              className="text-white font-semibold hover:text-lime transition-colors duration-300 text-lg"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href="https://drive.google.com/file/d/1s9ppoRMGFS2qJUvyI8cuviyBoxE3H8tn/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden sm:block bg-lime text-black font-bold px-6 py-2 rounded-lg shadow-[0_0_20px_rgba(198,255,52,0.4)] hover:shadow-[0_0_30px_rgba(198,255,52,0.6)] transition-all duration-300"
        >
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/95 border-t border-lime/20 overflow-hidden"
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-white font-semibold text-lg hover:text-lime transition-colors duration-300"
            >
              {item.label}
            </motion.button>
          ))}
          <motion.a
            href="https://drive.google.com/file/d/1s9ppoRMGFS2qJUvyI8cuviyBoxE3H8tn/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime text-black font-bold px-6 py-2 rounded-lg text-center"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
