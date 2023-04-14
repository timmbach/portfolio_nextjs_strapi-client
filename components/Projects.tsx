// import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IProject } from "@/types";
// import Link from "next/link";
import ProjectCard from "./ProjectCard";

interface IPropTypes {
  projects: {
    items: IProject[];
  };
}
// const api_url = process.env.STRAPI_PUBLIC_API_URL || "http://127.0.0.1:1337";

function Projects({ projects }: IPropTypes): JSX.Element {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    setProjectCount(projects.items.length);
  }, [projects.items.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <p className="absolute top-[8.5rem] md:top-32 uppercase tracking-[3px] text-[10px] animate-pulse text-[#F7AB0A]">
        {"<--"} swipe {"-->"}
      </p>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects &&
          projects.items
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                projectCount={projectCount}
              />
            ))
            .reverse()}
      </div>

      <div className="w-full absolute top-[30%] left-0 h-[500px] bg-[#F7AB0A]/10 -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
