import { CircleArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
};

export default function Button({ children }: ButtonType) {
  return (
    <button className=" bg-primary-button px-6 py-4 text-md flex items-center gap-2 font-bold text-white text-xl hover:bg-hover-color rounded-full transition duration-300">
      {children} <CircleArrowRight className=" size-6" />
    </button>
  );
}
