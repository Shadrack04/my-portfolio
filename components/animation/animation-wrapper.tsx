"use client";

import React, { ElementType } from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimationWrapperProps extends MotionProps {
  children: React.ReactNode;
  // as?: keyof JSX.IntrinsicElements;
  as?: ElementType;
  className?: string;
}

export default function AnimationWrapper({
  children,
  as = "div",
  className,
  ...MotionProps
}: AnimationWrapperProps) {
  const MotionTag = motion[as || "div"];

  return (
    <MotionTag className={cn(className)} {...MotionProps}>
      {children}
    </MotionTag>
  );
}
