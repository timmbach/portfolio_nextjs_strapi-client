import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { IExperience } from "@/types";

interface IPropTypes {
  experiences: {
    items: IExperience[];
  };
}

function WorkExperience({ experiences }: IPropTypes): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative h-screen flex flex-col overflow-hidden text-left md:flex-row max-w-full px-2 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full mt-32 flex space-x-5 overflow-x-scroll snap-x p-10 snap-mandatory">
        {experiences &&
          experiences.items
            .map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
            .reverse()}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
