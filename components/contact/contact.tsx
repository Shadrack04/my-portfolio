import React from "react";
import Info from "./info";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className="costume-padding py-8 border-b-2 border-primary-color/50">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-8 underline underline-offset-10 decoration-primary-color">
          Get in Touch
        </h2>
      </div>
      <div className="costume-padding flex flex-col-reverse gap-8 md:gap-0 md:grid md:grid-cols-2 ">
        <Info />
        <ContactForm />
      </div>
    </div>
  );
}
