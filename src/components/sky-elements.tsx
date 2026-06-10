"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
} from "framer-motion";
import { useTheme } from "next-themes";

const getRandomY = () => `${Math.random() * 70 + 10}vh`;
const getRandomScale = () => Math.random() * 0.5 + 0.7;
const getRandomDuration = (isDark: boolean) => isDark
  ? Math.random() * 3 + 1.5
  : Math.random() * 6 + 4;

const ShootingStarSVG = () => (
  <svg viewBox="0 0 240 60" className="h-14 w-auto" fill="none">
    <defs>
      <linearGradient id="tail" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="0" />
        <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.2" />
        <stop offset="75%" stopColor="#fcd34d" stopOpacity="0.5" />
        <stop offset="90%" stopColor="#fef3c7" stopOpacity="0.8" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="soft-glow">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path d="M0 30 L170 30" stroke="url(#tail)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
    <circle cx="180" cy="30" r="8" fill="white" filter="url(#glow)" className="animate-ping duration-1000" />
    <circle cx="180" cy="30" r="5" fill="white" filter="url(#soft-glow)" />
    <circle cx="180" cy="30" r="2.5" fill="#fef3c7" />
    <path d="M180 12 L182 26 L196 28 L182 30 L180 44 L178 30 L164 28 L178 26 Z" fill="white" opacity="0.6" />
    <path d="M196 12 L197 18 L203 19 L197 20 L196 26 L195 20 L189 19 L195 18 Z" fill="white" opacity="0.4" filter="url(#soft-glow)" />
    <path d="M165 8 L166 14 L172 15 L166 16 L165 22 L164 16 L158 15 L164 14 Z" fill="white" opacity="0.35" filter="url(#soft-glow)" />
    <path d="M200 22 L201 26 L205 27 L201 28 L200 32 L199 28 L195 27 L199 26 Z" fill="#fef3c7" opacity="0.5" />
  </svg>
);

const CloudSVG = () => (
  <svg viewBox="0 0 160 100" className="h-20 w-auto" fill="none">
    <ellipse cx="50" cy="65" rx="45" ry="30" fill="white" opacity="0.9" />
    <ellipse cx="85" cy="50" rx="40" ry="28" fill="white" opacity="0.95" />
    <ellipse cx="115" cy="60" rx="35" ry="25" fill="white" opacity="0.85" />
    <ellipse cx="70" cy="70" rx="55" ry="22" fill="white" opacity="0.75" />
  </svg>
);

const SkyElements = () => {
  const { theme } = useTheme();
  const isDark = theme !== "light";
  const [items, setItems] = useState<{ id: string }[]>([]);

  const spawn = () => {
    setItems((prev) => [...prev, { id: (Math.random() * 100000).toFixed() }]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") spawn();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="fixed left-0 top-0 w-screen h-screen overflow-hidden pointer-events-none z-10">
      <AnimatePresence>
        {items.map((item) => (
          <AnimatedItem
            key={item.id}
            isDark={isDark}
            onDone={() => setItems((prev) => prev.filter((d) => d.id !== item.id))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const AnimatedItem = ({
  isDark,
  onDone,
}: {
  isDark: boolean;
  onDone: () => void;
}) => {
  const randY = getRandomY();
  const scale = getRandomScale();
  const controls = useAnimationControls();

  const duration = getRandomDuration(isDark);

  useEffect(() => {
    controls.start({
      x: "110vw",
      transition: { duration, ease: "linear" },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ x: "-20vw", y: randY, scale }}
      animate={controls}
      onAnimationComplete={onDone}
      className="absolute"
    >
      {isDark ? <ShootingStarSVG /> : <CloudSVG />}
    </motion.div>
  );
};

export default SkyElements;
