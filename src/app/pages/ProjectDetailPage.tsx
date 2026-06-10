import React from "react";
import { useParams } from "react-router-dom";
import { SEO } from "@/infra/SEO";

function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <SEO title={`${slug} — Case Study`} />
      <div className="container mx-auto px-4 pt-24 text-zinc-300">
        <h1 className="text-4xl mb-8">Project: {slug}</h1>
        <p className="text-zinc-500">Project detail page — coming soon.</p>
      </div>
    </>
  );
}

export default ProjectDetailPage;
