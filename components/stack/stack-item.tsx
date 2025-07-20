import React from "react";

type StackItemProps = {
  icon: {
    title: string;
    svg: string;
  };
};

export default function StackItem({ icon }: StackItemProps) {
  return (
    <div className="stack-card-shadow hover:-translate-y-1 transition-transform duration-300 p-4 flex items-center gap-2 justify-center flex-col rounded-xl">
      <div
        className=" w-8 h-8 text-primary-color"
        dangerouslySetInnerHTML={{ __html: icon?.svg }}
      />
      <p className=" text-lg text-primary-text font-bold">{icon.title}</p>
    </div>
  );
}
