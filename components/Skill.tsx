import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
import { ISkill } from "@/types";

type Props = {
  directionLeft?: boolean;
  skill: ISkill;
};

// const api_url =
//   process.env.STRAPI_PUBLIC_API_URL ||
//   "https://tim-portfolio.onrender.com";

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -150 : 150,
          opacity: 0,
        }}
        src={skill.attributes.techImg.data.attributes.url}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-xl border border-gray-500 bg-white w-14 h-14 md:w-20 md:h-20 xl:w-20 xl:h-20 object-contain filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-xl z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {skill.attributes.rating}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
