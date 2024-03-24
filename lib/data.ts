import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import corpcommentImg from "@/public/pic1.png";
import rmtdevImg from "@/public/pic2.png";
import wordanalyticsImg from "@/public/pic3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Software Engineer",
    location: "Remote",
    description:
      "Developing mern stack web applications using React.js, Next.Js and other related technologies. Utilizing Node.Js using Express.Js on the server side Use styling solutions such as MaterialUI, TailwindCSS and Styled Components for eye catching user interfaces. Use of Dockers and Kubernetes for containerization. Made use of reacts premium state management solution 'Redux' to manage state across entire website. Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    icon: React.createElement(SiUpwork),
    date: "Present",
  },
  {
    title: "Full Stack Web Developer (Part Time - Project Based)",
    location: "Ontario, CA",
    description:
      "Developed entire website using the MERN stack.Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.Implementing responsive design, responsive Styling done using Tailwind CSSParticipating in code reviews and providing constructive feedback",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - May 2023",
  },
  {
    title: "Registrations Head - Google Developers Student Clubs",
    location: "IBA, Karachi, PK",
    description:
      "Developing and maintaining web application using React.js and other related technologies.Collaborating with development team to create user-friendly website for event information and event registration. Coordinated and managed the online registration portal for the event HackFest.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Aug 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Airline Management System",
    description:
      "Web-based platform that allows users to search, book, and manage airlines, providing a convenient and efficient solution for air travel needs. User facing website + admin dashboard + ERP for pilots, managers, crews and engineers",
    tags: ["React", "Next.js", "Postgres", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    git:'https://github.com/',
    live:'https://github.com/',
  },
  {
    title: "Crown Clothing - An Ecommerce Website",
    description:
      "A cutting-edge React ecommerce project with React 18, GraphQL, Redux, and Firebase. Master React features, state management, architecture decisions, and PWA conversion. Test with Jest, Enzyme, and Stripe API for online payments.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    git:'https://github.com/',
    live:'https://crownapparels.netlify.app/',
  },
  {
    title: "Brother's Roofing Website - Ontario (Canada)",
    description:
      "A landing page for a Roofing Services provider located in Ontario Canada. Website created using react with Custom Backend using the MERN stack. Styled using Tailwind CSS. State management using Redux.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    git:'https://github.com/UMAIRAHMED-111/Brothers-Roofing',
    live:'https://brothersroofing.ca/',
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
