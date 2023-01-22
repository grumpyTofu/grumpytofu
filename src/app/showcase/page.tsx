import { Section, Typography } from "@portfolio/components";
import Navbar from "@portfolio/components/navbar";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Machine Learning Algorithms and Text matching for generating database schemas",
    description:
      "In this project, I used machine learning algorithms and text matching techniques to automatically generate database schemas. This helped me to speed up the development process and ensure consistency in the structure of the databases I was working with.",
  },
  {
    title: "Fusion360, IoT, and Cloud Functions rapid product Prototyping",
    description:
      "In this project, I used Fusion360, IoT, and Cloud Functions to rapidly prototype a product. This allowed me to quickly iterate on designs and test different ideas without having to spend a lot of time on manual labor.",
  },
  {
    title: "GraphQL Integrations for Phone based payments w/ RingCentral integration",
    description:
      "In this project, I integrated GraphQL into a phone-based payment system and added RingCentral integration to allow for seamless transactions.",
  },
  {
    title: "NoSQL DB for cross platform/browser UI state hydration",
    description:
      "In this project, I used a NoSQL database to store and retrieve UI state across multiple platforms and browsers, allowing for a consistent user experience.",
  },
  {
    title: "Google Captcha Validation for locking down public API endpoints",
    description:
      "In this project, I implemented Google Captcha validation on public API endpoints to improve security and prevent unauthorized access.",
  },
  {
    title: ".NET MAUI for single codebase quick multi-platform development",
    description:
      "I used .NET MAUI to create a single codebase that could be quickly and easily adapted for multiple platforms, which saved time and resources.",
  },
  {
    title: "Blockchain Automated Liquidity Management",
    description:
      "In this project, I implemented automated liquidity management on a blockchain platform, improving the efficiency and security of financial transactions.",
  },
  {
    title: "Next.js experimental App directory for ultra-fast performing websites",
    description:
      "I experimented with using a Next.js App directory to improve the performance of websites, resulting in ultra-fast load times and improved user experience.",
  },
];

const nxSeries: Project[] = [
  {
    title: "Mono repo for DRY code, lightweight builds, and lightening fast CI/CD pipelines",
    description: "In this project, I used a mono repo with Nx to improve code reusability, reduce build times, and speed up CI/CD pipelines.",
  },
  {
    title: "Custom multi-stage webpack build for incremental UI framework upgrade w/ react portal",
    description:
      "I created a custom multi-stage webpack build that allowed for incremental upgrades to the UI framework, using react portal for improved performance.",
  },
  {
    title: "NoSQL migrations for production data management (Open Source)",
    description:
      "I implemented NoSQL migrations for managing production data, using open source tools and techniques to improve reliability and scalability.",
  },
  {
    title: "Monorepo w/ electron for rapid desktop application development (AWS oscal app in 8 weeks)",
    description: "I used a monorepo with electron to quickly develop a desktop application, and deployed it to AWS in 8 weeks.",
  },
  {
    title: "Custom XML converter for docx generation",
    description: "I created a custom XML converter for generating docx files, which improved the efficiency and consistency of my workflow.",
  },
  {
    title: "Nestjs OpenAPI config w/ Redux Toolkit code generation for rapid full stack app dev",
    description:
      "I used Nestjs and OpenAPI config to quickly develop a full stack application, and leveraged Redux Toolkit for efficient code generation.",
  },
];

const Showcase = () => {
  return (
    <>
      <Navbar />
      <Section id="intro">
        <Typography variant="h2" className="text-2xl font-medium text-center">
          Projects - Case Studies
        </Typography>
      </Section>
      <Section id="project-list" variant="thick" className="py-12">
        <Typography variant="h3" className="py-6">
          Coming Soon...
        </Typography>
        <ul className="pl-6">
          {projects.map((project, index) => (
            <li key={index}>
              <Typography variant="h4" className="py-3">{project.title}</Typography>
              <Typography className="pl-6">{project.description}</Typography>
            </li>
          ))}
        </ul>
        <Typography variant="h3" className="py-6 pl-6">
          Nx Series
        </Typography>
        <ul className="pl-12">
          {nxSeries.map((project, index) => (
            <li key={index}>
              <Typography variant="h4" className="py-3">{project.title}</Typography>
              <Typography className="pl-6">{project.description}</Typography>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Showcase;
