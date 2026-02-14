import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Zap, Target } from 'lucide-react';
import aboutImage from '@/assets/about-me.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code,
      label: 'Tech Stack',
      value: 'React, Node.js, PHP, MySQL, MongoDB, TypeScript'
    },
    {
      icon: Zap,
      label: 'Specialty',
      value: 'Full Stack Development & Performance Optimization'
    },
    {
      icon: Target,
      label: 'Focus',
      value: 'Building scalable, user-centric applications'
    }
  ];

  return (
    <section id="about" ref={ref} className="bg-black py-32 px-6 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
            About<br />
            <span className="text-lime">Me</span>
          </h2>
          <div className="w-24 h-1 bg-lime mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xl text-white leading-relaxed">
                I'm a <span className="text-lime font-semibold">Full Stack Developer</span> passionate about creating 
                exceptional digital experiences. With expertise across modern web technologies, I build 
                scalable solutions that solve real problems.
              </p>
              <p className="text-xl text-white leading-relaxed">
                From concept to deployment, I focus on clean code, optimal performance, and intuitive design. 
                Currently based in Lucknow, available for remote opportunities worldwide.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4 pt-8">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="border border-lime/30 rounded-xl p-4 bg-black/50 hover:border-lime/60 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-lime pt-1">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.label}</h3>
                        <p className="text-white text-sm">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-lime rounded-3xl blur-2xl opacity-10 group-hover:opacity-15 transition-opacity duration-500" />
              <div className="relative bg-black border border-lime/30 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                <img
                  src={aboutImage}
                  alt="Kuldeep Prajapati"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
