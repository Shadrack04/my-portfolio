"use client";

import React, { ElementType, ReactNode } from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimationWrapperProps extends MotionProps {
  children: ReactNode;
  // as?: keyof JSX.IntrinsicElements;
  as?: ElementType;
  className?: string;
  [key: string]: any;
}

export default function AnimationWrapper({
  children,
  as = "div",
  className,
  ...MotionProps
}: AnimationWrapperProps) {
  // const MotionTag = motion[as || "div"];
  const isStringTag = typeof as === "string";
  // const MotionTag = isStringTag ? motion[as] : motion(as);
  const MotionTag: ElementType =
    isStringTag && as in motion
      ? (motion[as as keyof typeof motion] as ElementType)
      : motion(as);

  return (
    <MotionTag className={cn(className)} {...MotionProps}>
      {children}
    </MotionTag>
  );
}
