import About from "@/components/about/about";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

export default function page() {
  return (
    <div className="costume-padding py-8 bg-background">
      <About />;
    </div>
  );
}
