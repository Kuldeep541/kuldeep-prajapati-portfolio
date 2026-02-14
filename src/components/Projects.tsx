import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

<<<<<<< HEAD
  const projects = [
    {
      title: "TAB Unscripted",
      description: "Modern content management platform for creative collaboration and distribution.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind"],
      link: "https://tabunscripted.in"
    },
    {
      title: "HPBSMDA Portal",
      description: "Government administration portal serving Himachal Pradesh with seamless workflows.",
      tech: ["PHP", "CodeIgniter", "MySQL"],
      link: "https://bsmda.hp.gov.in"
    },
    {
      title: "HP Drug Licensing",
      description: "Licensing management system for pharmaceutical compliance and tracking.",
      tech: ["PHP", "JavaScript", "SQL"],
      link: "https://dcla.hp.gov.in"
    },
    {
      title: "TAB Library",
      description: "Educational resource management system with catalog and lending features.",
      tech: ["PHP", "CodeIgniter", "MySQL"],
      link: "https://tablibrary.in"
    },
    {
      title: "TAB Educational Institute",
      description: "Complete learning management system for course delivery and student tracking.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "https://theabei.in"
    },
    {
      title: "Dr. Bhatia Surgical Center",
      description: "Medical center website with appointment booking and patient management.",
      tech: ["PHP", "MySQL", "JavaScript"],
      link: "https://drbhatiasent.com"
    }
  ];
=======
const projects = [
  {
    title: "HPBSMDA Portal",
    description: "Government portal for Himachal Pradesh using PHP CodeIgniter and MySQL for seamless administrative operations.",
    tech: ["PHP", "CodeIgniter", "MySQL"],
    link: "https://bsmda.hp.gov.in",
    color: "secondary"
  },
  {
    title: "Dr. Bhatia Surgical Center",
    description: "Medical center website with appointment booking, doctor profiles, and patient management system.",
    tech: ["React", "EmailJs", "JavaScript"],
    link: "https://drbhatiaent.com",
    color: "accent"
  },
  {
    title: "HP Drug Licensing",
    description: "Drug licensing management system for Himachal Pradesh government with PHP, JavaScript, and SQL integration.",
    tech: ["PHP", "JavaScript", "SQL"],
    link: "https://dcla.hp.gov.in",
    color: "accent"
  },
  {
    title: "Tanmay Mukherjee Drum Circle",
    description: "Music artist portfolio built with modern web technologies and deployed on Vercel for optimal performance.",
    tech: ["React", "Vercel", "JavaScript"],
    link: "https://tanmaydrumcircle.in/",
    color: "secondary"
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
    title: "Checkin Portal",
    description: "Employee check-in and attendance management system built for The Artist Barefoot, featuring real-time tracking and secure data handling.",
    tech: ["PHP", "Core PHP", "MySQL"],
    link: "https://checkin.theartistbarefoot.com",
    color: "primary"
  },
  {
    title: "The Artist Barefoot",
    description: "Creative agency website with portfolio showcase, project galleries, and client management features.",
    tech: ["React Js", "MySQL", "JavaScript"],
    link: "https://theartistbarefoot.com",
    color: "primary"
  },
  {
    title: "Urblinx Integrated Services",
    description: "Urblinx Integrated Services Pvt. Ltd. is a future-ready company offering Integrated Facility Management, Real Estate Advisory, Workforce Solutions, and Smart Building Services.",
    tech: ["Codeigniter", "PHP", "EmailJs"],
    link: "https://urblinx.com",
    color: "accent"
  },
  {
    title: "Quiz Management System",
    description: "Desktop application built with Java Swing for creating, managing, and conducting educational quizzes.",
    tech: ["Java", "Swing", "SQLite"],
    link: "#",
    color: "accent"
  },
  {
    title: "TAB Unscripted",
    description: "A modern platform built with React, Tailwind CSS, Node.js, and MongoDB for creative content management.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    link: "https://tabunscripted.in",
    color: "primary"
  },
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
>>>>>>> c755b991332f5cd0bc9f2f771b4beaafcf2521e2

  return (
    <section id="projects" ref={ref} className="bg-black py-32 px-6 sm:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-white">
            Featured<br />
            <span className="text-lime">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-lime mt-6 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group border border-lime/30 rounded-2xl p-8 bg-black hover:border-lime/60 hover:shadow-[0_0_20px_rgba(198,255,52,0.4)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-lime transition-colors duration-300">
                  {project.title}
                </h3>
                <ArrowUpRight className="text-lime flex-shrink-0 group-hover:scale-125 transition-transform duration-300" size={28} />
              </div>

              <p className="text-white mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-lime/10 text-lime text-sm font-semibold rounded-lg border border-lime/30">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
