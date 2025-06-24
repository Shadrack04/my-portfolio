import React from "react";
import StackItem from "./stack-item";

export default function Stack() {
  return (
    <div className=" my-12 grid grid-cols-3 gap-6 place-items-center">
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
    </div>
  );
}
