import Projects from "@/components/projects/projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Project",
};

export default function page() {
  return (
    <div className=" lg:px-24 px-4 py-8 bg-background">
      <Projects />
    </div>
  );
}
