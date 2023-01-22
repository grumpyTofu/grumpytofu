import React from "react";
import { Section, Typography } from "@portfolio/components";
import Navbar from "@portfolio/components/navbar";

const services = ["Custom application development", "Architectural design and consultation", "and more..."];

const Services = () => {
  return (
    <>
      <Navbar />
      <Section id="intro">
        <Typography variant="h3">Under Construction</Typography>
      </Section>
    </>
  );
};

export default Services;
