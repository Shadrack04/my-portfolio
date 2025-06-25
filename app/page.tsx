import About from "@/components/about/about";
import Banner from "@/components/banner/banner";
import MyName from "@/components/banner/my-name";
import Projects from "@/components/projects/projects";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" pt-38 bg-foreground px-8">
      <div className="costume-padding sticky top-4">
        <MyName />
      </div>
      <Banner />
      <About />
      <Projects />
    </div>
  );
}
