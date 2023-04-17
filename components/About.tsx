import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { fetcher } from "../lib/api";
// import profileImg from "../public/profile-pic.png";
const qs = require("qs");

type Props = {
  // abouts: any;
};
const api_url =
  process.env.STRAPI_PUBLIC_API_URL || "https://tim-portfolio.onrender.com";

function About({}: Props) {
  const [profileSummary, setProfileSummary] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = qs.stringify({
          populate: "*",
        });

        const res = await fetch(`${api_url}/api/abouts?${params}`);
        const { data } = await res.json();
        const abouts = data.map(({ attributes }: any) => attributes);
        setProfileSummary(abouts[0]?.professionalSummary);
        setProfilePicUrl(abouts[0].profilePic.data.attributes.url);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        className="relative mt-20 md:mb-0 flex-shrink-0 w-52 h-60 rounded-full object-fit md:rounded-lg md:w-56 md:h-96 xl:w-[420px] xl:h-[580px] overflow-hidden"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <Image src={profilePicUrl} alt="" fill />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">{profileSummary}</p>
      </div>
    </motion.div>
  );
}

export default About;
