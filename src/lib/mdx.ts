// MDX utilities (placeholder - mdx.ts uses Node fs which is server-side only)
// In Vite, MDX content would be bundled via vite-plugin-mdx.
// This file is kept as a placeholder for type compatibility.

export type BlogMetadata = {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    author?: string;
    tags?: string[];
};

export type BlogPost = {
    metadata: BlogMetadata;
    slug: string;
    content: string;
};

// Posts would be imported statically in Vite:
export function getBlogPosts(): BlogPost[] {
    return [];
}

export function getBlogPost(_slug: string): BlogPost | undefined {
    return undefined;
}
