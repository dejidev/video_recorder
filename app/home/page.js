import Image from "next/image";
import Link from "next/link";
import profile from "../assets/profile-circle.png";
import logo from "../assets/logo1.png";
import vid from "../assets/videos.png"
import arrow_down from "../assets/arrow-down.png";
import search from "../assets/search.png";


const page = () => {
    return (
        <div className="mx-6 md:mx-16 mt-3 md:mt-6 mb-6">
            <section className="flex justify-between items-center mb-4">
                <Link href="/" >
                    <Image src={logo} alt="logo" />
                </Link>

                <div className="flex items-center gap-3">
                    <Image src={profile} alt="profile" />
                    <p className="hidden md:block ">John Mark</p>
                    <Image src={arrow_down} alt="arrow" className="hidden md:block " />
                </div>
            </section>

            <div className="md:flex items-center justify-between mt-4 md:mt-8">
                <div>
                    <h1 className="font-bold text-4xl">Hello, John Mark</h1>
                    <p>Here is your recorded video</p>
                </div>
                <Image src={search} alt="search-icon" />
            </div>

            <div className="my-6">
                <p className="text-sm">Recent files </p>
            </div>


            <div>
                <Image src={vid} alt="" />
            </div>
        </div>
    )
}

export default page
