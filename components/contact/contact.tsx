import React from "react";
import Info from "./info";
import ContactForm from "./contact-form";

export default function Contact() {
  return (
    <div className="costume-padding py-8 border-b-2 border-primary-color/50 pb-20">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-8">
          Get in Touch
          <div className=" flex flex-col gap-0.5 mt-2 ">
            <div className=" w-40 h-0.5 bg-primary-color ml-4"></div>
            <div className=" w-40 h-0.5 bg-primary-color"></div>
          </div>
        </h2>
      </div>
      <div className="costume-padding flex flex-col-reverse gap-8 md:gap-0 md:grid md:grid-cols-2 ">
        <Info />
        <ContactForm />
      </div>
    </div>
  );
}
