import React, { useMemo } from "react";
import { Section, Typography, Card } from "@portfolio/components";

const Contact = () => {
  return (
    <Section id="contact" variant="thick" className="!min-h-[50vh]">
      <div>
        <Card className="absolute !mt-20" variant="frosted">
          <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
            <Typography variant="h3" className="!font-medium">
              <span className="block">Ready to dive in?</span>
            </Typography>
            <Typography>Contact us to schedule a consultation.</Typography>
          </div>
          <a href="/contact">Contact</a>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
