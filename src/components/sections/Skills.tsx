import { motion } from 'framer-motion';
import { SiCplusplus, SiJavascript, SiReact, SiMongodb, SiMysql, SiGooglecloud } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Brain, Cloud, BarChart, Lightbulb, Database } from 'lucide-react';
import type { ReactNode } from 'react';

interface SkillItem {
  name: string;
  icon: ReactNode;
  link?: string;
  color?: string;
}

interface SkillGroup {
  category: string;
  items: SkillItem[];
}

const skills: SkillGroup[] = [
  { 
    category: 'Programming & Core', 
    items: [
      { name: 'C', icon: <span className="font-bold text-lg">C</span>, color: 'text-blue-500' },
      { name: 'C++', icon: <SiCplusplus size={20} />, color: 'text-blue-600' },
      { name: 'Java', icon: <FaJava size={20} />, color: 'text-orange-500' },
      { name: 'JavaScript', icon: <SiJavascript size={20} />, color: 'text-yellow-400' },
      { name: 'React', icon: <SiReact size={20} />, color: 'text-cyan-400' },
      { name: 'MongoDB', icon: <SiMongodb size={20} />, color: 'text-green-500' },
      { name: 'MySQL', icon: <SiMysql size={20} />, color: 'text-blue-400' }
    ] 
  },
  { 
    category: 'Areas of Interest', 
    items: [
      { name: 'Artificial Intelligence', icon: <Brain size={20} />, color: 'text-purple-400' },
      { name: 'Cloud Computing', icon: <Cloud size={20} />, color: 'text-sky-400' },
      { name: 'Machine Learning', icon: <Lightbulb size={20} />, color: 'text-yellow-500' },
      { name: 'Data Analytics', icon: <BarChart size={20} />, color: 'text-emerald-400' }
    ] 
  },
  { 
    category: 'Cloud & Certifications', 
    items: [
      { name: 'Google Cloud', icon: <SiGooglecloud size={20} />, color: 'text-blue-400', link: 'https://drive.google.com/file/d/1SXaVCDUqlaNxlrEAKnm0uSEFLlCwGvnC/view?usp=drive_open' },
      { name: 'NPTEL DBMS', icon: <Database size={20} />, color: 'text-indigo-400', link: 'https://drive.google.com/file/d/1XskdcLyKn4fpXrk3DHKopZO54lP0Ak3u/view' }
    ] 
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-white/60 text-lg">Technologies I work with to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-primary/10 border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10 text-center">{skillGroup.category}</h3>
              
              <div className="flex flex-wrap gap-4 relative z-10 justify-center">
                {skillGroup.items.map((skill, index) => {
                  const content = (
                    <>
                      <span className={`${skill.color} transition-colors duration-300`}>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </>
                  );

                  const commonClasses = "px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium transition-all duration-300 flex items-center gap-2.5 hover:bg-white/10 hover:border-white/20 shadow-sm";

                  if (skill.link) {
                    return (
                      <motion.a
                        key={skill.name}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (groupIndex * 0.2) + (index * 0.1) }}
                        whileHover={{ scale: 1.05 }}
                        className={`${commonClasses} hover:shadow-primary/20 hover:text-white cursor-pointer`}
                      >
                        {content}
                        <span className="text-[10px] opacity-60 ml-1">↗</span>
                      </motion.a>
                    );
                  }

                  return (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (groupIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`${commonClasses} cursor-default`}
                    >
                      {content}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
