import React from "react";
import { SEO } from "@/infra/SEO";

function ResumePage() {
  return (
    <>
      <SEO title="Resume & Certifications — Nguyễn Văn Thắng" />
      <div className="container mx-auto px-4 pt-24 pb-20 text-zinc-300">
        <h1 className="text-4xl mb-8">Resume &amp; Certifications</h1>
        <div
          className="p-8 border-[.5px] rounded-md border-zinc-600"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <p className="text-zinc-400 mb-6">
            Download the full resume or view the embedded version below.
          </p>
          <a
            href="https://drive.google.com/file/d/1O97WCk2DrO9x6SHOqf7LvRbmHkMgGIb4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 rounded-md transition-colors"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </>
  );
}

export default ResumePage;
