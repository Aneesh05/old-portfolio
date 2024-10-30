import { FaReact, FaGitAlt, FaPython, FaJava, FaHtml5, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiVisualstudiocode, SiArduino, SiPycharm, SiIntellijidea, SiEclipseide, SiDocker, SiPostman, SiR, SiMongodb, SiSqlite, SiFirebase, SiTailwindcss } from "react-icons/si";
import { DiTrello } from "react-icons/di"; // Assuming Turing and Ready To Program don't have specific icons

export const skills = [
    // Programming Languages
    {
        name: "Python",
        icon: FaPython,
        color: "#3776AB",
        description: "High-level programming language",
    },
    {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        description: "General-purpose programming language",
    },
    {
        name: "Java",
        icon: FaJava,
        color: "#007396",
        description: "Object-oriented programming language",
    },
    {
        name: "JavaScript",
        icon: FaJsSquare,
        color: "#F7DF1E",
        description: "High-level, just-in-time compiled language",
    },
    {
        name: "HTML/CSS",
        icon: FaHtml5,
        color: "#E34F26",
        description: "Markup and styling languages",
    },
    {
        name: "R",
        icon: SiR,
        color: "#276DC3",
        description: "Programming language for statistical computing",
    },

    // Frameworks and Libraries
    {
        name: "React/React Native",
        icon: FaReact,
        color: "#61DAFB",
        description: "JavaScript library for building user interfaces",
    },
    {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#339933",
        description: "JavaScript runtime",
    },
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38B2AC",
        description: "Utility-first CSS framework",
    },
	{
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        description: "NoSQL database",
    },
    {
        name: "SQLite",
        icon: SiSqlite,
        color: "#003B57",
        description: "Relational database management system",
    },
    {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
        description: "Platform for building mobile and web applications",
    },

    // Tools
    {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
        description: "Version control system",
    },
    {
        name: "VS Code",
        icon: SiVisualstudiocode,
        color: "#007ACC",
        description: "Source-code editor",
    },
    {
        name: "Arduino",
        icon: SiArduino,
        color: "#00979D",
        description: "Open-source electronics platform",
    },
    {
        name: "PyCharm",
        icon: SiPycharm,
        color: "#21D789",
        description: "Python IDE",
    },
    {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        color: "#000000",
        description: "Java IDE",
    },
    {
        name: "Eclipse",
        icon: SiEclipseide,
        color: "#2C2255",
        description: "Java IDE",
    },
    
];