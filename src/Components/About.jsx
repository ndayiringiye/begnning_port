import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <section id="about" ref={ref} className="py-20 bg-light/50 dark:bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-light mb-12"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="w-64 h-64 bg-primary rounded-lg flex items-center justify-center">
              {/* Replace with your image */}
              <div className="w-60 h-60 bg-secondary rounded-lg"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-semibold text-secondary dark:text-light mb-4">
              Who am I?
            </h3>
            <p className="text-lg text-secondary/80 dark:text-light/80 mb-6">
              I'm a passionate Full Stack Developer with expertise in building web applications using modern technologies. 
              With a strong foundation in computer science and years of hands-on experience, I create efficient, scalable, 
              and user-friendly solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-secondary dark:text-light"><span className="font-semibold">Name:</span> Your Name</p>
                <p className="text-secondary dark:text-light"><span className="font-semibold">Email:</span> your.email@example.com</p>
              </div>
              <div>
                <p className="text-secondary dark:text-light"><span className="font-semibold">Experience:</span> X+ Years</p>
                <p className="text-secondary dark:text-light"><span className="font-semibold">Location:</span> Your City</p>
              </div>
            </div>
            
            <button className="bg-primary text-secondary px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition">
              Download CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;