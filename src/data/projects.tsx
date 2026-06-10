import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
    SiChakraui,
    SiDocker,
    SiExpress,
    SiFirebase,
    SiJavascript,
    SiMongodb,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiReactquery,
    SiSanity,
    SiShadcnui,
    SiSocketdotio,
    SiSupabase,
    SiTailwindcss,
    SiThreedotjs,
    SiTypescript,
    SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion, TbLetterG, TbLetterY } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
            <Link
                className="font-mono underline flex gap-2"
                rel="noopener"
                target="_new"
                to={live}
            >
                <Button variant={"default"} size={"sm"}>
                    Visit Website
                    <ArrowUpRight className="ml-3 w-5 h-5" />
                </Button>
            </Link>
            {repo && (
                <Link
                    className="font-mono underline flex gap-2"
                    rel="noopener"
                    target="_new"
                    to={repo}
                >
                    <Button variant={"default"} size={"sm"}>
                        Github
                        <ArrowUpRight className="ml-3 w-5 h-5" />
                    </Button>
                </Link>
            )}
        </div>
    );
};

export type Skill = {
    title: string;
    bg: string;
    fg: string;
    icon: ReactNode;
};
const PROJECT_SKILLS = {
    next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
    chakra: { title: "Chakra UI", bg: "black", fg: "white", icon: <SiChakraui /> },
    node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
    python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
    prisma: { title: "prisma", bg: "black", fg: "white", icon: <SiPrisma /> },
    postgres: { title: "PostgreSQL", bg: "black", fg: "white", icon: <SiPostgresql /> },
    mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
    express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
    reactQuery: { title: "React Query", bg: "black", fg: "white", icon: <SiReactquery /> },
    shadcn: { title: "ShanCN UI", bg: "black", fg: "white", icon: <SiShadcnui /> },
    aceternity: { title: "Aceternity", bg: "black", fg: "white", icon: <AceTernityLogo /> },
    tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
    docker: { title: "Docker", bg: "black", fg: "white", icon: <SiDocker /> },
    yjs: {
        title: "Y.js", bg: "black", fg: "white",
        icon: (<TbLetterY />),
    },
    firebase: { title: "Firebase", bg: "black", fg: "white", icon: <SiFirebase /> },
    sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
    js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
    ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
    vue: { title: "Vue.js", bg: "black", fg: "white", icon: <SiVuedotjs /> },
    react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
    sanity: { title: "Sanity", bg: "black", fg: "white", icon: <SiSanity /> },
    spline: { title: "Spline", bg: "black", fg: "white", icon: <SiThreedotjs /> },
    gsap: { title: "GSAP", bg: "black", fg: "white", icon: <TbLetterG /> },
    framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
    supabase: { title: "Supabase", bg: "black", fg: "white", icon: <SiSupabase /> },
};
export type Project = {
    id: string;
    category: string;
    title: string;
    src: string;
    screenshots: string[];
    skills: { frontend: Skill[]; backend: Skill[] };
    content: React.ReactNode | any;
    github?: string;
    live: string;
};
const projects: Project[] = [
    {
        id: "ev-charging",
        category: "Infrastructure Platform",
        title: "EV Charging Station Management System",
        src: "/assets/projects-screenshots/ev-charging/landing.png",
        screenshots: ["landing.png"],
        github: "https://github.com/Victor-201/ev-charging-station-management-system",
        live: "https://github.com/Victor-201/ev-charging-station-management-system",
        skills: {
            frontend: [
                PROJECT_SKILLS.react,
                PROJECT_SKILLS.ts,
                PROJECT_SKILLS.tailwind,
            ],
            backend: [
                PROJECT_SKILLS.node,
                PROJECT_SKILLS.express,
                PROJECT_SKILLS.postgres,
                PROJECT_SKILLS.docker,
                PROJECT_SKILLS.prisma,
                PROJECT_SKILLS.sockerio,
            ],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-2xl text-center">
                        EV Charging Station Management System
                    </TypographyP>
                    <TypographyP className="font-mono">
                        A complete full-stack platform supporting EV drivers (station search, booking, charging &amp; payment), charge station staff (session &amp; payment management), and administrators (system-wide analytics &amp; reporting). Built with microservices architecture across 6 backend services, Kong API Gateway, RabbitMQ message broker, Apache NiFi ETL pipeline, Docker &amp; Kubernetes.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                    <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
                    <p className="font-mono mb-2">
                        Express.js + TypeScript microservices, NestJS + Prisma, React Native mobile app, React 18 + Vite web portal, PostgreSQL &amp; MySQL databases.
                    </p>
                </div>
            );
        },
    },
    {
        id: "studyhub",
        category: "Social Learning Platform",
        title: "StudyHub Platform",
        src: "/assets/projects-screenshots/studyhub/landing.png",
        screenshots: ["landing.png"],
        github: "https://github.com/Victor-201/studyhub-platform",
        live: "https://github.com/Victor-201/studyhub-platform",
        skills: {
            frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
            backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.docker],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        StudyHub Platform
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        A social learning platform for students to share study materials, create study groups, engage in real-time chat, and rate resources.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    },
    {
        id: "customer-debt",
        category: "Business Management",
        title: "Accounts Receivable Management",
        src: "/assets/projects-screenshots/customer-debt/landing.png",
        screenshots: ["landing.png"],
        github: "https://github.com/Victor-201/customer-debt-management",
        live: "https://github.com/Victor-201/customer-debt-management",
        skills: {
            frontend: [PROJECT_SKILLS.js],
            backend: [PROJECT_SKILLS.postgres, PROJECT_SKILLS.node],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        Accounts Receivable Management System (ARMS)
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        A full-stack customer debt management system for tracking receivables, payment history, and customer records. Built with Clean Architecture to digitize the Accounts Receivable process.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    },
    {
        id: "social-network",
        category: "Social Network",
        title: "Capstone Social Network",
        src: "/assets/projects-screenshots/social-network/landing.png",
        screenshots: ["landing.png"],
        github: "https://github.com/Victor-201/capstone-group7-social-network",
        live: "https://github.com/Victor-201/capstone-group7-social-network",
        skills: {
            frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
            backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        Capstone Social Network
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        A social network connecting users to share posts, images, and interact. Features user profiles, news feed, friend/follow system, and group participation.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    },
    {
        id: "web-video-translator",
        category: "AI Web Tool",
        title: "Web Video Translator",
        src: "/assets/projects-screenshots/web-video-translator/landing.png",
        screenshots: ["landing.png"],
        github: "https://github.com/Victor-201/web-video-translator",
        live: "https://github.com/Victor-201/web-video-translator",
        skills: {
            frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
            backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.node],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        Web Video Translator
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        A full-stack AI-powered web application that detects videos from any website and translates them into Vietnamese with subtitles and voice-over.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    },
    {
        id: "smtp-linux",
        category: "System Engineering",
        title: "SMTP Linux Mail Server",
        src: "/assets/projects-screenshots/ev-charging/landing.png",
        screenshots: [],
        github: "https://github.com/Victor-201/smtp-linux",
        live: "https://github.com/Victor-201/smtp-linux",
        skills: {
            frontend: [],
            backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.js],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        SMTP Linux Mail Server
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        A custom SMTP server implementation on Linux to demonstrate low-level process management, I/O handling, and mail transfer protocol execution using Python.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    },
    {
        id: "se-drowsiness-alert",
        category: "AI / Computer Vision",
        title: "Driver Drowsiness Alert",
        src: "/assets/projects-screenshots/drowsiness-alert/landing.png",
        screenshots: ["landing.png"],
        github: "https://github.com/Victor-201/se-drowsiness-alert",
        live: "https://github.com/Victor-201/se-drowsiness-alert",
        skills: {
            frontend: [],
            backend: [PROJECT_SKILLS.python],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        Driver Drowsiness Alert App
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        An AI and Computer Vision application that monitors drivers in real-time, detecting signs of drowsiness or distraction to prevent accidents.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    },
    {
        id: "victor-portfolio",
        category: "Web Development",
        title: "Victor IT Portfolio",
        src: "/assets/projects-screenshots/studyhub/landing.png",
        screenshots: [],
        github: "https://github.com/Victor-201/victor-201.github.io",
        live: "https://github.com/Victor-201/victor-201.github.io",
        skills: {
            frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.js],
            backend: [],
        },
        get content() {
            return (
                <div>
                    <TypographyP className="font-mono text-xl text-center">
                        IT Professional Portfolio
                    </TypographyP>
                    <TypographyP className="font-mono mt-4">
                        A modern, responsive personal portfolio for IT professionals, built with React, Vite, TailwindCSS, and Framer Motion. Showcases high-quality frontend design principles.
                    </TypographyP>
                    <ProjectsLinks live={this.live} repo={this.github} />
                </div>
            );
        },
    }
];
export default projects;