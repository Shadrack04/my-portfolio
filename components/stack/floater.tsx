import { FloatingElements } from "@/components/floating-elements";
import StackItem from "./stack-item";
import { getStacks } from "@/sanity/sanity-utils";

type StackImageType = {
  asset: {
    _id: string;
    url: string;
  };
};

export default async function Floater() {
  const stacks = await getStacks();

  return (
    <FloatingElements
      className="rounded-xl bg-secondary/10 p-8"
      titleClassName="text-2xl font-bold text-secondary-foreground"
      gridClassName="grid-cols-2 md:grid-cols-5"
    >
      {/* stack icons */}
      {stacks?.stackImage.map((item: StackImageType) => (
        <StackItem key={item.asset._id} imageItem={item.asset} />
      ))}
    </FloatingElements>
  );
}
