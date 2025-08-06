"use client";

import { Database, Home, Send, UserRound } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import ThemeToggle from "../theme-toggle";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <DialogTitle></DialogTitle>
      <SheetTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <div className="fixed md:hidden p-2 w-12 h-12 bg-foreground rounded-xl bottom-6 right-1/2 translate-x-1/2 ">
          <Menu className=" z-99 text-primary-color" />
        </div>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className=" w-[95%] mx-auto rounded-2xl bg-background mb-4"
      >
        <nav className="">
          <ul className=" pt-12 flex flex-col gap-4 items-center ">
            <li
              className={` hover:text-primary-color text-primary-text transition-all duration-400 cursor-pointer hover:font-bold`}
            >
              <Link
                href="/"
                className={` ${pathname == "/" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
              >
                <Home className=" size-4" />
                Home
              </Link>
            </li>
            <li className="hover:text-primary-button transition-all text-primary-text duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
              <a
                href="/about"
                className={` ${pathname == "/about" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
              >
                <UserRound className=" size-4" />
                About
              </a>
            </li>
            <li className="hover:text-primary-button transition-all text-primary-text duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
              <a
                href="/projects"
                className={` ${pathname == "/projects" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
              >
                <Database className=" size-4" />
                Project
              </a>
            </li>
            <li className="hover:text-primary-button transition-all text-primary-text duration-400 cursor-pointer hover:font-bold flex items-center gap-1">
              <a
                href="/contact"
                className={` ${pathname == "/contact" ? " text-primary-button underline underline-offset-8 decoration-primary-color font-bold " : ""}flex items-center gap-1`}
              >
                <Send className=" size-4" />
                Contact
              </a>
            </li>
          </ul>
          {/* <div className=" md:hidden m-2 fixed left-0 bottom-6">
        <Database className=" text-primary-text size-4" />
      </div> */}
        </nav>
        <SheetFooter>
          <div className="  flex z-99 bg-background items-center text-[90%] justify-between">
            <div className=" flex gap-8 items-center">
              <div className=" size-6 hover:text-primary-color text-primary-text cursor-pointer">
                <FaGithub className=" size-6" />
              </div>
              <div className=" size-6 hover:text-primary-color text-primary-text cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="size-6 hover:text-primary-color text-primary-text cursor-pointer">
                <FaXTwitter />
              </div>
            </div>
            <ThemeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
