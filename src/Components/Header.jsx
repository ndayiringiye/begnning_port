import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "react-feather";
import { useTheme } from "./ThemeToggle";
const Header = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Clients", href: "#clients" },
    { name: "Testimonies", href: "#testimonies" },
    { name: "Contact Us", href: "#contact" },
  ];

  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-11/12 mx-auto z-50 "
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold flex items-center text-primary-600 hover:text-primary-500 transition"
        >
          <span className="text-dark-900 dark:text-light mr-1">{"<"}</span>
          <span>David Ndayiringiye</span>
          <span className="text-dark-900 dark:text-light ml-1">{"/>"}</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              whileHover={{ y: -2 }}
              className="text-sm font-medium uppercase tracking-wider text-dark-700 dark:text-light/80 hover:text-primary-500 dark:hover:text-primary-400 transition"
            >
              {link.name}
            </motion.a>
          ))}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-full text-white dark:text-dark-900 htransition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </motion.button>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-dark-700 dark:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-blue-500 shadow-md rounded-b-lg px-6 py-4"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-dark-700 dark:text-light hover:text-primary-500 dark:hover:text-primary-400 transition"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="mt-2 p-2 w-fit rounded-full bg-blue-500 text-white dark:text-dark-900 hover:bg-primary-500 transition self-start"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
