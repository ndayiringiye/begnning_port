import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
    { icon: <FaCodepen />, url: "https://codepen.io/yourusername" }
  ];

  return (
    <footer ref={ref} className="bg-secondary dark:bg-secondary/90 text-light py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">Your Name</h3>
            <p className="text-light/80">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, color: '#FFD700' }}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-light hover:text-primary transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-light/80 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;