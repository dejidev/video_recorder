import Image from "next/image";
import white from "../assets/whitelogo.png";

import { Work_Sans } from 'next/font/google';
const work = Work_Sans({ subsets: ['latin'] })

const Footer = () => {
    return (
        <footer className="bg-[#120B48] text-white py-12 mt-6 sm:flex justify-around text-sm items-start">

            <div className="flex justify-center items-center">
                <Image src={white} alt="white logo" className="py-4" />
            </div>

            <div className="text-center md:text-left py-4 gap-y-2">
                <h1 className="text-base">Menu</h1>
                <div className={work.className}>
                    <p>Home</p>
                    <p>Converter</p>
                    <p>How it works</p>
                </div>

            </div>

            <div className="text-center md:text-left  py-4 gap-y-2">
                <h1 className="text-base">About Us</h1>
                <div className={work.className}>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>

            </div>

            <div className="text-center md:text-left py-4 gap-y-2">
                <h1 className="text-base">Screen Record</h1>
                <div className={work.className}>
                    <p>Browser Window</p>
                    <p>Desktop</p>
                    <p>Application</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
