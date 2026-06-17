import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Building, Trophy, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Computer Science and Information Technology (CSIT)',
    institution: 'Acropolis Institute of Technology and Research',
    location: 'Indore, Madhya Pradesh',
    duration: '2023 – 2027',
    description: 'Currently pursuing Bachelor of Technology. Building strong foundations in software development, web technologies, databases, cloud computing, and problem-solving. Actively involved in academic projects and hands-on learning in modern technologies.',
    badges: [
      { text: '6.6 CGPA', icon: <Trophy size={14} />, color: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' }
    ]
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'Bharat Mata Convent Sr. Sec. School',
    location: 'Ganj Basoda, Madhya Pradesh',
    duration: '2021 – 2023',
    description: 'Studied Physics, Chemistry, Mathematics, and Computer Science. Developed analytical thinking and problem-solving skills.',
    badges: [
      { text: '78.2%', icon: <Trophy size={14} />, color: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { text: 'CBSE Board', icon: <BookOpen size={14} />, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' }
    ]
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Bharat Mata Convent Sr. Sec. School',
    location: 'Ganj Basoda, Madhya Pradesh',
    duration: '2020',
    description: 'Built a strong academic foundation across core subjects.',
    badges: [
      { text: '76.8%', icon: <Trophy size={14} />, color: 'bg-green-500/10 text-green-400 border-green-500/20' },
      { text: 'CBSE Board', icon: <BookOpen size={14} />, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' }
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-surface/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-white/60 text-lg">Academic background and qualifications.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-secondary/50 before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Glowing Timeline Marker */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -ml-5 md:ml-0 z-10 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap size={20} />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 glass p-6 md:p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{item.degree}</h3>
                  <span className="flex items-center text-primary text-sm font-medium shrink-0 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <Calendar size={14} className="mr-1.5" />
                    {item.duration}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2 text-white/70 mb-5 text-sm md:text-base">
                  <span className="flex items-center font-medium text-white/90">
                    <Building size={16} className="mr-2 text-primary" />
                    {item.institution}
                  </span>
                  <span className="flex items-center">
                    <MapPin size={16} className="mr-2 text-primary" />
                    {item.location}
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-5">
                  {item.badges.map((badge, i) => (
                    <span key={i} className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}>
                      {badge.icon}
                      {badge.text}
                    </span>
                  ))}
                </div>
                
                <p className="text-white/60 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
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
