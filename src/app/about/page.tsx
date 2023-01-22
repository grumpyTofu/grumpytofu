import { Section, Typography } from "@portfolio/components";
import Navbar from "@portfolio/components/navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Section id="intro">
        <Typography variant="h1" className="text-4xl font-medium text-center">
          Welcome to my portfolio website!
        </Typography>
      </Section>
      <Section id="about" variant="thick">
        <Typography variant="h2" className="py-12 text-center">
          About Me
        </Typography>
        <Typography className="text-lg">
          My name is James and I am a Software Engineer. I have always had a passion for technology, and I am dedicated to delivering high-quality
          work that exceeds my clients expectations. I have 5+ years of experience architecting, developing, and managing enterprise applications. I
          specializes in web application development using JavaScript (React & Node.js), Typescript, Python, C# .NET, and SQL. I am passionate about
          architecting and developing user-friendly, scalable, and secure systems.
        </Typography>
      </Section>
    </>
  );
};

export default About;
