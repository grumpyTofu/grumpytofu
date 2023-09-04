import { email, maxLength, minLength, required } from '@modular-forms/solid';
import { TextField } from '../TextField';
import { submitContactForm, contactForm, Form, Field } from './contact.utils';
import { onMount } from 'solid-js';
import { createToast, setToken, toasts, token } from '../../store';

const grecaptchaKeyId = import.meta.env.PUBLIC_GRECAPTCHA_KEY_ID;

export const ContactForm = () => {

  onMount(() => {
    window.grecaptcha.enterprise.ready(async () => {
      try {
        const token = await window.grecaptcha.enterprise.execute(grecaptchaKeyId, {
          action: 'LOGIN',
        });
        setToken(token);
      } catch (error) {
        createToast({
          id: toasts.length,
          variant: 'error',
          message: 'Captcha failed to load. Please refresh and try again.',
        });
      }
    });
  });

  return (
    <Form class="space-y-12 md:space-y-14 lg:space-y-16" onSubmit={submitContactForm}>
      <div class="space-y-8 md:space-y-10 lg:space-y-12">
        <Field
          name="name"
          validate={[
            required('Please enter your name.'),
            minLength(3, 'Please enter your full name'),
            maxLength(40, 'Wow that is a long name! Do you happen do have a nickname?'),
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
              required
            />
          )}
        </Field>
        <Field
          name="email"
          validate={[required('Please enter your email.'), email('Invalid email address.')]}
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
              required
            />
          )}
        </Field>
        <Field
          name="message"
          validate={[
            required('Please provide a message.'),
            minLength(8, 'Please provide a longer message.'),
            maxLength(
              750,
              'There is only one of me reading these messages... Can you try keeping it shorter?'
            ),
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
              placeholder='Please enter your message here.'
              rows={5}
              required
            />
          )}
        </Field>
      </div>
      <div class="col-span-3 flex justify-end space-x-6">
        <button type="submit">Submit</button>
      </div>
    </Form>
  );
};
