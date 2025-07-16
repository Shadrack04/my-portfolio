import { svg } from "@/constants/svg";
import Image from "next/image";
import React from "react";

type StackItemProps = {
  imageItem: {
    _id: string;
    url: string;
  };
};

export default function StackItem({ imageItem }: StackItemProps) {
  const imageUrl = imageItem.url;
  return (
    <div className=" card-shadow p-4 flex items-center justify-center flex-col rounded-full">
      <Image
        src={imageUrl}
        width={80}
        height={80}
        alt="language icon"
        className=" aspect-square size-18"
      />
      {/* <p className=" text-primary-text font-bold text-xs">Tailwindcss</p> */}
    </div>
  );
}

{
  /* <div className=" card-shadow border-primary-color border-1  bg-[#ECFAE5] md:w-[16rem] hover:scale-105 transition-all duration-300 flex items-center flex-col py-6 px-4 rounded-2xl">
  <FaReact className=" p-2 rounded-full bg-white text-primary-button size-20 mb-2" />
  <p className=" text-primary-text font-bold text-2xl my-4">React.Js</p>
  <p className=" text-content-text  text-center">
    A javascript library for building UI and single page apps
  </p>
</div>; */
}
