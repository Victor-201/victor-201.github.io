// thoda zada ts ho gya idhar
export enum SkillNames {
    JS = "js",
    TS = "ts",
    HTML = "html",
    CSS = "css",
    REACT = "react",
    VUE = "vue",
    NEXTJS = "nextjs",
    TAILWIND = "tailwind",
    NODEJS = "nodejs",
    EXPRESS = "express",
    POSTGRES = "postgres",
    MONGODB = "mongodb",
    GIT = "git",
    GITHUB = "github",
    PRETTIER = "prettier",
    NPM = "npm",
    FIREBASE = "firebase",
    WORDPRESS = "wordpress",
    LINUX = "linux",
    DOCKER = "docker",
    NGINX = "nginx",
    AWS = "aws",
    VIM = "vim",
    VERCEL = "vercel",
}
export type Skill = {
    id: number;
    name: string;
    label: string;
    shortDescription: string;
    color: string;
    icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
    [SkillNames.JS]: {
        id: 1,
        name: "js",
        label: "JavaScript",
        shortDescription: "yeeting code into the DOM since '95, no cap!",
        color: "#F7DF1E",
        icon: "javascript",
    },
    [SkillNames.TS]: {
        id: 2,
        name: "ts",
        label: "TypeScript",
        shortDescription:
            "JavaScript's overachieving cousin who's always flexing",
        color: "#3178C6",
        icon: "typescript",
    },
    [SkillNames.HTML]: {
        id: 3,
        name: "html",
        label: "HTML",
        shortDescription: "the internet's granddad,  still bussin' fr fr!",
        color: "#E34F26",
        icon: "html5",
    },
    [SkillNames.CSS]: {
        id: 4,
        name: "css",
        label: "CSS",
        shortDescription: "styling with the ultimate drip, no cap",
        color: "#1572B6",
        icon: "css3",
    },
    [SkillNames.REACT]: {
        id: 5,
        name: "react",
        label: "React",
        shortDescription: `"use using" 
using use = useUsing("use")`,
        color: "#61DAFB",
        icon: "react",
    },
    [SkillNames.VUE]: {
        id: 6,
        name: "vue",
        label: "Vue",
        shortDescription:
            "the chill pill for your frontend, it hits different!",
        color: "#4FC08D",
        icon: "vuedotjs",
    },
    [SkillNames.NEXTJS]: {
        id: 7,
        name: "nextjs",
        label: "Next.js",
        shortDescription:
            "the drama queen of front-end frameworks, and we stan!",
        color: "#ffffffff",
        icon: "nextdotjs",
    },
    [SkillNames.TAILWIND]: {
        id: 8,
        name: "tailwind",
        label: "Tailwind",
        shortDescription: "utility classes hitting different fr fr",
        color: "#06B6D4",
        icon: "tailwindcss",
    },
    [SkillNames.NODEJS]: {
        id: 9,
        name: "nodejs",
        label: "Node.js",
        shortDescription: "JavaScript said 'sike, I'm backend now', deadass!",
        color: "#5FA04E",
        icon: "nodedotjs",
    },
    [SkillNames.EXPRESS]: {
        id: 10,
        name: "express",
        label: "Express",
        shortDescription: "middlewares go dummy hard, no cap!",
        color: "#666874ff",
        icon: "express",
    },
    [SkillNames.POSTGRES]: {
        id: 11,
        name: "postgres",
        label: "PostgreSQL",
        shortDescription: "SQL but make it fashion, purr",
        color: "#4169E1",
        icon: "postgresql",
    },
    [SkillNames.MONGODB]: {
        id: 12,
        name: "mongodb",
        label: "MongoDB",
        shortDescription: "flexin' with that NoSQL drip, respectfully!",
        color: "#47A248",
        icon: "mongodb",
    },
    [SkillNames.GIT]: {
        id: 13,
        name: "git",
        label: "Git",
        shortDescription: "the code's personal bodyguard, no cap!",
        color: "#F05032",
        icon: "git",
    },
    [SkillNames.GITHUB]: {
        id: 14,
        name: "github",
        label: "GitHub",
        shortDescription: "sliding into those pull requests, IYKYK!",
        color: "#666874ff",
        icon: "github",
    },
    [SkillNames.PRETTIER]: {
        id: 15,
        name: "prettier",
        label: "Prettier",
        shortDescription: "making your code not a whole mess, thank u next",
        color: "#F7B93E",
        icon: "prettier",
    },
    [SkillNames.NPM]: {
        id: 16,
        name: "npm",
        label: "NPM",
        shortDescription: "package manager said 'I gotchu fam', period!",
        color: "#CB3837",
        icon: "npm",
    },
    [SkillNames.FIREBASE]: {
        id: 17,
        name: "firebase",
        label: "Firebase",
        shortDescription:
            "your app's ultimate wingman, but watch out, vendor lock-in vibes!",
        color: "#FFCA28",
        icon: "firebase",
    },
    [SkillNames.WORDPRESS]: {
        id: 18,
        name: "wordpress",
        label: "WordPress",
        shortDescription: "the grandpa of CMS, still rocking that cane",
        color: "#21759B",
        icon: "wordpress",
    },
    [SkillNames.LINUX]: {
        id: 19,
        name: "linux",
        label: "Linux",
        shortDescription: "where 'chmod 777' is the ultimate flex",
        color: "#FCC624",
        icon: "linux",
    },
    [SkillNames.DOCKER]: {
        id: 20,
        name: "docker",
        label: "Docker",
        shortDescription: "The best containerization!",
        color: "#2496ED",
        icon: "docker",
    },
    [SkillNames.NGINX]: {
        id: 21,
        name: "nginx",
        label: "NginX",
        shortDescription: "reverse proxy go zoom zoom, sheesh!",
        color: "#009639",
        icon: "nginx",
    },
    [SkillNames.AWS]: {
        id: 22,
        name: "aws",
        label: "AWS",
        shortDescription:
            "always extra, making everything more complicated, period!",
        color: "#FF9900",
        icon: "amazonwebservices",
    },
    [SkillNames.VIM]: {
        id: 23,
        name: "vim",
        label: "Vim",
        shortDescription: "exit? In this economy? Ight, imma head out!",
        color: "#019733",
        icon: "vim",
    },
    [SkillNames.VERCEL]: {
        id: 24,
        name: "vercel",
        label: "Vercel",
        shortDescription: "The triangle compony, helps you deploy and go touch grass!",
        color: "#000000",
        icon: "vercel",
    },
};

/**
 * Builds the simpleicons CDN URL for a skill, injecting its brand color.
 * Format: https://cdn.simpleicons.org/{slug}/{hexWithoutHash}
 */
export function getSkillIconUrl(skill: Pick<Skill, "icon" | "color">): string {
    return `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace("#", "")}`;
}
export type Experience = {
    id: number;
    startDate: string;
    endDate: string;
    title: string;
    company: string;
    description: string[];
    skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
    {
        id: 1,
        startDate: "Sep 2024",
        endDate: "Present",
        title: "Full Stack Engineer",
        company: "Software Development Projects",
        description: [
            "Architected an EV Charging Station Management System using a microservices pattern with Kong API Gateway, RabbitMQ, Docker, and Postgres.",
            "Developed StudyHub, a comprehensive social learning platform that supports real-time chat, study groups, and resource sharing.",
            "Created an Accounts Receivable Management System (ARMS) implementing Clean Architecture to digitize the SME debt tracking process.",
        ],
        skills: [
            SkillNames.JS,
            SkillNames.TS,
            SkillNames.NODEJS,
            SkillNames.EXPRESS,
            SkillNames.POSTGRES,
            SkillNames.DOCKER,
            SkillNames.REACT,
            SkillNames.TAILWIND,
            SkillNames.GIT,
            SkillNames.GITHUB,
        ],
    },
    {
        id: 2,
        startDate: "Jan 2024",
        endDate: "Sep 2024",
        title: "Software Engineer",
        company: "Research & Academic Projects",
        description: [
            "Led development of a scalable social network application leveraging React, Node.js, and MongoDB for real-time user engagement.",
            "Engineered an intelligent Driver Drowsiness Alert System using AI and Computer Vision to monitor real-time fatigue and prevent accidents.",
            "Built a full-stack AI-powered video translator capable of automatic speech recognition and Vietnamese audio script synthesis.",
        ],
        skills: [
            SkillNames.JS,
            SkillNames.REACT,
            SkillNames.NODEJS,
            SkillNames.MONGODB,
            SkillNames.GIT,
            SkillNames.GITHUB,
        ],
    },
];

export const themeDisclaimers = {
    light: [
        "FLASHBANG OUT! I wasn't emotionally or physically prepared for that much brightness.",
        "You switched to light mode? That's cool and all, but my retinas just submitted their resignation.",
        "POV: You looked directly at the sun and thought, 'Yeah, I could use a little more brightness.'",
        "Light mode activated. Sunglasses are highly recommended, but a welding helmet might work better.",
        "Bro really picked light mode. I'm not judging... I'm just wondering what your eyes ever did to you.",
    ],

    dark: [
        "Welcome back to dark mode. Your eyes have officially been taken off life support.",
        "Dark mode activated. Everything feels right again, and the universe is slowly healing.",
        "Back to the dark side, I see. We saved your spot and even kept the vibes intact.",
        "Dark mode enabled. Your screen looks cooler, your setup looks cooler, and somehow you do too.",
        "Good choice. Somewhere out there, a pair of overworked eyeballs just breathed a sigh of relief.",
    ],
};
