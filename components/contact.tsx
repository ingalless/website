import Form, { Field, useForm } from "rc-field-form";
import { Email, User, Company } from "../svg";

export default function Contact() {
  const [form] = useForm();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 bg-white rounded shadow-lg border-separate overflow-hidden">
      <div className="space-y-4 bg-blue-900 text-white p-8">
        <h2 className="text-4xl tracking-tight font-medium text-left pb-4">
          Ready to Succeed?
        </h2>
        <p>
          Let us know your product idea or big problem you want solving. We're
          here if you just want a technical discussion too.
        </p>
        <p>
          Please fill in the contact form as completely as possible to ensure we
          can provide you with the best answer possible.
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
      <Form form={form} className="flex flex-col space-y-8 p-8">
        <Field name="name">
          <Input icon={<User />} placeholder="Name" type="text" name="name" />
        </Field>
        <Field name="email">
          <Input
            icon={<Email />}
            type="email"
            name="email"
            placeholder="john@example.com"
          />
        </Field>
        <Field>
          <Input
            icon={<Company />}
            type="text"
            name="company"
            placeholder="ACME Inc"
          />
        </Field>
        <TextArea
          name="about"
          placeholder="Tell us about your project. Be as descriptive as possible."
        />
        <button className="rounded-sm bg-blue-900 hover:bg-blue-800 transition-colors text-white px-4 py-2 font-bold">
          Send
        </button>
      </Form>
    </div>
  );
}

interface InputProps {
  type: "text" | "email";
  name: string;
  placeholder?: string;
  icon?: React.ReactNode;
}
const Input = ({ type, name, placeholder, icon }: InputProps) => {
  return (
    <div className="relative text-gray-400 focus-within:text-gray-600">
      {icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          {icon}
        </div>
      )}
      <input
        placeholder={placeholder}
        name={name}
        id={name}
        type={type}
        className={`block ${
          icon ? "pl-9" : ""
        } transition-colors focus:outline-none p-2 focus:shadow-inner shadow-sm focus:ring-indigo-500 focus:border-blue-500 w-full sm:text-sm border border-gray-300 rounded-sm`}
      />
    </div>
  );
};

interface TextAreaProps {
  name: string;
  placeholder?: string;
}
const TextArea = ({ name, placeholder }: TextAreaProps) => {
  return (
    <textarea
      className="transition-colors p-2 focus:shadow-inner shadow-sm focus:outline-none focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-sm"
      placeholder={placeholder}
      name={name}
      id={name}
      cols={30}
      rows={10}
    ></textarea>
  );
};
