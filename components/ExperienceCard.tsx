import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IExperience } from "@/types";
// import heroImage from "../public/twitter_YwrvQmzz_400x400.jpg";

const api_url =
  process.env.STRAPI_PUBLIC_API_URL ||
  "https://portfolio-strapi-nextjs.herokuapp.com";

interface experience {}
type Props = {
  experience: IExperience;
  // experience: {
  //   role: string;
  //   companyName: string;
  //   companyLogo: any;
  //   tech: {}[];
  // }[];
};

function ExperienceCard({ experience }: Props) {
  // console.log(experience.attributes);
  // console.log(experience.attributes.companyLogo.data.attribute.url);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[360px] h-[70vh] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-auto">
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="w-32 h-32 relative rounded-full xl:w-[200px] xl:h-[200px] object-cover mx-auto object-center overflow-hidden">
          <Image
            src={`${api_url}${experience.attributes.companyLogo.data.attributes.url}`}
            alt=""
            fill
          />
        </div>
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-light">
          {experience.attributes.role}
        </h4>
        <p className="font-bold text-2xl mt-1">
          {experience.attributes.companyName}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.attributes.tech.map((tech) => (
            <div
              key={tech.id}
              className="relative h-5 rounded-sm bg-[#f7ab0a]/80 p-1 flex items-center justify-center"
            >
              <span className="text-slate-500 text-xs font-semibold">
                {tech.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {experience.attributes.startDate} --{" "}
          {experience.attributes.endDate || "present"}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.attributes.duties.map((duty) => (
            <li key={duty.id}>{duty.dutyItem}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
