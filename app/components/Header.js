import Image from "next/image";
import logo1 from "../assets/logo1.png";
import Link from "next/link";
import { Work_Sans } from 'next/font/google';
const work = Work_Sans({ subsets: ['latin'] })

const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <Image src={logo1} alt="logo" />
            <div className="md:flex items-center gap-12 hidden">
                <p>Features</p>
                <p>How it works</p>

            </div>
            <div>
                <Link href="/chrome">
                    <p className="text-[#120B48] text-sm md:text-base font-semibold">Get Started</p>
                </Link>
            </div>
        </div>

    )
}

export default Header
