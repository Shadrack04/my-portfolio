import React from "react";

type TitleProps = {
  title: string;
  subContent: string;
  isMainHeader: boolean;
};

export default function Title({
  title,
  subContent,
  isMainHeader = true,
}: TitleProps) {
  return (
    <div className=" flex flex-col items-center mb-4">
      <h2 className=" text-2xl font-bold text-primary-text ">{title}</h2>
      {isMainHeader && (
        <div className=" flex flex-col gap-0.5 mb-8">
          <div className=" w-40 h-0.5 bg-primary-color ml-4"></div>
          <div className=" w-40 h-0.5 bg-primary-color"></div>
        </div>
      )}

      <p className=" text-content-text text-lg/relaxed">{subContent}</p>
    </div>
  );
}
