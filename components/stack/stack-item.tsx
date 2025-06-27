import React from "react";
import { FaReact } from "react-icons/fa";

export default function StackItem() {
  return (
    <div className=" card-shadow hover:border-1 hover:border-primary-color bg-background w-[16rem] hover:scale-105 transition-all duration-300 flex items-center flex-col py-6 px-4 rounded-2xl">
      <FaReact className=" p-2 rounded-full bg-white text-primary-button size-20 mb-2" />
      <p className=" text-primary-text font-bold text-2xl my-4">React.Js</p>
      <p className=" text-content-text  text-center">
        A javascript library for building UI and single page apps
      </p>
    </div>
  );
}
