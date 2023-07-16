import { SITE_NAME } from "@/constants";
import ContactForm from "./ContactForm";

export const metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description: "We are always here to help you, contact us anytime",
};

const Contact = () => {
  return (
    <div className="m-auto mt-32 max-w-3xl px-4 py-3 shadow-contactFormBoxShadow ">
      <h1 className="text-center text-4xl font-semibold">
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070C5] to-[#3BABCF]">Us</span>
      </h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
