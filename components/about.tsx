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
        I started programming irregularly as a self-taught person because I've
        always been curious and passionate about understanding how things work
        on the web, and when I moved to{" "}
        <span className="font-medium">Germany</span>, I decided to learn
        programming professionally to pursue my passion for
        programming. I took an intensive full-time one-year course in web development at
        DCI Digital Career Institute, where I gained hands-on experience of
        complete <span className="font-medium">full-stack web development</span>{" "}
        with Node.js, React, Redux, and more.{" "}
        <span className="italic">My favorite thing about programming</span> is
        the problem-solving I <span className="underline">love</span> feeling of
        having finally found a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB. I'm also familiar with
          TypeScript and Prisma
        </span>
        I emphasize continuous learning and improvement, and am always eager to
        explore new technologies and methodologies. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you can find me
        exploring Berlin's vibrant culture, playing video games and watching
        movies.{" "}
        <span className="font-medium">I also like to learn new things.</span>.
        I'm currently learning{" "}
        <span className="font-medium">Java and Python.</span>
      </p>
    </motion.section>
  );
}
