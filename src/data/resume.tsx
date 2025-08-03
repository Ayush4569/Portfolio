import { Icons } from "@/components/icons";
import { HomeIcon, FileTextIcon } from "lucide-react";

export const DATA = {
  name: "Ayush Mishra",
  initials: "AM",
  url: "https://github.com/Ayush4569",
  location: "Mumbai, India",
  locationLink: "https://www.google.com/maps/place/navi+mumbai",
  description: "Curious learner with strong interest in building clean and scalable web applications.",
  summary:
    "I'm Ayush Mishra, an undergraduate IT engineering student at RAIT and a full-stack developer passionate about crafting end-to-end web products. I love building scalable, user-centric applications that blend clean interfaces with resilient backend systems. From designing intuitive frontends to architecting robust infrastructure, I care deeply about performance, maintainability, and creating software that delivers real value.",
  avatarUrl: "/photo.png", // Replace with your profile image
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux toolkit",
    "Docker",
    "Node.js",
    "Express.js",
    "Redis",
    "Websockets",
    "Mongodb",
    "SQL",
    "Git",
    "Postman",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: FileTextIcon, label: "Resume" },
  ],
  contact: {
    email: "ayushm4569@gmail.com",
    tel: "+91 8850296453", // Add your phone number if you want
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ayush4569",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayush-mishra-659951293",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ayushm4569@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
   {
     company :"Urban sabzi",
     position :"Full-stack developer",
     responsibilty:"As a Full-Stack Developer, I’ve been responsible for delivering end-to-end features crafting clean, intuitive, and responsive user interfaces while building secure, scalable, and maintainable backend systems. I work closely with designers and product teams to turn ideas into seamless digital experiences, implementing RESTful APIs, authentication systems, and efficient database structures for both website and mobile application. "
   }
  ],
  education: [
    {
      school: "DY Patil University",
      href: "https://dypatil.edu/",
      degree: "B.Tech Information Technology",
      logoUrl: "/college.webp",
      start: "2023",
      end: "2027",
    },
    {
      school: "Abhinav Vidyalay Junior College",
      href: "https://staff.abhinav.ac.in/",
      degree: "12th Science",
      logoUrl: "/abhinav.webp",
      start: "2021",
      end: "2023",
    },
    {
      school: "Omkar English Medium School CBSE",
      href: "https://www.omkarcbse.in/",
      degree: "10th CBSE",
      logoUrl: "/school.png",
      start: "2018",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Notecraft",
      href: "https://app.notecraft.tech",
      dates: "April 2025 - July 2025",
      active: true,
      description:
        "Notecraft is a modern, minimal, and AI-assisted note-taking platform inspired by Notion,designed with a full product mindset, not just as a CRUD project. It offers real-time document management, AI-powered formatting, secure file uploads, subscription billing, and production-grade system architecture including caching,rate limiting and infra based devops with ci/cd integration.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "Redux", "Node.js", "Express.js", "Prisma", "Redis", "Tanstack query", "Docker", "Typescript", "Zod", "AWS", "Grok AI SDK"],
      links: [
        {
          type: "Website",
          href: "https://app.notecraft.tech",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ayush4569/Notecraft",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Edunext",
      href: "https://github.com/Ayush4569/EduNext",
      dates: "March 2025",
      active: true,
      description:
        "EduNext is a modern and dynamic Learning Management System (LMS) designed to empower educators and learners alike. With an intuitive interface and powerful features, EduNext enables teachers to create and share both free and paid courses seamlessly while providing students with an engaging learning experience.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Shadcn",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Multer",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://edunext-frontend.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ayush4569/EduNext",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ridesphere",
      href: "https://github.com/Ayush4569/Ridesphere",
      dates: "2024",
      active: true,
      description:
        "Built a real-time ride-booking platform inspired by Uber, featuring dynamic location suggestions, live fare calculation, and real-time ride tracking for an intuitive user experience. Implemented seamless and secure payments through PayPal integration, while leveraging WebSockets to deliver instant ride status updates. The application was thoughtfully optimized for scalability and high performance, ensuring a smooth and responsive interface for both riders and drivers.",
      technologies: ["React",
        "Tailwind CSS",
        "Leaflet Js",
        "Websockets",
        "Node.js",
        "Express.js",
        "MongoDB",],
      links: [
        {
          type: "Source",
          href: "https://github.com/Ayush4569/Ridesphere",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
