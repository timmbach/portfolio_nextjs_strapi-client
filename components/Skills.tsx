import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { ISkill } from "@/types";

interface IPropTypes {
  skills: {
    items: ISkill[];
  };
}

function Skills({ skills }: IPropTypes) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid grid-cols-6 md:grid-cols-8 gap-3 gap-x-5 h-[30vh]">
        {skills.items.map((skill) => (
          <Skill
            key={skill.id}
            skill={skill}
            directionLeft={skill.id > Math.ceil(skills.items.length / 2)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
