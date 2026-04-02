import { motion } from "framer-motion";
import { BentoGrid } from "./components/BentoGrid";
import { BentoItem } from "./components/BentoItem";
import { Github, Mail, Code2, Terminal, Linkedin, ExternalLink } from "lucide-react";

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 selection:bg-blue-500/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <BentoGrid>
          {/* Main Hero Card */}
          <BentoItem colSpan={2} rowSpan={2} className="justify-center p-10 bg-gradient-to-br from-white/5 to-white/[0.01]">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Thomas</span>.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-400 font-light max-w-md">
              A passionate Software Engineer crafting high-end digital experiences and robust backend systems.
            </motion.p>
          </BentoItem>

          {/* About / Vibe Card */}
          <BentoItem colSpan={1} className="justify-between">
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-neutral-300 mb-4">
              <Terminal size={24} className="text-blue-400" />
              <h2 className="font-medium">Capabilities</h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-sm text-neutral-400">
              Specialized in scalable architecture, pixel-perfect frontend experiences, and elegant API design.
            </motion.p>
          </BentoItem>

          {/* Focus: C# / .NET Experience */}
          <BentoItem 
            colSpan={1}
            onClick={() => window.open("https://github.com/thomas?tab=repositories&q=&type=&language=c%23", "_blank")}
            className="group"
          >
            <motion.div variants={itemVariants} className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 w-fit group-hover:scale-110 transition-transform">
                  <Code2 size={28} />
                </div>
                <ExternalLink size={20} className="text-neutral-500 group-hover:text-neutral-300 transition-colors" />
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-1">C# & .NET Core</h2>
                <p className="text-sm text-neutral-400">Explore my enterprise-grade backend microservices and Windows applications on GitHub.</p>
              </div>
            </motion.div>
          </BentoItem>

          {/* Core Tech Stack */}
          <BentoItem colSpan={2} className="flex flex-col justify-center">
            <motion.h2 variants={itemVariants} className="text-lg font-medium text-neutral-300 mb-6">Preferred Stack</motion.h2>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Tailwind', 'Framer Motion', 'PostgreSQL', '.NET 8', 'Azure'].map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  {tech}
                </span>
              ))}
            </motion.div>
          </BentoItem>

          {/* Currently Building */}
          <BentoItem colSpan={1}>
            <motion.div variants={itemVariants} className="flex flex-col h-full space-y-4">
              <h2 className="text-sm text-emerald-400 font-medium tracking-wider uppercase">Status</h2>
              <div className="flex-1 flex items-center">
                <p className="text-2xl font-light leading-snug">
                  Currently open to new <span className="font-medium text-white">opportunities</span>.
                </p>
              </div>
            </motion.div>
          </BentoItem>

          {/* Contact / Socials */}
          <BentoItem colSpan={1} className="flex flex-col gap-4">
            <motion.a variants={itemVariants} href="mailto:hello@example.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              <Mail className="text-neutral-400" />
              <span className="text-neutral-200 font-medium">Email Me</span>
            </motion.a>
            <motion.a variants={itemVariants} href="https://github.com/thomas" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              <Github className="text-neutral-400" />
              <span className="text-neutral-200 font-medium">GitHub</span>
            </motion.a>
            <motion.a variants={itemVariants} href="https://linkedin.com/in/thomas" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              <Linkedin className="text-neutral-400" />
              <span className="text-neutral-200 font-medium">LinkedIn</span>
            </motion.a>
          </BentoItem>

        </BentoGrid>
      </motion.div>
    </div>
  );
}

export default App;
