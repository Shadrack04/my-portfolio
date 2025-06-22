import { CircleArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
};

export default function Button({ children }: ButtonType) {
  return (
    <button className=" bg-primary-button px-4 py-2 text-md flex items-center gap-2 font-bold text-white hover:bg-hover-color rounded-xl">
      {children} <CircleArrowRight className=" size-4" />
    </button>
  );
}
