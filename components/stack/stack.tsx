import React from "react";
import StackItem from "./stack-item";
import Floater from "./floater";

export default function Stack() {
  return (
    <div className="costume-padding my-12">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-3xl font-bold text-primary-text mb-8 ">
          My Tech Stack
        </h2>

        <p className=" text-content-text text-lg/relaxed">
          These are some of the tools i use to create aesthetic magic
        </p>
      </div>
      <div className=" border-1 border-gray-200">
        <Floater />
      </div>
    </div>
  );
}

{
  /* <div className=" my-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 md:px-8 place-items-center">
  <StackItem />
  <StackItem />
  <StackItem />
</div>; */
}
