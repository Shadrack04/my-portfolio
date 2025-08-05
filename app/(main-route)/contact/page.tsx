import Contact from "@/components/contact/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
};

export default function page() {
  return (
    <div className="costume-padding py-8 bg-background">
      <Contact />
    </div>
  );
}
