import { Section } from '../Section';
import { Typography } from '../Typography';
import { Card } from '../Card';

export const Contact = () => {
  return (
    <Section
      id="contact"
      variant="frosted"
      class="flex justify-center !min-h-0 !h-0 z-50 !-mb-[1rem]"
    >
      <Card class="!-mt-20 z-10 !w-full !bg-slate-800 rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 flex flex-col sm:flex-row justify-between items-center">
        <div class="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
          <Typography
            variant="h3"
            class="!font-medium text-center sm:text-start"
          >
            Ready to dive in?
          </Typography>
          <Typography class="hidden md:block md:mt-3">
            Contact me to schedule a consultation.
          </Typography>
        </div>
        <a
          href="/contact"
          class="text-2xl sm:text-xl lg:text-lg mt-6 sm:mt-3 md:mt-0 z-50"
        >
          Contact
        </a>
      </Card>
    </Section>
  );
};