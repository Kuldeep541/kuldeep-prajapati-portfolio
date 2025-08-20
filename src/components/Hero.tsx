import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Sparkles, Zap, Star, MapPin, Calendar } from 'lucide-react';

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
    // <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gray-900 mt-20">
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gray-900 mt-20 bg-[url('/kuldeep-prajapati.jpg')] bg-cover bg-center"
    >
      {/* Left dark overlay */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/70 to-transparent z-0 pointer-events-none" />
      {/* Right dark overlay */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black via-black/70 to-transparent z-0 pointer-events-none" />
      {/* Center light overlay gradient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-xl max-h-xl bg-gradient-radial from-white/40 via-white/10 to-transparent rounded-full blur-3xl z-0 pointer-events-none" />

      {/* Background with dark texture and purple gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-850 to-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-purple-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Dynamic Floating Elements with purple theme */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-purple-700/30 blur-sm"
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Middle column - Main content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="lg:col-span-2"
            >
              {/* Greeting with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6 flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-2xl">👋</span>
                </motion.div>
                <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20 backdrop-blur-sm">
                  Hello, I'm
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-2 bg-purple-600/10 rounded-full"
                >
                  <Star className="text-purple-500" size={20} />
                </motion.div>
              </motion.div>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 1.2, type: "spring", stiffness: 120 }}
                className="mb-8 relative"
              >
                <h1 className="text-6xl md:text-7xl font-bold leading-tight text-white">
                  <motion.span
                    className="block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Kuldeep
                  </motion.span>
                  <motion.span
                    className="text-4xl md:text-5xl text-gray-300 block mt-2 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Prajapati
                    <motion.div
                      className="absolute -top-2 -right-8 p-2 bg-purple-500/20 rounded-full"
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <Zap className="text-purple-400" size={20} />
                    </motion.div>
                  </motion.span>
                </h1>
              </motion.div>

              {/* Typewriter Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="mb-8 text-2xl md:text-3xl"
              >
                <span className="text-gray-400">I'm a </span>
                <span className="relative">
                  <span className="text-purple-400 font-semibold bg-purple-500/5 px-3 py-1 rounded-lg border border-purple-500/20">
                    {displayedText}
                    <motion.span
                      className="border-r-2 border-purple-500 ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </span>
                </span>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="mb-10"
              >
                <p className="text-lg md:text-xl text-gray-400 mb-4 max-w-3xl leading-relaxed">
                  Crafting <span className="text-purple-400 font-semibold bg-purple-500/10 px-2 py-1 rounded">digital experiences</span> that matter.
                  Building <span className="text-purple-300 font-semibold bg-purple-600/10 px-2 py-1 rounded">scalable solutions</span> with
                  modern technologies and beautiful design.
                </p>
              </motion.div>

              {/* Tech Stack Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                {['React', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'TypeScript'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 2 + index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 rounded-full text-sm font-medium hover:bg-purple-500/10 transition-all duration-300 cursor-default group"
                  >
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors duration-300">{tech}</span>
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 items-center mb-12"
              >
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-600/90 text-white rounded-xl font-semibold text-lg transition-all duration-300 overflow-hidden shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Download size={20} className="group-hover:animate-bounce" />
                    View Resume
                    <Sparkles size={16} className="group-hover:scale-125 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                  className="group px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-purple-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 2.5, duration: 0.8 }}
                className="flex gap-4 mb-16"
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
                    className={`p-4 bg-gray-800/80 backdrop-blur-sm hover:bg-purple-500/10 border border-gray-700 hover:border-purple-500/30 rounded-xl transition-all duration-300 group ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Ambient Light Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default Hero;