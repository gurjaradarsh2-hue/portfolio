import { motion } from 'framer-motion';
import { Code2, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="w-8 h-8 text-primary" />,
    title: 'Clean Code',
    description: 'Writing scalable, maintainable, and highly efficient code following modern best practices.',
  },
  {
    icon: <Globe className="w-8 h-8 text-secondary" />,
    title: 'Web Technologies',
    description: 'Expertise in modern frontend frameworks and responsive design principles.',
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: 'System Design',
    description: 'Understanding of underlying systems and building architectures that scale.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-64 h-64 md:w-80 md:h-80 shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface glass">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"; // Fallback image
                }}
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              As a B.Tech CSIT student at Acropolis Institute of Technology and Research, I blend theoretical computer science knowledge with practical engineering skills. 
              I am driven by a passion to work in a professional environment where I can use my technical skills and creativity to solve real-world problems.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When I'm not coding, I'm constantly exploring Artificial Intelligence, refining my web development skills, or enjoying my hobbies like drawing and playing chess.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
