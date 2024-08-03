import Link from "next/link";
import { BsTwitterX, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import { LuMail } from "react-icons/lu";
const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-foreground p-16 fixed bottom-0 left-0 w-full">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto text-2xl">
        <div className="flex gap-6">
          <Link href="https://instagram.com" className="hover:text-gray-600">
            <BsInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/yograj-rajput-205316229/"
            className=" hover:text-gray-600"
          >
            <BsLinkedin />
          </Link>
          <Link href="https://github.com/yogitheboss" className=" ">
            <BsGithub />
          </Link>
          <Link
            href="mailto:yograjrjpt123@gmail.com"
            className="hover:text-gray-600"
          >
            <LuMail />
          </Link>
          <Link
            href="https://x.com/Yograj_Rajput__"
            className="hover:text-gray-600"
          >
            <BsTwitterX />
          </Link>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Yograj Rajput
        </div>
      </div>
    </footer>
  );
};

export default Footer;
