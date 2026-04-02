import { cn } from "../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto p-4 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
};
