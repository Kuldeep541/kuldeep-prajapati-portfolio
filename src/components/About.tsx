import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, Heart, Sparkles, Code, Rocket } from 'lucide-react';
import aboutImage from '@/assets/about-me.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, value: '1+', label: 'Years Experience', color: 'text-primary' },
    { icon: Rocket, value: '10+', label: 'Projects Completed', color: 'text-secondary' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction', color: 'text-accent' },
    { icon: Sparkles, value: '∞', label: 'Learning Never Stops', color: 'text-primary' }
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Freelance Full Stack Developer',
      detail: 'Building real solutions for real people',
      color: 'text-green-400',
      bg: 'bg-green-500/10'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in Lucknow, Uttar Pradesh',
      detail: 'Available for remote work globally',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-16 sm:py-20 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 sm:w-72 h-40 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-1/3 right-1/3 w-52 sm:w-96 h-52 sm:h-96 bg-secondary/20 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }} 
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-2 bg-primary/10 rounded-full mb-4"
          >
            <Sparkles className="text-primary" size={22} />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-sora">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 font-poppins"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Passionate <span className="font-dancing text-primary">Full Stack</span> Developer
                </motion.h3>
                
                <motion.div 
                  className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed font-inter"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <p>
                    I'm a dedicated Full Stack Developer with expertise in <span className="text-primary font-semibold">React, Node.js, PHP, and MySQL</span>. 
                  </p>
                  <p>
                    From government portals to educational platforms, I bring ideas to life with <span className="text-secondary font-semibold">clean code</span> and 
                    <span className="text-accent font-semibold"> intuitive design</span>.
                  </p>
                  <p>
                    Currently based in Lucknow, Uttar Pradesh, I specialize in creating modern web applications that make a difference.
                  </p>
                </motion.div>
              </div>

              {/* Highlights */}
              <motion.div 
                className="grid gap-4 sm:grid-cols-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    className={`${highlight.bg} border border-border/50 rounded-xl p-4 hover:scale-105 transition-all duration-300 group cursor-default`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 ${highlight.bg} rounded-lg border border-border/30`}>
                        <highlight.icon size={18} className={highlight.color} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground font-poppins">{highlight.title}</h4>
                        <p className="text-muted-foreground text-sm">{highlight.description}</p>
                        <p className="text-xs text-muted-foreground/80 mt-1">{highlight.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-6 sm:-inset-8 bg-hero-gradient rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-2 group-hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={aboutImage} 
                      alt="Kuldeep Prajapati working on laptop"
                      className="w-full h-64 sm:h-80 md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Quote Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 left-2 sm:-left-6 bg-primary text-primary-foreground p-3 sm:p-4 rounded-2xl rounded-bl-none shadow-lg max-w-[250px] sm:max-w-xs text-xs sm:text-sm"
              >
                "Building the future, one line of code at a time! 🚀"
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                className="text-center p-4 sm:p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-card/80 rounded-full mb-3 sm:mb-4">
                  <stat.icon size={22} className={stat.color} />
                </div>
                <div className="text-xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2 font-sora">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs sm:text-sm font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
