import Form, { Field, useForm } from "rc-field-form";
import { Email, User, Company, Info, Error, Success } from "../svg";
import axios from "axios";
import { useState } from "react";
interface FormValues {
  name?: string;
  email?: string;
  company?: string;
  about?: string;
}
type FormState = "success" | "error";
export default function Contact() {
  const [form] = useForm<FormValues>();
  const [submissionState, setSubmissionState] = useState<FormState>();
  const submit = async () => {
    try {
      const values = await form.getFieldsValue();
      await axios.post("/api/contact", values);
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState("error");
      if (error.response) {
        console.error("Form failed to submit");
      } else {
        console.error(error);
      }
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-white rounded shadow-2xl border-separate overflow-hidden">
      <div className="space-y-4 bg-blue-900 text-white p-8">
        <h2 className="text-4xl tracking-tight font-medium text-left pb-4">
          Ready to Succeed?
        </h2>
        <p>
          We'd love to hear how we can help your company. We're also here if you
          just want a technical discussion.
        </p>
        <p>
          Please fill in the contact form as completely as possible to ensure we
          can provide you with the best solution possible.
        </p>
        <p>
          Alternatively write to us directly at{" "}
          <a
            className="underline text-blue-200"
            href="mailto:hello@fovealdev.com"
          >
            hello@fovealdev.com
          </a>
        </p>
      </div>
      <Form form={form} className="flex flex-col space-y-6 p-8">
        <>
          <Field name="name">
            <Input icon={<User />} placeholder="Name" type="text" />
          </Field>
          <Field name="email">
            <Input
              icon={<Email />}
              type="email"
              placeholder="john@example.com"
            />
          </Field>
          <Field name="company">
            <Input icon={<Company />} type="text" placeholder="ACME Inc" />
          </Field>
          <Field name="about">
            <TextArea name="about" placeholder="Tell us about your project." />
          </Field>
          {submissionState === undefined && <InfoBox />}
          {submissionState === "success" && <SuccessBox />}
          {submissionState === "error" && <ErrorBox />}
          <button
            onClick={submit}
            className="rounded-sm bg-blue-900 hover:bg-blue-800 transition-colors text-white px-4 py-2 font-bold"
          >
            Send
          </button>
        </>
      </Form>
    </div>
  );
}

const SuccessBox = () => (
  <div className="border p-2 flex place-items-center space-x-2 border-green-100 bg-green-50 text-green-900 font-semibold rounded text-sm">
    <Success />
    <p>We've got your email! You should receive a confirmation email soon.</p>
  </div>
);
const ErrorBox = () => (
  <div className="border p-2 flex place-items-center space-x-2 border-red-200 bg-red-100 text-red-900 font-semibold rounded text-sm">
    <Error />
    <p>Please make sure all the above fields are filled in correctly</p>
  </div>
);
const InfoBox = () => (
  <div className="border p-2 flex place-items-center space-x-2 border-blue-100 bg-blue-50 text-blue-900 font-semibold rounded text-sm">
    <Info />
    <p>Please fill in all the details above so we can best assist you</p>
  </div>
);

interface InputProps {
  type: "text" | "email";
  placeholder?: string;
  icon?: React.ReactNode;
  value?: string;
}
const Input = ({
  type,
  placeholder,
  icon,
  value = "",
  ...props
}: InputProps) => {
  return (
    <div className="relative text-gray-600">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        value={value}
        {...props}
        placeholder={placeholder}
        type={type}
        className={`block ${
          icon ? "pl-9" : ""
        } transition-colors focus:outline-none p-2 focus:shadow-inner shadow-sm w-full sm:text-sm border rounded-sm border-gray-300 focus:border-blue-900`}
      />
    </div>
  );
};

interface TextAreaProps {
  name: string;
  placeholder?: string;
  value?: string;
}
const TextArea = ({
  name,
  placeholder,
  value = "",
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      className="text-gray-600 transition-colors p-2 focus:shadow-inner shadow-sm focus:outline-none focus:border-blue-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
      placeholder={placeholder}
      name={name}
      id={name}
      cols={30}
      rows={10}
      value={value}
      {...props}
    ></textarea>
  );
};
