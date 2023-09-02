import { Section, Typography } from "..";
// import ShowcaseItem from "./showcaseItem";

export const Showcase = () => {
  return (
    <Section id="showcase">
      <div class="w-full pt-14 pb-[8rem]">
        <div class="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div class="flex flex-col w-full">
            <Typography variant="h2" class="mb-6">
              Showcase
            </Typography>
            <p class="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Check out some examples of applications that I have developed for
              clients
            </p>
            {/* <ShowcaseItem /> */}
            <a href="/showcase" class="mt-12">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};