import { Section, Typography } from "@portfolio/components";
import Navbar from "@portfolio/components/navbar";
import Contact from "../contact";
import Showcase from "../showcase";

const About = () => {
  return (
    <>
      <Navbar />
      <Section id="intro">
        <Typography variant="h1" className="text-4xl font-medium text-center">
          Welcome to my portfolio website!
        </Typography>
      </Section>
      <Section id="about" variant="thick" className="px-12">
        <Typography variant="h2" className="!font-medium leading-normal text-center mb-3">
          About Me
        </Typography>
        <div className="flex justify-center">
          <hr className="mb-12 border-solid border-gray-500 w-1/12" />
        </div>
        <Typography className="mb-6 indent-6">
          I am a Software Engineer with experience architecting, developing, and managing enterprise applications. I specialize in web application
          development using Full-stack Javascript/Typescript (React & Node.js). I also have experience working with other tech stacks including
          Python, C#/.NET, and SQL. I am passionate about architecting and developing user-friendly, scalable, and secure systems.
        </Typography>
        <Typography className="mb-6 indent-6">
          I am a no-nonsense problem solver, with a determination to find the best solution that is akin to a chef searching for the perfect dish. I
          am a master of my craft, with a depth of knowledge and experience in software engineering that is as deep and varied as a gourmet collection
          of unique and diverse ingredients, with an attention to detail that is as precise as a sushi knife. My unorthodox approach to coding often
          leads to breakthroughs, like a lightbulb moment in a dimly lit noodle shop.
        </Typography>
        <Typography className="mb-6 indent-6">
          <q>Determination is the secret sauce for my coding success</q> and I stand by it. I am confident that I can bring my charm, wit, and
          expertise to any project. Thanks for stopping by, take a look around and if you have any questions or projects you&apos;d like me to work
          on, don&apos;t hesitate to contact me. I&apos;ll be happy to help you create a winning recipe for your unique business challenges!
        </Typography>
      </Section>
      <Showcase />
      <Contact />
    </>
  );
};

export default About;
