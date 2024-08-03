import Link from "next/link";
import styles from "./styles/header.module.css";
import Image from "next/image";
import rightImage from "@/assets/aboutPage.jpeg";

const RightSection: React.FC = () => {
  return (
    <section
      className="w-2/5
  max-w-screen-md	bg-slate-300 h-full max-h-full relative"
    >
      <div className="mix-blend-overlay absolute top-0 bottom-0 right-0 left-0 bg-slate-500"></div>
      <Image
        src={rightImage}
        alt="Image"
        className="rounded-md object-cover h-full"
      />
    </section>
  );
};

export default RightSection;
