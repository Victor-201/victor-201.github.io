import React from "react";
import { SEO } from "@/infra/SEO";
import { SKILLS, getSkillIconUrl } from "@/data/constants";

/** Returns true for hex colors that are perceptually very dark (luminance < 0.08). */
function isDarkColor(hex: string): boolean {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16) / 255;
  const g = parseInt(h.substring(2, 4), 16) / 255;
  const b = parseInt(h.substring(4, 6), 16) / 255;
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.08;
}

function TechStackPage() {
  return (
    <>
      <SEO title="Skills & Technologies — Nguyễn Văn Thắng" />
      <div className="container mx-auto px-4 pt-24 pb-20 text-zinc-300">
        <h1 className="text-4xl mb-8">Skills &amp; Technologies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Object.values(SKILLS).map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center gap-2 p-4 border-[.5px] border-zinc-600 rounded-md"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <img
                src={getSkillIconUrl(skill)}
                alt={skill.label}
                width={50}
                height={50}
                className={[
                  "w-12 h-12 object-contain",
                  isDarkColor(skill.color) ? "dark:invert" : "",
                ]
                  .join(" ")
                  .trim()}
              />
              <span className="text-xs text-zinc-400 text-center">
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechStackPage;
