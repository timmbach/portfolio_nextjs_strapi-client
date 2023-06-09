import Head from "next/head";
// import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import avatarPic from "../public/profile-pic.png";
import {
  fetchContacts,
  fetchExperiences,
  fetchProjects,
  fetchSkills,
} from "@/http";
import { AxiosResponse } from "axios";
import {
  ICollectionResponse,
  IContact,
  IExperience,
  IProject,
  ISkill,
} from "@/types";
import IntroPage from "@/components/IntroPage";

// const inter = Inter({ subsets: ["latin"] });
interface IPropTypes {
  experiences: {
    items: IExperience[];
  };
  skills: {
    items: ISkill[];
  };
  projects: {
    items: IProject[];
  };
  contacts: {
    items: IContact[];
  };
}

const Home: NextPage<IPropTypes> = ({
  experiences,
  skills,
  projects,
  contacts,
}: IPropTypes) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay in loading your content
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y overflow-y-scroll overflow-x-hidden snap-mandatory z-0">
      <Head>
        <title>Dev Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        {loading ? <IntroPage /> : <Hero />}
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>

      {/* COntact Me */}
      <section id="contact" className="snap-center">
        <ContactMe contacts={contacts} />
      </section>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center ">
          <Link href="#hero">
            <div className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 overflow-hidden">
              <Image src={avatarPic} alt="" fill />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // experiences
  const {
    data: experiences,
  }: AxiosResponse<ICollectionResponse<IExperience[]>> =
    await fetchExperiences();

  const { data: skills }: AxiosResponse<ICollectionResponse<ISkill[]>> =
    await fetchSkills();
  const { data: projects }: AxiosResponse<ICollectionResponse<IProject[]>> =
    await fetchProjects();
  const { data: contacts }: AxiosResponse<ICollectionResponse<IContact[]>> =
    await fetchContacts();
  // console.log("projects", projects);
  return {
    props: {
      experiences: {
        items: experiences.data,
      },
      skills: {
        items: skills.data,
      },
      projects: {
        items: projects.data,
      },
      contacts: {
        items: contacts.data,
      },
    },
  };
};

export default Home;
