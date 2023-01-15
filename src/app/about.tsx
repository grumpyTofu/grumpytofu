import React, { useMemo } from "react";
import Image from "next/image";
import { Section, Typography } from "@portfolio/components";
import Link from "next/link";

// import developer1 from "../public//assets/Illustration1.png";

const About = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  return (
    <Section id="about" variant="transparant">
      <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <Typography variant="h2" className="!font-medium leading-normal">
              About Me
            </Typography>
            <Typography className="mt-4 mb-6">
              My name is James and I am is a Senior Software Engineer with experience architecting, developing, and managing enterprise applications.
              I specialize in web application development using Full-stack Javascript/Typescript (React & Node.js). I also have experience working with other
              tech stacks including Python, C#/.NET, and SQL. I am passionate about architecting and developing user-friendly, scalable, and secure
              systems.
            </Typography>
            <Link href="/about">Learn More</Link>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image src="/developer-1.webp" alt="Developer Illustration" quality={100} width={612} height={383} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
