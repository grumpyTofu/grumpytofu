import React, { useMemo } from "react";

import { Section } from "@portfolio/components";
import ShowcaseItem from "./showcaseItem";
import Link from "next/link";

const Showcase = () => {
  return (
    <Section id="showcase">
      <div className="w-full pt-14 pb-[8rem]">
        <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">Showcase</h3>
            <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
              Check out some examples of applications that I have developed for clients
            </p>
            {/* <ShowcaseItem /> */}
            <Link href="/showcase" className="mt-12">Learn more</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Showcase;
