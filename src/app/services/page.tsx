import React from "react";
import { Section, Typography } from "@portfolio/components";
import Navbar from "@portfolio/components/navbar";
import Link from "next/link";

const services = ["Custom application development", "Architectural design and consultation", "and more..."];

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
      <Section id="services" variant="thick">
        <Typography variant="h2">Services Offered</Typography>
        <ul>
          <li>Custom software development</li>
          <li>Web and mobile app development</li>
          <li>E-commerce development</li>
          <li>Cloud-based solutions</li>
          <li>UI/UX design</li>
          <li>Maintenance and support</li>
          <li>Quality assurance and testing</li>
        </ul>
      </Section>
      <Section id="industries">
        <Typography variant="h2">Industries Served</Typography>
        <ul>
          <li>Healthcare</li>
          <li>Finance</li>
          <li>Retail</li>
          <li>Government</li>
          <li>Transportation and logistics</li>
          <li>Cybersecurity</li>
          <li>Technology</li>
        </ul>
      </Section>
      <Section id="tech" variant="thick">
        <Typography variant="h2">Technologies Used</Typography>
        <ul>
          <li>JavaScript & Typescript (React, Angular, Node.js)</li>
          <li>C# (.NET)</li>
          <li>Python (Django, Flask)</li>
          <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
          <li>Databases (MySQL, MongoDB, PostgreSQL, Oracle)</li>
        </ul>
      </Section>
      <Section id="contact">
        <Typography variant="h2">Contact</Typography>
        <Typography>Ready to dive in?</Typography>
        <Link href="/contact">Contact</Link>
      </Section>
    </>
  );
};

export default Services;
