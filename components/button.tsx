import React, { ReactNode } from "react";

type ButtonType = {
  children: string;
};

export default function Button({ children }: ButtonType) {
  return <button className=" bg-primary-button">{children}</button>;
}
