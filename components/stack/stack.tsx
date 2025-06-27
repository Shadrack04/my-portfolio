import React from "react";
import StackItem from "./stack-item";

export default function Stack() {
  return (
    <div className="costume-padding my-12">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-8 underline underline-offset-10 decoration-primary-color">
          My Tech Stack
        </h2>

        <p className=" text-content-text text-lg/relaxed">
          These are some of the tools i use to create aesthetic magic
        </p>
      </div>
      <div className=" my-12 grid grid-cols-1 md:grid-cols-3 gap-2 px-8 place-items-center">
        <StackItem />
        <StackItem />
        <StackItem />
      </div>
    </div>
  );
}
