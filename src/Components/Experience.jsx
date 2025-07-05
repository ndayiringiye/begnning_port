import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Company",
    duration: "2020 - Present",
    description: "Led a team of developers to build scalable web applications using React, Node.js, and AWS."
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Startup Inc",
    duration: "2018 - 2020",
    description: "Developed and maintained the company's main product with a focus on performance and user experience."
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency",
    duration: "2016 - 2018",
    description: "Created responsive websites and web applications for various clients using modern JavaScript frameworks."
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-light mb-12"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-primary/20 dark:bg-primary/30"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            >
              <div className="md:w-1/2 px-4">
                <div className={`p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} bg-light dark:bg-secondary/80`}>
                  <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-secondary dark:text-light mb-2">{exp.company}</h4>
                  <p className="text-secondary/70 dark:text-light/70 mb-2">{exp.duration}</p>
                  <p className="text-secondary/80 dark:text-light/80">{exp.description}</p>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-primary absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-light dark:bg-secondary"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;