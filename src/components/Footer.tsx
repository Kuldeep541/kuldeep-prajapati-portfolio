import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kuldeep541', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/kuldeep-prajapati-aa9276178', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kuldeeppprajapati2111@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-lime/20 py-16 px-6 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-3xl font-extrabold text-lime mb-4">KP</div>
            <p className="text-white">Full Stack Developer building modern web experiences.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'Work', href: '#projects' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white hover:text-lime transition-colors duration-300 font-semibold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">Follow</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: '#C6FF34' }}
                    className="text-white transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={28} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-lime/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            © {currentYear} Kuldeep Prajapati. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-lime text-black flex items-center justify-center font-bold shadow-[0_0_20px_rgba(198,255,52,0.4)] hover:shadow-[0_0_30px_rgba(198,255,52,0.6)] transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
