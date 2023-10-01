import Image from "next/image";
import { Inter } from 'next/font/google';
import skel from "../assets/skel.png";

import { Work_Sans } from 'next/font/google';
const work = Work_Sans({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })


const Work = () => {
    return (
        <div className="my-16">
            <div className="text-center py-6">
                <h1 className="font-bold  text-4xl md:text-[40px] ">How it works</h1>
            </div>
            <section className={inter.className}>
                <div className="py-4 md:flex gap-4">
                    {/* Section 1 */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p className="text-[32px] font-bold py-[14px] px-[26px] bg-[#120B48] text-white rounded-full w-16 h-16 flex items-center justify-center">
                            1
                        </p>
                        <div className="text-center">
                            <h2 className="text-[28px] font-semibold text-[#1B233D]">Record Screen</h2>
                            <div className={work.className}>
                                <p>Click the Start Recording button in our extension. Choose which part of your screen to capture and who you want to send it to.</p>

                            </div>
                        </div>
                        <Image src={skel} alt="videoskeleton" className="mt-3"/>
                    </div>
                    {/* Section 2 */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p className="text-[32px] font-bold py-[14px] px-[26px] bg-[#120B48] text-white rounded-full w-16 h-16 flex items-center justify-center">
                            2
                        </p>
                        <div className="text-center">
                            <h2 className="text-[28px] font-semibold text-[#1B233D]">Share Your Recording</h2>
                            <div className={work.className}>
                                <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>

                            </div>
                        </div>
                        <Image src={skel} alt="videoskeleton" className="mt-3" />
                    </div>
                    {/* Section 3 */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        <p className="text-[32px] font-bold py-[14px] px-[26px] bg-[#120B48] text-white rounded-full w-16 h-16 flex items-center justify-center">
                            3
                        </p>
                        <div className="text-center">
                            <h2 className="text-[28px] font-semibold text-[#1B233D]">Learn Effortlessly</h2>
                            <div className={work.className}>
                                <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>

                            </div>
                        </div>
                        <Image src={skel} alt="videoskeleton" className="mt-3" />
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Work
