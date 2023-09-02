import Image from "next/image";
import React from "react";
import { Section, Typography } from "@portfolio/components";
import Link from "next/link";

const services = ["Custom application development", "Architectural design and consultation", "and more..."];

const Services = () => {
  return (
    <Section id="services" variant="frosted">
      <div className="max-w-screen-xl pt-8 pb-6 sm:pt-14 sm:pb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
          <div className="h-full w-full p-4">
            <Image src="/developer-2.webp" alt="Developer Illustration" quality={100} height={414} width={508} />
          </div>
          <div className="flex flex-col justify-center ml-auto w-full lg:w-9/12">
            <Typography variant="h2" className="mb-6">
              Development Services
            </Typography>
            <p className="my-2 text-black-500">I provide custom development services tailored to meet your business needs</p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {services.map((service, index) => (
                <li className="relative circle-check custom-list" key={service}>
                  {service}
                </li>
              ))}
            </ul>
            <div className="w-full mt-6 mb-6 flex self-start list-inside">
              <Link href="/services">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
