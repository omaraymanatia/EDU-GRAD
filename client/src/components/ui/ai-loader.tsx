import { motion } from "framer-motion";

export function AILoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-primary/30 border-t-primary"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute text-primary/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Processing
      </motion.div>
    </div>
  );
}
