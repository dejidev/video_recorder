import Image from "next/image";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon1.png";
import icon3 from "../assets/icon2.png";
import vid from "../assets/vid.png";


import { Work_Sans } from 'next/font/google';
const work = Work_Sans({ subsets: ['latin'] })

const Features = () => {
    return (
        <div className="my-8">
            <div className="text-center py-6">
                <h1 className="font-bold  text-4xl md:text-[40px] ">Features</h1>
                <div className={work.className}>
                    <p className="text-[#616163] text-base md:text-[20px] my-2">Key Highlights of Our Extension</p>

                </div>
            </div>
            <div className="md:flex h-full ">
                <div className="md:w-1/2 flex flex-col justify-between my-3 lg:my-6 md:mr-4">
                    {/* First Item */}
                    <div className="flex items-start gap-2 md:gap-3">
                        <Image src={icon1} alt="icon" />
                        <div>
                            <h2 className="text-[#1B233D] font-semibold text-lg md:text-[24px]">Simple Screen Recording</h2>
                            <div className={work.className}>
                                <p className="text-[#616163]">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>

                            </div>
                        </div>
                    </div>

                    {/* Second Item */}
                    <div className="flex items-start gap-2 md:gap-3 my-4">
                        <Image src={icon2} alt="icon" />
                        <div>
                            <h2 className="text-[#1B233D] font-semibold text-lg md:text-[24px]">Easy-to-Share URL</h2>
                            <div className={work.className}>
                                <p className="text-[#616163]">Share your recordings instantly with a single link. No attachments, no downloads.</p>

                            </div>
                        </div>
                    </div>

                    {/* Third Item */}
                    <div className="flex items-start gap-2 md:gap-3">
                        <Image src={icon3} alt="icon" />
                        <div>
                            <h2 className="text-[#1B233D] font-semibold text-lg md:text-[24px]">Revisit Recordings</h2>
                            <div className={work.className}>
                                <p className="text-[#616163]">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 my-6 md:my-0">
                    <Image src={vid} alt="vid" />
                </div>
            </div>
        </div>
    )
}

export default Features
