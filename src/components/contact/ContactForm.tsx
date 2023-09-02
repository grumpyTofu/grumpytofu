import { createForm, email, minLength, required } from '@modular-forms/solid';
import { TextField } from '../TextField';
import { FormFooter } from '../FormFooter';

export const ContactForm = () => {
  const [contactForm, { Form, Field }] = createForm<{
    email: string;
    message: string;
  }>();

  return (
    <>
      <Form
        class="space-y-12 md:space-y-14 lg:space-y-16"
        onSubmit={(values) => alert(JSON.stringify(values, null, 4))}
      >
        <div class="space-y-8 md:space-y-10 lg:space-y-12">
          <Field
            name="email"
            validate={[
              required('Please enter your email.'),
              email('The email address is badly formatted.'),
            ]}
          >
            {(field, props) => (
              <TextField
                {...props}
                value={field.value}
                error={field.error}
                type="email"
                label="Email"
                placeholder="example@email.com"
                required
              />
            )}
          </Field>
          <Field
            name="message"
            validate={[
              required('Please enter your password.'),
              minLength(8, 'You password must have 8 characters or more.'),
            ]}
          >
            {(field, props) => (
              <TextField
                {...props}
                value={field.value}
                error={field.error}
                type="text"
                label="Message"
                required
              />
            )}
          </Field>
        </div>
        <FormFooter of={contactForm} />
      </Form>
    </>
  );
};
