import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Vue.js.",
    icon: "💻"
  },
  {
    title: "Backend Development",
    description: "Scalable server-side solutions using Node.js, Express, Django, or Ruby on Rails.",
    icon: "⚙️"
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native or Flutter for iOS and Android.",
    icon: "📱"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience in mind.",
    icon: "🎨"
  },
  {
    title: "DevOps",
    description: "CI/CD pipelines, cloud infrastructure, and deployment automation.",
    icon: "🚀"
  },
  {
    title: "Consulting",
    description: "Technical guidance and architecture design for your projects.",
    icon: "🧠"
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="services" ref={ref} className="py-20 bg-light/50 dark:bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-light mb-4"
        >
          My <span className="text-primary">Services</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-center text-secondary/80 dark:text-light/80 mb-12 max-w-2xl mx-auto"
        >
          I offer a wide range of services to help bring your digital ideas to life.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-light dark:bg-secondary/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-secondary dark:text-light mb-2">{service.title}</h3>
              <p className="text-secondary/80 dark:text-light/80">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;