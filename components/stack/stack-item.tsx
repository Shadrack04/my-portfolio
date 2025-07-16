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
    </div>
  );
}
