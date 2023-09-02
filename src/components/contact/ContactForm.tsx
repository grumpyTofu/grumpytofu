import { createForm, email, minLength, required, reset } from '@modular-forms/solid';
import { TextField } from '../TextField';
import { ActionButton } from '../ActionButton';

const grecaptchaKeyId = import.meta.env.PUBLIC_GRECAPTCHA_KEY_ID;

export const ContactForm = () => {
  const [contactForm, { Form, Field }] = createForm<{
    name: string;
    email: string;
    message: string;
  }>();

  console.log('ContactForm', contactForm);

  return (
    <Form
      class="space-y-12 md:space-y-14 lg:space-y-16"
      onSubmit={(values) => {
        window.grecaptcha.enterprise.ready(async () => {
          const token = await window.grecaptcha.enterprise.execute(grecaptchaKeyId, {
            action: 'LOGIN',
          });
          console.log('token', token);
          // IMPORTANT: The 'token' that results from execute is an encrypted response sent by
          // reCAPTCHA Enterprise to the end user's browser.
          // This token must be validated by creating an assessment.
          // See https://cloud.google.com/recaptcha-enterprise/docs/create-assessment
        });
      }}
    >
      <div class="space-y-8 md:space-y-10 lg:space-y-12">
        <Field
          name="name"
          validate={[
            required('Please enter your name.'),
            minLength(5, 'Please enter your full name'),
          ]}
        >
          {(field, props) => (
            <TextField
              {...props}
              label="Full Name"
              type="text"
              placeholder="First and Last name"
              class="col-span-2 md:col-span-1"
              onChange={props.onChange}
              onBlur={props.onBlur}
              error={field.touched && field.error ? field.error : ''}
              value={field.value}
            />
          )}
        </Field>
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
              label="Email"
              type="email"
              placeholder="jane.doe@example.com"
              class="col-span-2 md:col-span-1"
              onChange={props.onChange}
              onBlur={props.onBlur}
              error={field.touched && field.error ? field.error : ''}
              value={field.value}
            />
          )}
        </Field>
        <Field
          name="message"
          validate={[
            required('Please provide a message.'),
            minLength(8, 'Please provide a longer message.'),
          ]}
        >
          {(field, props) => (
            <TextField
              {...props}
              label="Message"
              type="text"
              class="col-span-3"
              onChange={props.onChange}
              onBlur={props.onBlur}
              error={field.touched && field.error ? field.error : ''}
              value={field.value}
              rows={5}
              required
            />
          )}
        </Field>
      </div>
      <div class="col-span-3 flex justify-end space-x-6">
        <ActionButton
          variant="secondary"
          label="Reset"
          type="button"
          onClick={() => reset(contactForm)}
        />
        <ActionButton
          variant="primary"
          label="Submit"
          type="submit"
          disabled={contactForm.dirty && contactForm.touched ? contactForm.invalid : true}
        />
      </div>
    </Form>
  );
};
