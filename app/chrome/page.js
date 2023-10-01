import Image from "next/image";
import logo from "../assets/logo1.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import or from "../assets/or.png";

const page = () => {
    return (
        <div className="mx-6 md:mx-16 mt-3 md:mt-6 mb-6" >
            <Image src={logo} alt="logo" />
            <div className="flex flex-col justify-center items-center gap-3 text-center">
                <h1 className="text-2xl md:text-[32px] font-bold">Log in or Sign up</h1>
                <p className=" text-sm font-light md:w-[320px]  mb-6">Join millions of others in sharing successful moves on HelpMeOut.</p>

            </div>
            <div className="flex flex-col justify-center items-center gap-6 mb-3 md:mb-6">
                <div className="flex items-center justify-center gap-4 border border-[#141414] text-[#141414] px-[10px] py-[9px] w-[250px] sm:w-[382px] md:w-[475px] text-sm md:text-base rounded-xl">
                    <Image src={google} alt="icon" />
                    <p>Continue with google</p>
                </div>
                <div className="flex items-center justify-center gap-4 border border-[#141414] text-[#141414] px-[10px] py-[9px] w-[250px] sm:w-[382px] md:w-[475px] text-sm md:text-base rounded-xl">
                    <Image src={fb} alt="icon" />
                    <p>Continue with facebook</p>
                </div>
                <Image src={or} alt="or" />

            </div>
            <div className="flex flex-col justify-center items-center gap-6">


                <div>
                    <label className="text-sm">
                        Email
                    </label>
                    <div className="mt-2 flex items-center justify-center gap-4 border border-[#141414] text-[#141414] px-[10px] py-[9px] w-[250px] sm:w-[382px] md:w-[475px] placeholder:text-sm md:placeholder:text-base rounded-xl">
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="bg-transparent focus:outline-none w-full ml-2"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm">Password</label>
                    <div className="mt-2  flex items-center justify-center gap-4 border border-[#141414] text-[#141414] px-[10px] py-[9px] w-[250px] sm:w-[382px] md:w-[475px] placeholder:text-sm md:placeholder:text-base  rounded-xl">
                        <input
                            type="password"
                            placeholder="Enter your email address"
                            className="bg-transparent focus:outline-none w-full ml-2"
                        />
                    </div>
                </div>


                <div className="flex items-center justify-center gap-4 border bg-[#120B48] text-[#fff] px-[10px] py-[9px] w-[250px] sm:w-[382px] md:w-[475px] text-sm md:text-base  rounded-xl">
                    <p>Sign In</p>
                </div>
            </div>
        </div>
    )
}

export default page
