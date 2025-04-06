import { motion } from "framer-motion";

export default function IslandWithArrow() {
  return (
    <div className="relative h-screen bg-blue-100 flex items-end justify-center overflow-hidden">
      {/* Curly arrow between tasks */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-32 z-20"
      >
        <svg
          width="40"
          height="80"
          viewBox="0 0 40 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curvy path for arrow */}
          <path
            d="M20 80 C 10 50, 30 30, 20 10" // Curved line
            stroke="black"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M20 10 L 20 0" // Straight line to finish the arrow
            stroke="black"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Island */}
      <div
        className="w-24 h-24 rounded-full mb-8 z-10"
        style={{ backgroundColor: "#e6007e" }} // Bold magenta
      />
    </div>
  );
}
