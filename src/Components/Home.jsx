import { motion } from "framer-motion";
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-light leading-tight">
              Hi, I'm <span className="text-primary-500">Alex</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                Full Stack Developer
              </span>
            </h1>
            
            <p className="text-lg text-dark-700 dark:text-light/80 max-w-lg">
              I craft exceptional digital experiences with modern technologies and 
              pixel-perfect attention to detail.
            </p>
            
            <div className="flex gap-4">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 hover:bg-primary-600 text-dark-900 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/20"
              >
                View Projects
              </motion.button>
              
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500/10 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="w-60 h-60 md:w-72 md:h-72 bg-dark-900 rounded-2xl overflow-hidden border-4 border-light dark:border-dark-700">
                {/* Your image or illustration */}
                <div className="w-full h-full bg-dark-800"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary-400/20 blur-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary-600/20 blur-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home