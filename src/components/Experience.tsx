import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "The Artist Barefoot Pvt. Ltd.",
      period: "2024 - Present",
      description: "Leading full-stack development projects using React, Node.js, PHP, and MySQL. Built scalable web applications including government portals, educational platforms, and business websites.",
      achievements: [
        "Developed 8+ production applications",
        "Managed end-to-end project delivery",
        "Collaborated with cross-functional teams",
        "Implemented modern UI/UX designs"
      ],
      color: "primary"
    },
    {
      title: "Full Stack Developer",
      company: "I.T. Academics Pvt. Ltd.",
      period: "Oct 2024 - Nov 2024",
      description: "Worked on educational technology solutions, developing learning management systems and student portals with modern web technologies.",
      achievements: [
        "Built learning management systems",
        "Integrated payment gateways",
        "Optimized database performance",
        "Maintained legacy codebases"
      ],
      color: "secondary"
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Bansal Institute of Engineering & Technology",
      period: "2018 - 2022",
      grade: "7.7 CGPA",
      color: "accent"
    },
    {
      degree: "Intermediate (XII)",
      institution: "S.B.N. Inter College",
      period: "2017 - 2018",
      grade: "73%",
      color: "primary"
    },
    {
      degree: "High School (X)",
      institution: "S.B.N. Inter College",
      period: "2015 - 2016",
      grade: "78%",
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sora">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 font-poppins">
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground font-poppins">
                        {exp.title}
                      </h4>
                      <p className={`text-lg font-medium ${
                        exp.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      exp.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          exp.color === 'primary' ? 'bg-primary' : 'bg-secondary'
                        }`} />
                        <span className="text-sm text-muted-foreground font-inter">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8 font-poppins">
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-foreground font-poppins">
                        {edu.degree}
                      </h4>
                      <p className={`text-md font-medium ${
                        edu.color === 'accent' ? 'text-accent' : 
                        edu.color === 'primary' ? 'text-primary' : 'text-secondary'
                      }`}>
                        {edu.institution}
                      </p>
                      <p className="text-sm text-muted-foreground font-inter">{edu.period}</p>
                    </div>
                    <div className={`text-lg font-bold ${
                      edu.color === 'accent' ? 'text-accent' : 
                      edu.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`}>
                      {edu.grade}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;