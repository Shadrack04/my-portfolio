"use client";

import React, { useEffect, useState } from "react";

export default function MyName() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(scrollY);

  const show = scrollY > 150 ? "" : "hidden";

  return (
    <div className={`${show} mb-2 z-99 w-fit m-0`}>
      <p className=" text-special-text font-bold text-3xl">Shadrack</p>
    </div>
  );
}
