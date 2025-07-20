import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles, Zap, Star } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';
import creativeBulb from '@/assets/creative-bulb.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'github.com/kuldeep541', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:kuldeeppprajapati2111@gmail.com', label: 'Email', color: 'hover:text-red-400' }
  ];

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Complex Background Layers */}
      <div className="absolute inset-0">
        {/* Base Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/98" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 bg-hero-gradient opacity-5" />
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Dynamic Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-sm"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -100, 50, 0],
              opacity: [0, 0.8, 0.3, 0],
              scale: [0.5, 1, 0.8, 0.5],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          <div className="text-center lg:text-left max-w-4xl">
            
            {/* Greeting with Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 flex items-center justify-center lg:justify-start gap-3"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl">👋</span>
              </motion.div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 backdrop-blur-sm">
                Hello, I'm
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 bg-secondary/10 rounded-full"
              >
                <Star className="text-secondary" size={20} />
              </motion.div>
            </motion.div>

            {/* Enhanced Name with Mixed Fonts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 120 }}
              className="mb-8 relative"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
                <motion.span 
                  className="font-dancing bg-hero-gradient bg-clip-text text-transparent block"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Kuldeep
                </motion.span>
                <motion.span 
                  className="font-pacifico text-4xl md:text-6xl lg:text-7xl text-foreground/90 block mt-2 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Prajapati
                  <motion.div
                    className="absolute -top-2 -right-8 p-2 bg-accent/20 rounded-full"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Zap className="text-accent" size={20} />
                  </motion.div>
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="mb-8 text-2xl md:text-4xl font-sora"
            >
              <span className="text-muted-foreground">I'm a </span>
              <span className="relative">
                <span className="text-primary font-semibold bg-primary/5 px-3 py-1 rounded-lg border border-primary/20">
                  {displayedText}
                  <motion.span 
                    className="border-r-2 border-primary ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </span>
              </span>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mb-10"
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl leading-relaxed font-inter">
                Crafting <span className="text-secondary font-semibold bg-secondary/10 px-2 py-1 rounded">digital experiences</span> that matter. 
                Building <span className="text-accent font-semibold bg-accent/10 px-2 py-1 rounded">scalable solutions</span> with 
                modern technologies and beautiful design.
              </p>

            </motion.div>

            {/* Tech Stack Pills with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12"
            >
              {['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'TypeScript'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 2 + index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 rounded-full text-sm font-medium hover:bg-primary/10 transition-all duration-300 cursor-default group"
                >
                  <span className="group-hover:text-primary transition-colors duration-300">{tech}</span>
                </motion.span>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-12"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden shadow-glow-primary hover:shadow-neon-glow"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Download size={20} className="group-hover:animate-bounce" />
                  View Resume
                  <Sparkles size={16} className="group-hover:scale-125 transition-transform duration-300" />
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.a>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-glow-primary/50 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="flex justify-center lg:justify-start gap-4 mb-16"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 2.7 + index * 0.1, duration: 0.6 }}
                  className={`p-4 bg-card/80 backdrop-blur-sm hover:bg-primary/10 border border-border hover:border-primary/30 rounded-xl transition-all duration-300 group ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 3, duration: 1 }}
              className="flex flex-col items-center lg:items-start"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
                className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative cursor-pointer bg-primary/5 backdrop-blur-sm"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                />
              </motion.div>
              <motion.p 
                className="text-muted-foreground text-sm mt-3 font-inter flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={14} className="animate-bounce" />
                Scroll to discover more
                <Sparkles size={12} />
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;