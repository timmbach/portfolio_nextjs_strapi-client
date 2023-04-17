import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

function IntroPage({}: Props) {
  const [text] = useTypewriter({
    words: ["Developed with Nextjs, Typescript, Tailwindcss and Strapi(cms)"],
    loop: 0,
    delaySpeed: 5000,
    // deleteSpeed: 50,
    typeSpeed: 30,
  });
  return (
    <div className="h-screen relative flex flex-col space-y-8 items-center justify-center text-center overflow-hidden bg-white z-21">
      <div className="z-20 flex flex-col items-center justify-start">
        <h1 className="text-4xl lg:text-5xl font-bold px-10 my-10 text-[#ae7806]/70">
          My Portfolio Website
        </h1>
        <h4 className="text-3xl lg:text-4xl font-semibold px-10 text-black">
          <span className="mr-2">{text}</span>
          <Cursor cursorStyle="_" cursorColor="#F7AB0A" />
        </h4>
      </div>
    </div>
  );
}

export default IntroPage;
