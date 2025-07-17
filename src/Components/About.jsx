import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const InfoItem = ({ label, value, isEmail = false, isPhone = false }) => (
  <div className="flex items-start">
    <span className="font-semibold w-24 text-dark-900 dark:text-light">{label}:</span>
    {isEmail ? (
      <a href={`mailto:${value}`} className="text-primary-500 hover:underline">
        {value}
      </a>
    ) : isPhone ? (
      <a href={`tel:${value.replace(/\D/g, '')}`} className="text-primary-500 hover:underline">
        {value}
      </a>
    ) : (
      <span className="text-dark-700 dark:text-light/80">{value}</span>
    )}
  </div>
);

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const experience = 2; 

  return (
    <section id="about" ref={ref} className="py-20 bg-light/50 dark:bg-dark-800/50">
      <div className="container mx-auto px-6 max-w-6xl">

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ y: 50 }}
            animate={inView ? { y: 0 } : { y: 50 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-primary-500">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '80px' } : { width: 0 }}
            className="h-1 bg-primary-500 mx-auto mt-4"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary-500 rounded-xl rotate-6"></div>
              <div className="absolute inset-0 bg-dark-900 dark:bg-dark-700 rounded-xl overflow-hidden border-4 border-light dark:border-dark-600">
                <img

                  src="../../public/images/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-light">
              Professional Profile
            </h3>

            <p className="text-lg mb-6 leading-relaxed text-dark-700 dark:text-light/80">
              I'm a <span className="font-semibold text-primary-500">Full Stack Developer</span> with {experience}+ years
              of experience building scalable web applications. I specialize in modern JavaScript frameworks and
              cloud-native architectures, delivering high-performance solutions that drive business growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <InfoItem label="Name" value="David Ndayiringiye" />
                <InfoItem label="Email" value="david@example.com" isEmail />
                <InfoItem label="Phone" value="+1 (234) 567-890" isPhone />
              </div>
              <div className="space-y-2">
                <InfoItem label="Experience" value={`${experience}+ Years`} />
                <InfoItem label="Location" value="New York, USA" />
                <InfoItem label="Availability" value="Open to work" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Download CV
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
