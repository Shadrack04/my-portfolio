import About from "@/components/about/about";
import Banner from "@/components/banner/banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" pt-38 bg-foreground px-8">
      <Banner />
      <About />
    </div>
  );
}
