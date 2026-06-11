"use client";

import { motion } from "motion/react";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/locales/use-locale";
import { Button } from "@/components/ui/button";

const MotionButton = motion.create(Button);

interface LocaleToggleProps {
  className?: string;
}

export default function LocaleToggle({ className }: LocaleToggleProps) {
  const { locale, setLocale } = useLocale();
  const isEn = locale === "en";

  return (
    <MotionButton
      variant="ghost"
      whileTap={{ scale: 0.95 }}
      onClick={() => setLocale(isEn ? "vi" : "en")}
      className={cn(
        "flex items-center whitespace-nowrap font-medium h-10 rounded-none! border-none! bg-transparent! p-0! shadow-none gap-0",
        className,
      )}
    >
      <div className="flex items-center justify-center h-full border-2 border-black/30 dark:border-white/30 rounded-l-lg px-2.5 hover:bg-accent hover:text-accent-foreground transition-colors">
        <Languages className="size-4.5 shrink-0 text-muted-foreground" />
      </div>
      <motion.div
        key={locale}
        initial={{ rotateX: 0 }}
        animate={{ rotateX: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex items-center justify-center h-full border-2 border-l-0 border-black/30 dark:border-white/30 rounded-r-lg px-2 hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        <div className="relative w-5.5 h-[1em] overflow-hidden">
          <span className="flex items-center justify-center text-xs font-bold">
            {isEn ? "EN" : "VI"}
          </span>
        </div>
      </motion.div>
    </MotionButton>
  );
}
