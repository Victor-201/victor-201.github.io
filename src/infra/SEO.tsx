import React from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@/data/config";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export function SEO({
    title = config.title,
    description = config.description.long,
    image = config.ogImg,
    url = config.site,
}: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={config.keywords.join(", ")} />
            <meta name="author" content={config.author} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={config.description.short} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={config.description.short} />
            <meta name="twitter:image" content={image} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
}
