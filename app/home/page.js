import Image from "next/image"
import profile from "../assets/profile-circle.png";
import logo from "../assets/logo1.png";
import arrow_down from "../assets/arrow-down.png";
import search from "../assets/search.png"
const page = () => {
    return (
        <div className="mx-6 md:mx-16 mt-3 md:mt-6 mb-6">
            <section className="flex justify-between items-center mb-4">
                <Image src={logo} alt="logo" />

                <div className="flex items-center gap-3">
                    <Image src={profile} alt="profile" />
                    <p className="hidden md:block ">John Mark</p>
                    <Image src={arrow_down} alt="arrow" className="hidden md:block " />
                </div>
            </section>

            <div className="md:flex items-center justify-between mt-4">
                <div >
                <h1>Hello, John Mark</h1>
                <p>Here is your recorded video</p>        
                </div>
                <Image src={search} alt="search-icon"/>
            </div>

<div>
    <p className="text-sm">Recent files </p>
</div>

        </div>
    )
}

export default page
