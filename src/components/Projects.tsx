import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TAB Unscripted",
      description: "A modern platform built with React, Tailwind CSS, Node.js, and MongoDB for creative content management.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      link: "https://tabunscripted.in",
      color: "primary"
    },
    {
      title: "HPBSMDA Portal",
      description: "Government portal for Himachal Pradesh using PHP CodeIgniter and MySQL for seamless administrative operations.",
      tech: ["PHP", "CodeIgniter", "MySQL"],
      link: "https://bsmda.hp.gov.in",
      color: "secondary"
    },
    {
      title: "HP Drug Licensing",
      description: "Drug licensing management system for Himachal Pradesh government with PHP, JavaScript, and SQL integration.",
      tech: ["PHP", "JavaScript", "SQL"],
      link: "https://dcla.hp.gov.in",
      color: "accent"
    },
    {
      title: "TAB Library",
      description: "Educational library management system built with PHP CodeIgniter for efficient book and resource management.",
      tech: ["PHP", "CodeIgniter", "MySQL"],
      link: "https://tablibrary.in",
      color: "primary"
    },
    {
      title: "TAB Educational Institute",
      description: "Complete educational platform with course management, student portal, and administrative features.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "https://theabei.in",
      color: "secondary"
    },
    {
      title: "Dr. Bhatia Surgical Center",
      description: "Medical center website with appointment booking, doctor profiles, and patient management system.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "https://drbhatiasent.com",
      color: "accent"
    },
    {
      title: "The Artist Barefoot",
      description: "Creative agency website with portfolio showcase, project galleries, and client management features.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "https://theartistbarefoot.com",
      color: "primary"
    },
    {
      title: "Tanmay Mukherjee Drum Circle",
      description: "Music artist portfolio built with modern web technologies and deployed on Vercel for optimal performance.",
      tech: ["React", "Vercel", "JavaScript"],
      link: "https://tanmaymukherjee.vercel.app",
      color: "secondary"
    },
    {
      title: "Urblinx Integrated Services",
      description: "Urblinx Integrated Services Pvt. Ltd. is a future-ready company offering Integrated Facility Management, Real Estate Advisory, Workforce Solutions, and Smart Building Services. ",
      tech: ["Codeigniter", "PHP", "EmailJs"],
      link: "urblinx.com",
      color: "accent"
    },
    {
      title: "Quiz Management System",
      description: "Desktop application built with Java Swing for creating, managing, and conducting educational quizzes.",
      tech: ["Java", "Swing", "SQLite"],
      link: "#",
      color: "accent"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-sora">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Showcasing a collection of projects that demonstrate my expertise in full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: project.color === 'primary' ? 'var(--glow-primary)' : 
                          project.color === 'secondary' ? 'var(--glow-secondary)' : 'var(--glow-accent)'
              }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 font-poppins group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full font-medium
                      ${project.color === 'primary' ? 'bg-primary/10 text-primary' : 
                        project.color === 'secondary' ? 'bg-secondary/10 text-secondary' : 
                        'bg-accent/10 text-accent'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-sm font-medium hover:underline transition-colors
                    ${project.color === 'primary' ? 'text-primary' : 
                      project.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}
                >
                  View Project →
                </a>
              ) : (
                <span className="inline-flex items-center text-sm font-medium text-muted-foreground">
                  Desktop Application
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
