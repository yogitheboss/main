import Link from "next/link";
import styles from "./styles/header.module.css";
import localFont from 'next/font/local'
const myFont = localFont({ src: './custom/custom2.ttf' })
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className=" text-foreground p-10 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className={cn("text-2xl",myFont.className)}>
           Yograj Rajput
          </Link>
        </div>
        <nav className="flex gap-6">
          <Link href="/about" className="text-slate-50	hover:underline">
            About
          </Link>
          <Link href="/work" className="text-white  hover:underline">
            Work
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
