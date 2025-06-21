"use client";

import React, { useState } from "react";

export default function MyName() {
  const [fixName, setFixName] = useState(false);

  return (
    <div className=" mb-2">
      <h1 className=" text-special-text font-bold text-3xl">Shadrack</h1>
    </div>
  );
}
