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
    I'm a skilled <span className="font-medium">software developer</span> with experience in <span className="font-medium">TypeScript</span> and <span className="font-medium">JavaScript</span>, and expertise in frameworks like <span className="font-medium">React, Node.js, and Next.js</span>. I can develop both <span className="italic">amazing user interfaces</span> and solid backend for your web applications. I'm also well versed in the domain of <span className="font-medium">AI</span>. My skills include data analysis, model building, and deployment using libraries like <span className="font-medium">TensorFlow, Keras, Scikit-learn, and Flask</span>. I'm a <span className="underline">quick learner</span> and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. <span className="italic">Let's work together</span> to bring your ideas to life!
</p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and spending time with friends and family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">stoicism</span>. I'm also
        learning a new language (spanish).
      </p>
    </motion.section>
  );
}
