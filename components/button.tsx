import React, { ReactNode } from "react";

type ButtonType = {
  children: string;
};

export default function Button({ children }: ButtonType) {
  return (
    <button className=" bg-primary-button px-6 py-2 text-md font-bold text-primary-text hover:bg-hover-color rounded-xl">
      {children}
    </button>
  );
}
