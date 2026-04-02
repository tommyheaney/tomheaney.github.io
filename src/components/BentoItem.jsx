import { cn } from "../utils/cn";
import { motion } from "framer-motion";

export const BentoItem = ({ className, children, colSpan = 1, rowSpan = 1, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden",
        colSpan === 2 && "md:col-span-2",
        colSpan === 3 && "md:col-span-3",
        colSpan === 4 && "md:col-span-4",
        rowSpan === 2 && "md:row-span-2",
        "p-6",
        onClick && "cursor-pointer hover:bg-white/[0.05] transition-colors duration-300",
        className
      )}
    >
      {/* Subtle subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      {children}
    </motion.div>
  );
};
