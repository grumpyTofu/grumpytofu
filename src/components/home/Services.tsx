import { For } from "solid-js";
import { Section, Typography } from "..";

const services = [
  "Custom application development",
  "Architectural design and consultation",
  "and more...",
];

export const Services = () => {
  return (
    <Section id="services" variant="frosted">
      <div class="max-w-screen-xl pt-8 pb-6 sm:pt-14 sm:pb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div class="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
          <div class="h-full w-full p-4">
            <img
              src="/developer-2.webp"
              alt="Developer Illustration"
              height={414}
              width={508}
            />
          </div>
          <div class="flex flex-col justify-center ml-auto w-full lg:w-9/12">
            <Typography variant="h2" class="mb-6">
              Development Services
            </Typography>
            <p class="my-2 text-black-500">
              I provide custom development services tailored to meet your
              business needs
            </p>
            <ul class="text-black-500 self-start list-inside ml-8">
              <For each={services}>
                {(service) => (
                  <li class="relative circle-check custom-list">{service}</li>
                )}
              </For>
            </ul>
            <div class="w-full mt-6 mb-6 flex self-start list-inside">
              <a href="/services">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};