import { Toaster } from "react-hot-toast";
import About from "@/components/about/about";
import Banner from "@/components/banner/banner";

import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="pt-20 lg:pt-30 bg-foreground md:px-8">
      <div className=" 2xl:w-[86rem] mx-auto ">
        <div className="costume-padding sticky top-4">{/* <MyName /> */}</div>
        <Toaster position="top-right" />
        <Banner />
        <About />

        <Contact />
      </div>
    </div>
  );
}
