import Image from 'next/image'
import Link from 'next/link'
import { FaBuffer, FaBurst, FaBoltLightning, FaBahai, FaBacteria } from "react-icons/fa6";

const Technology = () => {

    return (
        <section>
            <div className='columns-1 flex-col lg:flex-row-reverse lg:flex-row flex  lg:columns-2 gap-10 mb-20 pb-20 px-5 sm:px-0'>

                <div className=' lg:ms-0 lg:ps-0 flex w-full flex-col ps-0  sm:ps-5 lg:w-1/2'>
                    <div className='w-full text-center md:text-left text-2xl md:text-4xl font-bold text-white'>
                        Transform Your Business With <span className='text-cyan-400 '>AI Technology</span>
                    </div>
                    <div className='flex sm:flex-row flex-col mt-10 w-full'>
                        <div className='flex  flex-col w-full sm:w-3/5 text-slate-500 '>
                            <div className='font-sans '>
                                Lorem veniam, quis nostrud exercitation ullamco laboris. Sed uteniri perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium
                            </div>
                            <div className='my-10'>
                                <span className='min-w-40	 py-3 buttonCustomize hover:text-white transition duration-300 hover:-translate-y-4 text-white hover:text-black font-medium text-l border border-cyan-400 block sm:float-start mt-10 rounded-full hover:bg-cyan-400 mt-10'>Learn More</span>
                            </div>
                        </div>
                        <div className='w-full  my-3 sm:my-0 px-5 sm:ps-5'>
                            <img src='/images/Technology2.jpg' alt='' className="w-full rounded-lg" />
                        </div>

                    </div>
                </div>
                <div className='w-full lg:w-1/2 px-5 ms:ps-0'>
                    <img src='/images/Technology.jpg' alt='' className="w-full rounded-lg" />
                </div>
            </div>
        </section>
    )
}
export default Technology