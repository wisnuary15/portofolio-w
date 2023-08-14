import React from "react";
import { GoProject } from "react-icons/go";
import { SiOpenproject } from "react-icons/si";
import { GoProjectRoadmap } from "react-icons/go";
import corpcommentImg from "@/public/corpcomment.png";
import carImg from "@/public/car.png";
import tripImg from "@/public/trip.png";

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
    title: "Personal Portofolio",
    location: "Jombang, Jawa Timur",
    description:
      "In the last year, I focused on improving my web development skills. I created a personal portfolio website with HTML, CSS and a little JavaScript. Design layouts, organize content, and ensure responsiveness. This site includes info about myself, projects I've worked on, and my contacts.",
    icon: React.createElement(GoProjectRoadmap),
    date: "2022",
  },
  {
    title: "Management Aplication",
    location: "Jombang, Jawa Timur",
    description:
      "During college, I participated in a group project to develop a task management application. I am responsible for designing user interfaces, implementing reminder features, and integrating databases. We succeeded in creating an application that helps users organize and track their tasks more efficiently",
    icon: React.createElement(GoProject),
    date: "2022",
  },
  {
    title: "Yosa",
    location: "Jombang, Jawa Timur",
    description:
      "With my interest in open source software development, I got involved in a project called Yosa. After checking the source code, I found a bug in a certain feature and managed to fix the problem. The development team accepted my contribution, and this fix has been implemented in the latest version of the Yosa project.",
    icon: React.createElement(SiOpenproject),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "A website feedback, Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Car Rent",
    description:
      "I am creating a car show website. The web has features such as filtering, sorting, car details and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Headless-Ui"],
    imageUrl: carImg,
  },
  {
    title: "Trip Blog",
    description:
      "A website for renting hotels and private beaches. but this website is still in the development stage.",
    tags: ["React", "Tailwind", "JavaScript"],
    imageUrl: tripImg,
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

] as const;
