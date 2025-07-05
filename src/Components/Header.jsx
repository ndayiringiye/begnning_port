// Header.jsx
import { motion } from "framer-motion";
import { Sun, Moon } from "react-feather";
import { useTheme } from "./ThemeToggle"; // ✅ Make sure this path is correct

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const { theme, toggleTheme } = useTheme(); // ✅ useTheme must be defined

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-light/90 dark:bg-dark-900/90 backdrop-blur-sm border-b border-light/10 dark:border-dark-700/20"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition-colors">
          <span className="text-dark-900 dark:text-light">{"<"}</span>
          <span className="text-primary-500">YourName</span>
          <span className="text-dark-900 dark:text-light">{"/>"}</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-dark-700 dark:text-light/80 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-dark-900 dark:bg-light text-light dark:text-dark-900 hover:bg-primary-500 hover:text-dark-900 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; // ✅ Ensure this line is present and at the bottom
