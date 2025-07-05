import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Python", level: 70 },
  { name: "HTML/CSS", level: 95 },
  { name: "Tailwind CSS", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 70 },
  { name: "AWS", level: 65 },
  { name: "Docker", level: 60 },
  { name: "Git", level: 85 }
];

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-light mb-12"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-secondary dark:text-light mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-secondary dark:text-light">{skill.name}</span>
                    <span className="text-secondary/70 dark:text-light/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="bg-primary h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-secondary dark:text-light mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Communication", icon: "🗣️" },
                { name: "Teamwork", icon: "👥" },
                { name: "Problem Solving", icon: "🧩" },
                { name: "Creativity", icon: "🎨" },
                { name: "Project Management", icon: "📊" },
                { name: "Leadership", icon: "🌟" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-light dark:bg-secondary/80 p-4 rounded-lg shadow-md flex flex-col items-center"
                >
                  <span className="text-3xl mb-2">{skill.icon}</span>
                  <span className="text-secondary dark:text-light text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;