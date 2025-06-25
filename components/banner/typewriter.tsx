"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typewriter() {
  const [text, count] = useTypewriter({
    words: ["FRONTEND", "WEBSITE"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <h1 className=" text-primary-text text-4xl  font-bold mb-2">
        Hi, I&apos;m a SHADRACK
        <br />
        <span className="tracking-widest text-special-text">
          {text}
          <Cursor />
        </span>
        <br />
        <span className="tracking-widest text-special-text">DEVELOPER</span>
      </h1>
    </div>
  );
}
