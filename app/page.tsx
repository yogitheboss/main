import Image from "next/image";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

export default function Home() {
  return (
    <main className="flex h-screen bg-slate-100  " style={{background:"#FAFAFA"}}>
      <LeftSection />
      <RightSection />
    </main>
  );
}
