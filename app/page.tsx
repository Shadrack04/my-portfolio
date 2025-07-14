import About from "@/components/about/about";
import Banner from "@/components/banner/banner";

import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <div className="pt-20 lg:pt-38 bg-foreground md:px-8">
      <div className="costume-padding sticky top-4">{/* <MyName /> */}</div>
      <Banner />
      <About />

      <Contact />
    </div>
  );
}
