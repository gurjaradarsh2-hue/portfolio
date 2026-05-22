import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#'
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app that uses machine learning to prioritize and categorize your daily workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['TypeScript', 'Next.js', 'OpenAI', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Real-time Chat App',
    description: 'End-to-end encrypted messaging application featuring voice messages, file sharing, and group chats.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['React', 'Firebase', 'WebRTC', 'Framer Motion'],
    github: '#',
    demo: '#'
  }
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const images = gsap.utils.toArray('.project-image');
    images.forEach((img: any) => {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section id="projects" className="py-24 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A selection of my recent work, showcasing both frontend aesthetics and backend complexity.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 relative group rounded-2xl overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-[120%] -top-[10%] object-cover absolute transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start text-left' : 'md:items-end md:text-right'}`}>
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <div className="glass p-6 rounded-xl mb-6 relative z-20 w-full md:w-[110%] md:-ml-[5%]">
                    <p className="text-white/80 leading-relaxed text-left">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 mb-8 ${!isEven && 'md:justify-end'}`}>
                    {project.tags.map(tag => (
                      <span key={tag} className="text-primary text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a href={project.github} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.demo} className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
