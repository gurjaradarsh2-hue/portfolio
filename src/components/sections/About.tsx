import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Profile Picture (Left Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shrink-0 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface glass">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"; // Fallback image
              }}
            />
          </div>
        </motion.div>

        {/* About Text (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center md:text-left">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 leading-relaxed text-center md:text-left">
            B.Tech CSIT student at Acropolis Institute of Technology and Research with a strong interest in Artificial Intelligence, Cloud Computing, and Web Development. Skilled in React, JavaScript, Java, MongoDB, and MySQL, I am passionate about building innovative digital solutions, learning new technologies, and solving real-world challenges through software development.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
