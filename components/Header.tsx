import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
        }}
        className=" flex items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/@timothymbachu"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/timothy-mbachu/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/timmbach"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
        className="flex  items-center cursor-pointer text-gray-300"
      >
        <SocialIcon
          className="cursor-pointer"
          url="#contact"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <Link href="#contact">
          <div className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </div>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
