// import FloatElements from "@/components/ui/floating-elements-demo";
import { FloatingElements } from "@/components/floating-elements";
import StackItem from "./stack-item";

export default function Floater() {
  return (
    <FloatingElements
      className="rounded-xl bg-secondary/10 p-8"
      titleClassName="text-2xl font-bold text-secondary-foreground"
      gridClassName="grid-cols-2 md:grid-cols-5"
    >
      {/* Your floating elements here */}
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
      <StackItem />
    </FloatingElements>
  );
}
