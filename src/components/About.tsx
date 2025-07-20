import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Heart, Sparkles, Code, Rocket } from 'lucide-react';
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
    <section id="about" className="py-20 bg-gradient-to-br from-background via-card/20 to-background relative overflow-hidden" ref={ref}>
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-2 bg-primary/10 rounded-full mb-4"
          >
            <Sparkles className="text-primary" size={24} />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sora">
            About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Passionate <span className="font-dancing text-primary">Full Stack</span> Developer
                </motion.h3>
                
                <motion.div 
                  className="space-y-4 text-lg text-muted-foreground leading-relaxed font-inter"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <p>
                    I'm a dedicated Full Stack Developer with expertise in <span className="text-primary font-semibold">React, Node.js, PHP, and MySQL</span>. 
                    My passion lies in building scalable, real-world applications that deliver seamless user experiences.
                  </p>
                  <p>
                    From government portals to educational platforms, I bring ideas to life with <span className="text-secondary font-semibold">clean code</span> and 
                    <span className="text-accent font-semibold"> intuitive design</span>. Every project is an opportunity to solve real problems for real people.
                  </p>
                  <p>
                    Currently based in Lucknow, Uttar Pradesh, I specialize in creating modern web applications that make a difference in people's lives.
                  </p>
                </motion.div>
              </div>

              {/* Highlights */}
              <motion.div 
                className="grid gap-4"
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
                      <div className={`p-2 ${highlight.bg} rounded-lg border border-border/30 group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon size={20} className={highlight.color} />
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
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
              className="relative"
            >
              {/* Main Image Container */}
              <div className="relative group">
                {/* Decorative Background */}
                <div className="absolute -inset-8 bg-hero-gradient rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse-glow" />
                
                {/* Image Frame */}
                <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-2 group-hover:scale-105 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={aboutImage} 
                      alt="Kuldeep Prajapati working on laptop"
                      className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float">
                      <Code className="text-primary" size={20} />
                    </div>
                    <div className="absolute bottom-4 left-4 p-3 bg-background/90 backdrop-blur-sm rounded-full border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float" style={{ animationDelay: '1s' }}>
                      <Rocket className="text-secondary" size={20} />
                    </div>
                  </div>
                </div>

                {/* Morphing Border */}
                <div className="absolute -inset-1 bg-hero-gradient rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 animate-morph" style={{ zIndex: -1 }} />
              </div>

              {/* Quote Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-2xl rounded-bl-none shadow-glow-primary max-w-xs animate-tilt"
              >
                <p className="text-sm font-medium">
                  "Building the future, one line of code at a time! 🚀"
                </p>
                <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-primary" />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6, type: "spring", stiffness: 200 }}
                className="text-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:scale-105 hover:bg-card/70 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-card/80 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={28} className={stat.color} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 font-sora group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-inter">
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