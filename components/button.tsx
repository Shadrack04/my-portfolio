import { CircleArrowRight } from "lucide-react";
import React, { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  type?: "primary" | "secondary";
};

export default function Button({ children, type = "primary" }: ButtonType) {
  const base =
    " px-6 py-4 text-md flex items-center gap-2 font-bold text-xl cursor-pointer rounded-full transition duration-300";

  const style = {
    primary: base + " " + "bg-primary-color text-white hover:bg-hover-color",
    secondary:
      base +
      " border-2 border-primary-color hover:bg-primary-button hover:text-white text-primary-text",
  };
  return (
    <button className={`${style[type]}`}>
      {children} <CircleArrowRight className=" size-6" />
    </button>
  );
}

{
  /* <button className=" bg-primary-button px-6 py-4 text-md flex items-center gap-2 font-bold text-white text-xl hover:bg-hover-color rounded-full transition duration-300">
  {children} <CircleArrowRight className=" size-6" />
</button>; */
}
