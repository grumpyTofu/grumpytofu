import React from "react";
import { Section, Typography } from "@portfolio/components";
import Navbar from "@portfolio/components/navbar";
import Contact from "../contact";
import InfoSection, { InfoSectionProps } from "./infoSection";

// const services = ["Custom application development", "Architectural design and consultation", "and more..."];
const infoSections: InfoSectionProps[] = [
  {
    title: "Services",
    content: (
      <ul>
        <li>Custom web app development</li>
        <li>Cloud infrastructure design & implementation</li>
        <li>Microservices architecture & development</li>
        <li>API development & integration</li>
        <li>Database design & management</li>
        <li>Serverless computing solutions</li>
        <li>Mobile & Desktop app development (iOS/Android)</li>
        <li>Front-end development (React, Angular, etc.)</li>
        <li>Quality assurance and testing</li>
        <li>Performance optimization and scalability</li>
        <li>Maintenance and technical support</li>
      </ul>
    ),
    link: "/showcase",
  },
  {
    title: "Industries",
    content: (
      <ul>
        <li>Healthcare</li>
        <li>Finance</li>
        <li>Retail</li>
        <li>Government</li>
        <li>Transportation and logistics</li>
        <li>Cybersecurity</li>
        <li>Technology</li>
      </ul>
    ),
    link: "/showcase",
  },
  {
    title: "Technologies",
    content: (
      <ul>
        <li>JavaScript & Typescript (React, Angular, Node.js)</li>
        <li>C# (.NET)</li>
        <li>Python</li>
        <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
        <li>Databases (MongoDB, PostgreSQL, MSSQL, and more)</li>
      </ul>
    ),
    link: "/showcase",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />
      <Section id="intro">
        <Typography variant="h2" className="mb-6">
          Development Services
        </Typography>
        <Typography className="mb-6">
          I am a Software Engineer with experience architecting, developing, and managing enterprise applications. I specialize in web application
          development using Full-stack Javascript/Typescript (React & Node.js). I also have experience working with other tech stacks including
          Python, C#/.NET, and SQL. I am passionate about architecting and developing user-friendly, scalable, and secure systems.
        </Typography>
      </Section>
      <Section id="services" variant="thick" className="pt-12 pb-24">
        <div className="pt-12 pb-24 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 cursor-pointer">
          {infoSections.map((section, i) => (
            <InfoSection title={section.title} content={section.content} link={section.link} key={section.title} />
          ))}
        </div>
      </Section>
      <Contact />
    </>
  );
};

export default Services;
