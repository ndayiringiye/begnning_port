import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO at Company",
    content: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional.",
    avatar: ""
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    content: "The project was delivered on time and exceeded our expectations. Highly recommended for complex web applications.",
    avatar: ""
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "CTO at Startup",
    content: "Technical expertise combined with great communication skills. Will definitely work together again.",
    avatar: ""
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <section id="testimonials" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-secondary dark:text-light mb-12"
        >
          Client <span className="text-primary">Testimonials</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-light dark:bg-secondary/80 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full rounded-full" />
                  ) : (
                    <span className="text-xl">👤</span>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-light">{testimonial.name}</h4>
                  <p className="text-sm text-secondary/70 dark:text-light/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-secondary/80 dark:text-light/80 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;