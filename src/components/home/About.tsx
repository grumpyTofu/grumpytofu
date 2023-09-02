import { Section } from "../Section";
import { Typography } from "../Typography";

export const About = () => {
  return (
    <Section id="about">
      <div class="max-w-screen-xl px-8 xl:px-16 mx-auto">
        <div class="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
          <div class="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <Typography variant="h2" class="!font-medium leading-normal">
              About Me
            </Typography>
            <Typography class="my-6">
              Welcome to my portfolio website, where the coding connoisseur and
              the recipe developer come together to whip up a dish of success!
            </Typography>
            <a href="/about">Learn More</a>
          </div>
          <div class="flex w-full">
            <div class="h-full w-full flex justify-center items-center">
              <img
                src="/developer-1.webp"
                alt="Developer Illustration"
                width={612}
                height={383}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};