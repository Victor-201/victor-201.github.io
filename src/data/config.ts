const config = {
    title: "Victor | Full Stack Developer",
    description: {
        long: "Explore the portfolio of Victor (Victor-201), a Full Stack Developer specializing in web applications, AI-powered tools, EV infrastructure systems, and social platforms built with JavaScript, TypeScript, Python, and React.",
        short:
            "Discover the portfolio of Victor, a Full Stack Developer building impactful web apps, AI tools, and scalable platforms.",
    },
    keywords: [
        "Victor",
        "Victor-201",
        "portfolio",
        "full stack developer",
        "web development",
        "JavaScript",
        "TypeScript",
        "Python",
        "React",
        "Node.js",
        "EV charging system",
        "social network",
        "AI tools",
        "Docker",
        "PostgreSQL",
    ],
    author: "Victor",
    email: "victor201@example.com",
    site: "https://victor-201.github.io",

    // for github stars button
    githubUsername: "Victor-201",
    githubRepo: "ev-charging-station-management-system",

    get ogImg() {
        return this.site + "/assets/seo/og-image.png";
    },
    social: {
        twitter: "",
        linkedin: "",
        instagram: "",
        facebook: "",
        github: "https://github.com/Victor-201",
    },
};
export { config };
