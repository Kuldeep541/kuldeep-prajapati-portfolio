import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black flex items-center justify-center pt-20 pb-20 px-6 sm:px-8">
      <div className="w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter text-white">
              FULL STACK
              <br />
              <span className="text-lime">DEVELOPER</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-xl sm:text-2xl text-white max-w-3xl leading-relaxed font-light">
              Building modern web applications with React, Node.js, and cutting-edge technologies.
              Transforming ideas into scalable solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime text-black font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 shadow-[0_0_20px_rgba(198,255,52,0.4)] hover:shadow-[0_0_30px_rgba(198,255,52,0.6)] transition-all duration-300"
            >
              Get In Touch
              <ArrowRight size={24} />
            </motion.button>

            <motion.a
              href="https://github.com/kuldeep541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg flex items-center gap-3 hover:border-lime hover:text-lime transition-all duration-300"
            >
              View My Work
              <Github size={24} />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-6 pt-8"
          >
            <motion.a
              href="https://github.com/kuldeep541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white hover:text-lime transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={32} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/kuldeep-prajapati-aa9276178"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white hover:text-lime transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </motion.a>
            <motion.a
              href="mailto:kuldeeppprajapati2111@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-white hover:text-lime transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={32} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-lime text-sm font-semibold"
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
