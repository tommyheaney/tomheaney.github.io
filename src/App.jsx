import { motion } from "framer-motion";
import { BentoGrid } from "./components/BentoGrid";
import { BentoItem } from "./components/BentoItem";
import { Mail, Code2, Terminal, ExternalLink, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <div className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-4 selection:bg-blue-500/30 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <BentoGrid className="grid-cols-1 md:grid-cols-4">
          
          {/* Main Hero Card */}
          <BentoItem colSpan={2} rowSpan={2} className="justify-center p-10 bg-gradient-to-br from-white/5 to-white/[0.01]">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Thomas Heaney</span>.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-400 font-light max-w-md">
              Senior Shopify Developer & Technical E-Commerce Manager.
            </motion.p>
          </BentoItem>

          {/* Capabilities Card */}
          <BentoItem colSpan={2} className="justify-between">
            <motion.div variants={itemVariants} className="flex items-center gap-3 text-neutral-300 mb-4">
              <Terminal size={24} className="text-blue-400" />
              <h2 className="font-medium">Capabilities</h2>
            </motion.div>
            <motion.p variants={itemVariants} className="text-sm text-neutral-400">
              Engineering bespoke Shopify/Liquid solutions, refactoring themes for UX, and technical migration architecture.
            </motion.p>
          </BentoItem>

          {/* Core Tech Stack */}
          <BentoItem colSpan={2} className="flex flex-col justify-center">
            <motion.h2 variants={itemVariants} className="text-lg font-medium text-neutral-300 mb-4">Preferred Stack</motion.h2>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Shopify Liquid', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Node.js', '.NET Core'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-neutral-300">
                  {tech}
                </span>
              ))}
            </motion.div>
          </BentoItem>

          {/* Professional Highlights */}
          <BentoItem colSpan={2} rowSpan={2}>
            <motion.div variants={itemVariants} className="h-full flex flex-col gap-6">
              <div className="flex items-center gap-3 text-neutral-300">
                <Briefcase size={22} className="text-emerald-400" />
                <h2 className="font-medium">Professional Highlights</h2>
              </div>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0 mt-0.5"><TrendingUp size={16} className="text-emerald-400"/></div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-200">E-Commerce Scale</h3>
                    <p className="text-xs text-neutral-400 mt-1">Scaled revenue for Aquabliss from £80k to £4M.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0 mt-0.5"><TrendingUp size={16} className="text-emerald-400"/></div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-200">Growth Expert</h3>
                    <p className="text-xs text-neutral-400 mt-1">Doubled annual turnover for Lucy Pittaway Ltd from £500k to £1M in 12 months.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-blue-500/10 rounded-lg shrink-0 mt-0.5"><Briefcase size={16} className="text-blue-400"/></div>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-200">Current Role</h3>
                    <p className="text-xs text-neutral-400 mt-1">Technical & E-Commerce Manager at Leader Online & Nôsa Bathrooms (Oct 2024 - Present).</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </BentoItem>

          {/* Education Card */}
          <BentoItem colSpan={1} rowSpan={2}>
             <motion.div variants={itemVariants} className="h-full flex flex-col gap-6">
              <div className="flex items-center gap-3 text-neutral-300">
                <GraduationCap size={22} className="text-purple-400" />
                <h2 className="font-medium">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-neutral-200">BSc (Hons) Computing & IT</h3>
                  <p className="text-xs text-neutral-400 mt-1">The Open University (In Progress)</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-200">Certifications</h3>
                  <p className="text-xs text-neutral-400 mt-1">Google Ads & Analytics Certified (2025)</p>
                </div>
              </div>
            </motion.div>
          </BentoItem>

          {/* Focus: C# / .NET Experience */}
          <BentoItem 
            colSpan={1}
            onClick={() => window.open("https://github.com/tommyheaney", "_blank")}
            className="group justify-center"
          >
            <motion.div variants={itemVariants} className="flex flex-col justify-between items-center text-center">
              <div className="flex items-center gap-3 mb-4">
                 <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 w-fit group-hover:scale-110 transition-transform">
                   <Code2 size={24} />
                 </div>
              </div>
              <div>
                <h2 className="text-sm font-bold mb-1 text-neutral-200">C# & .NET Core</h2>
                <p className="text-xs text-neutral-400 flex items-center justify-center gap-2 group-hover:text-neutral-300 transition-colors">
                  View repos <ExternalLink size={12}/>
                </p>
              </div>
            </motion.div>
          </BentoItem>

          {/* Currently Building / Status */}
          <BentoItem colSpan={1} className="justify-center">
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-3">
              <h2 className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">Status</h2>
              <p className="text-base font-medium leading-snug text-white">
                Open to new opportunities
              </p>
            </motion.div>
          </BentoItem>

          {/* Contact / Socials */}
          <BentoItem colSpan={4} className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 p-8">
            <motion.a variants={itemVariants} href="mailto:thomas_heaney@hotmail.com" className="flex items-center gap-3 hover:text-white transition-colors text-neutral-400">
              <Mail size={20} />
              <span className="font-medium text-sm">thomas_heaney@hotmail.com</span>
            </motion.a>
            <motion.a variants={itemVariants} href="https://github.com/tommyheaney" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors text-neutral-400">
              <FaGithub className="text-xl" />
              <span className="font-medium text-sm">GitHub</span>
            </motion.a>
            <motion.a variants={itemVariants} href="https://www.linkedin.com/in/tommy-heaney-369814136/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors text-neutral-400">
              <FaLinkedin className="text-xl" />
              <span className="font-medium text-sm">LinkedIn</span>
            </motion.a>
          </BentoItem>

        </BentoGrid>
      </motion.div>
    </div>
  );
}

export default App;
