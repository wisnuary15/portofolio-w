"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from {" "}
        <span className="font-medium">Senior High School in 2022</span>, I decided to 
        pursue my interest in programming. I enrolled in University and {" "}
        <span className="font-medium">studied web development.</span>My favorite part of programming{" "}
        <span className="italic">problem-solving aspect.</span> I 
        <span className="underline"> love </span>
        the feeling of finally finding a solution to a problem. I'm currently learning{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, like Genshin Impact, and Clash of Clans. If I'm not playing video games I watch movies.{" "}
        <span className="font-medium">I also learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">coding and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
