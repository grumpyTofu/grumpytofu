import React from "react";
import Image from "next/image";
import { Section, Typography } from "@portfolio/components";
import Link from "next/link";

const About = () => {
  return (
    <Section id="about">
      <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <Typography variant="h2" className="!font-medium leading-normal">
              About Me
            </Typography>
            <Typography className="my-6">
              Welcome to my portfolio website, where the coding connoisseur and the recipe developer come together to whip up a dish of success!
            </Typography>
            <Link href="/about">Learn More</Link>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full flex justify-center items-center">
              <Image src="/developer-1.webp" alt="Developer Illustration" quality={100} width={612} height={383} priority />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
