import Link from "next/link";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});
const LeftSection: React.FC = () => {
  return (
    <section className="flex-1 h-full flex items-center justify-center ">
      <div className={cn("text-6xl font-bold mx-auto max-w-screen-sm",pacifico.className)}>
        <p className="text-gray-800">
          Web Developer & Designer from{" "}
          <span className="text-orange-400	">India</span>
        </p>
      </div>
    </section>
  );
};

export default LeftSection;
