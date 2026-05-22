import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Information Technology',
    institution: 'University Name',
    location: 'City, State',
    duration: '2023 - 2027',
    description: 'Specializing in software engineering and web technologies. Core coursework includes Data Structures, Algorithms, Database Management, and Cloud Computing.',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'School Name',
    location: 'City, State',
    duration: '2021 - 2023',
    description: 'Completed with a focus on Mathematics, Physics, and Computer Science.',
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-surface/30">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-white/60 text-lg">Academic background and qualifications.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -ml-5 md:ml-0">
                <GraduationCap size={20} />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 glass p-6 md:p-8 rounded-2xl hover:border-primary/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="flex items-center text-primary text-sm font-medium shrink-0">
                    <Calendar size={14} className="mr-1.5" />
                    {item.duration}
                  </span>
                </div>
                
                <div className="flex items-center text-white/60 mb-4 gap-4 text-sm">
                  <span className="font-medium">{item.institution}</span>
                  <span className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {item.location}
                  </span>
                </div>
                
                <p className="text-white/70 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
