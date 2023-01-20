"use client";

import { Card } from "@portfolio/components";
import { LoadingSpinnerContext } from "@portfolio/components/spinner";
import TextField from "@portfolio/components/textField";
import { ToastContext, ToastError } from "@portfolio/components/toast";
import { ContactRequest } from "@portfolio/types/contact";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { GrecaptchaContext } from "@portfolio/components/grecaptcha";

const ContactForm = () => {
  const { toasts, createToast } = useContext(ToastContext);
  const { startLoading, stopLoading } = useContext(LoadingSpinnerContext);
  const { token, setToken, grecaptcha, grecaptchaKeyId } = useContext(GrecaptchaContext);

  const formik = useFormik<ContactRequest>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Your name is probably more than 2 characters... let's try that again.")
        .max(40, "Wow that is a long name! Do you happen do have a nickname?")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().max(1000, "There is only one of me reading these messages... Can you try keeping it shorter?"),
    }),
    onSubmit: async (values) => {
      startLoading();

      const nextToastId = toasts.length;

      try {
        if (!token) throw new ToastError("Captcha failed to load. Please refresh and try again.");

        const response = await fetch("api/contact", { method: "POST", headers: { Authorization: token }, body: JSON.stringify(values) });
        const result = await response.json();

        if (response.status !== 200) {
          if (result.type && result.type === "toast-error" && result.message) throw new ToastError(result.message);
          throw result;
        }

        formik.resetForm();
        createToast({ id: nextToastId, variant: "message", message: "Sending message" });
      } catch (error) {
        if (!error || typeof error !== "object") {
          createToast({ id: nextToastId, variant: "error", message: "An unexpected error occurred. Please try again later." });
          return;
        }

        if (error instanceof ToastError) {
          createToast({ id: nextToastId, variant: "error", message: error.message });
          return;
        }

        formik.setErrors(error);
        createToast({ id: nextToastId, variant: "error", message: "Something went wrong. Please try again later." });
      } finally {
        try {
          const newToken = await grecaptcha.enterprise.execute(grecaptchaKeyId, { action: "login" });
          setToken(newToken);
        } catch (error) {
          createToast({ id: toasts.length, variant: "error", message: "Captcha failed to load. Please refresh and try again." });
        }

        stopLoading();
      }
    },
  });
  return (
    <Card className="!bg-slate-800">
      <form onSubmit={formik.handleSubmit} className="w-[inherit] grid grid-cols-2 gap-4">
        <TextField
          label="Full Name"
          id="name"
          name="name"
          type="text"
          placeholder="First and Last name"
          className="col-span-2 md:col-span-1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
        />

        <TextField
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="johnsmith@gmail.com"
          className="col-span-2 md:col-span-1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        />

        <TextField
          className="col-span-3"
          label="Message"
          id="message"
          name="message"
          rows={4}
          placeholder="Write your message here..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          error={formik.touched.message && formik.errors.message ? formik.errors.message : null}
        />

        <div className="col-span-3 flex justify-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
