import React from "react";
import { FaReact } from "react-icons/fa";

export default function StackItem() {
  return (
    <div className=" bg-background w-[20rem] flex items-center flex-col py-6 px-4 rounded-xl">
      <FaReact className=" p-2 rounded-full bg-white text-primary-button size-24 mb-2" />
      <p className=" text-primary-text font-bold text-2xl">React.Js</p>
      <p className=" text-content-text ">
        A javascript library for building UI
      </p>
    </div>
  );
}
