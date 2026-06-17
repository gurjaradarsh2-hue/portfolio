import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SiReact, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiPython, SiPandas, SiNumpy, SiScikitlearn, SiStreamlit } from 'react-icons/si';
import { Brain } from 'lucide-react';

const projects = [
  {
    title: 'RainScope – Rooftop Rainwater Harvesting Assessment & Recharge Platform',
    category: 'Full Stack Project',
    categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description: 'RainScope is a web-based platform designed to assess rooftop rainwater harvesting potential and artificial groundwater recharge opportunities. The application calculates harvestable rainwater based on roof area, location, and rainfall data, while providing recommendations for sustainable water conservation and recharge structures. It helps users make informed decisions about water management through an intuitive and responsive interface.',
    tags: [
      { name: 'React', icon: <SiReact size={16} /> },
      { name: 'JavaScript', icon: <SiJavascript size={16} /> },
      { name: 'Node.js', icon: <SiNodedotjs size={16} /> },
      { name: 'Express.js', icon: <SiExpress size={16} /> },
      { name: 'MongoDB', icon: <SiMongodb size={16} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={16} /> }
    ],
    github: '',
    demo: 'https://rain-scope-gold.vercel.app/home',
    status: 'Completed'
  },
  {
    title: 'Student Marks Prediction System',
    category: 'Machine Learning',
    categoryColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: 'A Machine Learning application that predicts student academic performance based on various educational and behavioral factors. The model analyzes input parameters and provides estimated marks, helping educators and students understand performance trends and areas for improvement.',
    tags: [
      { name: 'Python', icon: <SiPython size={16} /> },
      { name: 'Pandas', icon: <SiPandas size={16} /> },
      { name: 'NumPy', icon: <SiNumpy size={16} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={16} /> },
      { name: 'Streamlit', icon: <SiStreamlit size={16} /> }
    ],
    github: '',
    demo: 'https://marks-prediction-halo7qzyxt5fmxfzhpikfy.streamlit.app/',
    status: 'Completed'
  },
  {
    title: 'Student Exam Success Prediction',
    category: 'AI/ML',
    categoryColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    description: 'An AI-powered predictive analytics application that estimates the probability of student success in examinations based on study habits, attendance, preparation levels, and other relevant factors. The project demonstrates practical machine learning techniques for educational decision support.',
    tags: [
      { name: 'Python', icon: <SiPython size={16} /> },
      { name: 'Pandas', icon: <SiPandas size={16} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn size={16} /> },
      { name: 'Streamlit', icon: <SiStreamlit size={16} /> },
      { name: 'Machine Learning', icon: <Brain size={16} /> }
    ],
    github: '',
    demo: 'https://student-stress-6r3dqufwrpfxqmskwavthg.streamlit.app/',
    status: 'Completed'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Selected projects showcasing my expertise in Full-Stack Development, Artificial Intelligence, Machine Learning, and modern software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl md:rounded-3xl relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary/20 border border-white/5"
            >
              {/* Subtle Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
                <span className={`px-4 py-1.5 rounded-full text-xs font-semibold border ${project.categoryColor} backdrop-blur-sm`}>
                  {project.category}
                </span>
                <span className="flex items-center gap-1.5 text-green-400 text-xs font-medium px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20">
                  <CheckCircle2 size={14} />
                  {project.status}
                </span>
              </div>

              {/* Title & Description */}
              <div className="relative z-10 flex-grow mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-[15px] lg:text-base line-clamp-4">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div className="relative z-10 mb-8">
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map(tag => (
                    <span 
                      key={tag.name} 
                      className="text-white/80 bg-white/5 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/10 flex items-center gap-2 hover:bg-primary/20 hover:border-primary/40 hover:text-white transition-colors"
                      title={tag.name}
                    >
                      {tag.icon}
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/10">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 transition-all font-medium text-sm text-white/90"
                  >
                    <FaGithub size={18} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-primary/20 hover:bg-primary/30 px-4 py-2.5 rounded-xl border border-primary/30 hover:border-primary/50 transition-all font-medium text-sm text-white"
                  >
                    <ExternalLink size={18} />
                    <span>Visit Project</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
