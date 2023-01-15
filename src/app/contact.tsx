import React, { useMemo } from "react";
import { Section, Typography, Card } from "@portfolio/components";

const Contact = () => {
  return (
    <Section id="contact" variant="frosted" className="flex justify-center !min-h-0">
      <Card className="!-mt-20 z-10 !w-full !bg-slate-800">
        <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
          <Typography variant="h3" className="!font-medium">
            <span className="block">Ready to dive in?</span>
          </Typography>
          <Typography>Contact us to schedule a consultation.</Typography>
        </div>
        <a href="/contact">Contact</a>
      </Card>
    </Section>
  );
};

export default Contact;
