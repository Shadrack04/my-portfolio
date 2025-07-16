import React from "react";
import Floater from "./floater";

type StackProps = {
  subTitle: string;
  subContent: string;
};

export default async function Stack({ subTitle, subContent }: StackProps) {
  return (
    <div className="costume-padding my-12">
      <div className=" flex flex-col items-center mb-4">
        <h2 className=" text-2xl font-bold text-primary-text mb-2 ">
          {subTitle}
        </h2>

        <p className=" text-content-text text-lg/relaxed">{subContent}</p>
      </div>

      <div className=" lg:w-[75%] mx-auto">
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
