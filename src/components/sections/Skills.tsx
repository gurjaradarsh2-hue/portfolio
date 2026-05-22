import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  link?: string;
}

interface SkillGroup {
  category: string;
  items: (string | SkillItem)[];
}

const skills: SkillGroup[] = [
  { 
    category: 'Programming & Core', 
    items: ['C', 'C++', 'OOPS', 'DBMS'] 
  },
  { 
    category: 'Areas of Interest', 
    items: ['Web Development', 'Artificial Intelligence'] 
  },
  { 
    category: 'Cloud & Certifications', 
    items: [
      { name: 'Google Cloud', link: 'https://drive.google.com/file/d/1SXaVCDUqlaNxlrEAKnm0uSEFLlCwGvnC/view?usp=drive_open' },
      { name: 'NPTEL DBMS', link: 'https://drive.google.com/file/d/1XskdcLyKn4fpXrk3DHKopZO54lP0Ak3u/view' }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">{skillGroup.category}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill, index) => {
                  const name = typeof skill === 'string' ? skill : skill.name;
                  const link = typeof skill === 'string' ? undefined : skill.link;

                  if (link) {
                    return (
                      <motion.a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (groupIndex * 0.2) + (index * 0.1) }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary hover:border-primary transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        {name}
                        <span className="text-[10px] opacity-60">↗</span>
                      </motion.a>
                    );
                  }

                  return (
                    <motion.span
                      key={name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (groupIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-primary hover:border-primary transition-colors cursor-default"
                    >
                      {name}
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
