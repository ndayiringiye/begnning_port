import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiArrowUpRight, FiGithub } from "react-icons/fi"; 

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl border border-light/10 dark:border-dark-700/20 bg-light dark:bg-dark-800"
    >
      <div className="h-48 bg-gradient-to-br from-dark-900 to-dark-700 flex items-center justify-center">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl text-primary-500/30">{project.emoji || "💻"}</div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-dark-900 dark:text-light">{project.title}</h3>
          {project.category && (
            <span className="text-xs px-2 py-1 bg-primary-500/10 text-primary-500 rounded-full">
              {project.category}
            </span>
          )}
        </div>

        <p className="text-dark-700 dark:text-light/80 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-light/80 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.links?.live}
            className="text-sm font-medium text-primary-500 hover:text-primary-600 flex items-center gap-1 transition-colors"
          >
            Live Demo <FiArrowUpRight size={16} />
          </a>
          <a
            href={project.links?.code}
            className="text-sm font-medium text-dark-700 dark:text-light/80 hover:text-primary-500 flex items-center gap-1 transition-colors"
          >
            View Code <FiGithub size={16} />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <button className="w-full bg-primary-500 hover:bg-primary-600 text-dark-900 py-2 rounded-lg font-medium transition-colors">
          View Case Study
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
