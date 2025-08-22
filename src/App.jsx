import { motion } from "framer-motion";
import DotGrid from "./components/DotGrid";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <DotGrid
          dotSize={2}
          gap={15}
          baseColor="#052659"
          activeColor="#C1E8FF"
          proximity={125}
          shockRadius={160}
          shockStrength={13}
          resistance={1200}
          returnDuration={3.2}
        />
      </div>

      {/* Main Content */}
      <div className="px-[var(--content-padding)] pt-[var(--header-height)]">
        <Header />
        <motion.h1
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.h1>
      </div>
    </div>
  );
}
