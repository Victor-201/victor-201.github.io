"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { config } from "@/lib/app-config";
import { useLocale } from "@/locales/use-locale";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export function SEO({
    title: _title,
    description: _description,
    image = config.ogImg,
    url = config.site,
}: SEOProps) {
    const { t } = useLocale();
    const title = _title ?? t("seo", "title");
    const description = _description ?? t("seo", "description.long");

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={t("seo", "keywords").join(", ")} />
            <meta name="author" content={t("seo", "author")} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={t("seo", "description.short")} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={t("seo", "description.short")} />
            <meta name="twitter:image" content={image} />

            {/* Robots */}
            <meta name="robots" content="index, follow" />
        </Helmet>
    );
}
