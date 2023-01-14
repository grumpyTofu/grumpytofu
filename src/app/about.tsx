import React, { useMemo } from "react";
import Image from "next/image";
import { Section, Typography } from "@portfolio/components";

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
    <Section id="about">
      <div className="max-w-screen-xl px-8 xl:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <Typography variant="h2" className="!font-medium text-black-600 leading-normal">
              Want anything to be easy with <strong>Spyre Development</strong>?
            </Typography>
            <Typography className="text-black-500 mt-4 mb-6">
              At Spyre Development, we believe that incorporating IT into business strategy facilitates enterprise growth and generates greater
              revenue, which enables a more streamlined, flexible, and efficient workflow. With 10+ years of experience in software development, we
              are always eager to implement IT strategy or stand-alone projects integrating platform-based and custom solutions.
            </Typography>
            <a href="/about">About Us</a>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image src="" alt="Developer Illustration" quality={100} width={612} height={383} />
            </div>
          </div>
        </div>
        {/* <div className="relative w-full flex glass">
    <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-[whitesmoke] glass z-10">
      {listUser.map((listUsers, index) => (
        <motion.div
          className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
          key={index}
          custom={{ duration: 2 + index }}
          variants={scrollAnimation}
        >
          <div className="flex mx-auto w-40 sm:w-auto">
            <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
              <Image
                src={listUsers.icon}
                className="h-6 w-6"
                alt="users list icon"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-black-600 font-bold">
                {listUsers.number}+
              </p>
              <p className="text-lg text-black-500">{listUsers.name}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </ScrollAnimationWrapper>
    <div
      className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
      style={{ filter: 'blur(114px)' }}
    ></div>
  </div> */}
      </div>
    </Section>
  );
};

export default About;
