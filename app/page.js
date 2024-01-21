import Image from 'next/image';
import Header from './components/Header';
import Features from './components/Features';
import Work from './components/Work';
import home1 from "./assets/home1.jpg";
import home2 from "./assets/home2.jpg";
import home3 from "./assets/home3.jpg";
import over from "./assets/over.png";
import arrow from "./assets/arrow-right.png";
import Footer from './components/Footer';


import { Work_Sans } from 'next/font/google';
const work = Work_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <div className="mx-6 md:mx-16 my-3">
        <Header />

        <section className='md:flex py-8 md:py-16  lg:py-20'>
          <div className='md:w-1/2 flex flex-col justify-center mt-3 '>
            <h1 className='text-4xl md:text-[64px] font-bold py-4 md:leading-[64px]  whitespace-normal'>
              Show Them Don’t Just Tell
            </h1>

            <div className={work.className}>
              <p className='text-gray-700 md:mr-6 md:text-[20px] my-2'>
                Help your friends and loved ones by creating and sending
                videos on how to get things done on a website.
              </p>


              <div className='py-8 mb-16 md:mb-5'>
                <button className='flex items-center gap-3 px-4 py-3 md:px-[24px] md:py-[22px] text-white bg-[#120B48] rounded-lg' >
<a href='https://github.com/dejidev/recording_extension' target='_blank' rel='noopener noreferrer'>
  <p className='text-sm md:text-[18px] leading-[21.11px]'>Install HelpMeOut</p>
</a>

                  <Image src={arrow} alt='arr' />
                </button>
              </div>
            </div>
          </div>


          <div className='relative flex items-stretch  h-full md:w-1/2'>
            <div className='flex flex-col flex-1'>
              <Image src={home1} alt='home1' className='flex-1 object-cover mb-3 rounded-md' />
              <Image src={home2} alt='home2' className='flex-1 object-cover rounded-md ' />
            </div>

            <div className=' flex-1 pl-3 pr-4 md:pr-8 z-10 '>
              <Image src={home3} alt='home3' className='object-cover h-full z--10' style={{ zIndex: '100' }} />

            </div>
              <div className='absolute top-[-40px] right-[-15px] '>
                <Image src={over} alt='home1' />
              </div>
          </div>


        </section>

        <Features />
        <Work />
      </div>

      <Footer />
    </main>
  )
}
