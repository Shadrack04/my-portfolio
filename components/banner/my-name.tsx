"use client";

import React, { useState } from "react";

export default function MyName() {
  const [fixName, setFixName] = useState(false);

  return (
    <div className="">
      <h1 className=" text-special-text font-bold text-2xl">Shadrack James</h1>
    </div>
  );
}
