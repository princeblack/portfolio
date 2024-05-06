import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import playground from "@/public/playground.jpg";
import hoppipolla from "@/public/hoppipolla.jpg";
import ecommerce from "@/public/e-commerce.png";
import book from "@/public/book.jpg";

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
    title: "Graduated bootcamp",
    compagny: "DCI Digital Career Institute",
    location: "Berlin, GR",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Intern Front-End Developer",
    compagny: "Staiy",
    location: "Berlin, GR",
    description:
      "I worked as a front-end developer for Developing and implementing software solutions based on Figma designs. Tested and refined software prior to rollout, and released ad hoc product patches.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2021 - Jun 2021",
  },
  {
    title: "Intern Front-End Developer",
    compagny: "Zalando SE",
    location: "Berlin, GR",
    description:
      "Developed and implemented software solutions for Zalando retail based on provided designs.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2021 - Sep 2021",
  },
  {
    title: "Software Developer",
    compagny: "TA Europe Analytics",
    location: "Berlin, GR",
    description:
      "Collaborated with development team and stakeholders to design and create front-end software solutions, Conducted feasibility tests for software prototypes and implemented necessary modifications.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2021 - Jan 2024",
  },
] as const;

React
Node


export const projectsData = [
  {
    title: "Remgika",
    description:
      "Remgika is a social network for parents, parents can creat groupes, chat, add playground or child activity place and  give public feedback to the place.",
    tags: ["Javascript","React","Node", "Express", "MongoDB", "Nginx", "Socket","Scss"],
    imageUrl: playground,
  },
  {
    title: "Hoppípolla",
    description:
      "Hoppípolla, a newly Berlin founded kindergarten (‘kita’) with an ambitious concept.",
    tags: ["Javascript", "HTML", "Scss"],
    imageUrl: hoppipolla,
  },
  {
    title: "shopping",
    description:
      "A simple shopping shop site build with: ",
    tags: ["React", "Javascript", "Scss"],
    imageUrl: ecommerce,
  },
  {
    title: "Book",
    description:
      "A React Api Books and Movies build with: ",
    tags: ["React", "Javascript", "Scss"],
    imageUrl: book,
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
  "Bootstrap",
  "Storybook",
  "styled-components",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
