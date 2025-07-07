import React from "react";
import Info from "./info";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className="costume-padding py-8 border-b-2 border-primary-color/50 pb-20">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-8">
          Get in Touch
        </h2>
      </div>
      <div className="costume-padding grid grid-cols-2 ">
        <Info />
        <ContactForm />
      </div>
    </div>
  );
}
