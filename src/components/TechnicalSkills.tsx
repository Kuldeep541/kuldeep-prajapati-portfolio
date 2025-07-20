import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Smartphone, 
  Palette,
  Terminal,
  GitBranch,
  Cloud,
  Layers,
  Cpu,
  Monitor
} from 'lucide-react';

const TechnicalSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      skills: [
        { name: "React.js", level: 90, icon: Code },
        { name: "TypeScript", level: 75, icon: Code },
        { name: "JavaScript", level: 90, icon: Code },
        { name: "Tailwind CSS", level: 85, icon: Palette },
        { name: "HTML5/CSS3", level: 95, icon: Globe }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      skills: [
        { name: "Node.js", level: 85, icon: Server },
        { name: "PHP", level: 88, icon: Code },
        { name: "CodeIgniter", level: 80, icon: Layers },
        { name: "RESTful APIs", level: 85, icon: Globe }
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      skills: [
        { name: "MySQL", level: 85, icon: Database },
        { name: "MongoDB", level: 80, icon: Database },
        { name: "Git", level: 88, icon: GitBranch },
        { name: "Linux", level: 75, icon: Terminal }
      ]
    },
    {
      title: "Other Technologies",
      icon: Cpu,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      skills: [
        { name: "Java", level: 70, icon: Code },
        { name: "Swing", level: 65, icon: Smartphone },
        { name: "AWS Basics", level: 60, icon: Cloud },
        { name: "Docker", level: 55, icon: Layers }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sora">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full mb-4" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`${category.bgColor} ${category.borderColor} border backdrop-blur-sm rounded-2xl p-6 hover:scale-105 transition-all duration-300 group`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 ${category.bgColor} rounded-lg border ${category.borderColor}`}>
                  <category.icon size={24} className={category.color} />
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="group/skill"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon size={16} className={`${category.color} transition-all duration-300 group-hover/skill:scale-110`} />
                        <span className="text-foreground font-medium font-inter">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-muted-foreground text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                        className="h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ x: [-100, 100] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-6 flex justify-end">
                <div className={`w-16 h-1 ${category.bgColor} rounded-full`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Technologies", icon: Code },
              { number: "10+", label: "Projects", icon: Layers },
              { number: "1+", label: "Year Experience", icon: Calendar },
              { number: "100%", label: "Dedication", icon: Heart }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-card/50 border border-border rounded-xl hover:bg-card/70 transition-all duration-300 group"
              >
                <stat.icon size={32} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-foreground mb-1 font-sora">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Missing imports for the stats section
import { Calendar, Heart } from 'lucide-react';

export default TechnicalSkills;