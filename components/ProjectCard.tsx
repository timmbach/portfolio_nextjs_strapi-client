import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IProject } from "@/types";
import Link from "next/link";

type Props = {
  project: IProject;
  projectCount: number;
  // experience: {
  //   role: string;
  //   companyName: string;
  //   companyLogo: any;
  //   tech: {}[];
  // }[];
};

// const api_url =
//   process.env.STRAPI_PUBLIC_API_URL || "https://tim-portfolio.onrender.com";

function ProjectCard({ project }: Props) {
  return (
    <div
      key={project.id}
      className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-end md:justify-center p-0 pb-20 md:pb-0 md:px-44 md:pt-44 h-screen"
    >
      <Link
        href={project.attributes.projectUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden h-[33vh] md:h-[50vh] w-[78vw] max-w-2xl"
        >
          <Image
            src={project.attributes.projectSnapshot.data.attributes.url}
            alt=""
            fill
          />
        </motion.div>
      </Link>
      <div className="px-2 md:px-10 max-w-6xl space-y-5">
        <h4 className="text-xl md:text-3xl font-semibold text-center">
          {/* <span className="underline decoration-[#f7ab0a]/50">
            Project {project.id} of {projectCount}:
          </span>{" "} */}
          {project.attributes.projectTitle}
        </h4>
        <p className="text-xs px-4 md:text-md text-center md:text-left h-32 overflow-auto">
          {project.attributes.projectDesc}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
