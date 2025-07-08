// import FloatElements from "@/components/ui/floating-elements-demo";
import { FloatingElements } from "@/components/floating-elements";
import StackItem from "./stack-item";

export default function Floater() {
  return (
    <FloatingElements title="Trusted by" className="mt-20]">
      {/* Your floating elements here */}
      <StackItem />
      <StackItem />
    </FloatingElements>
  );
}
