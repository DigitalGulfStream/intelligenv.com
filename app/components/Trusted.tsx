import Image from 'next/image'
import Link from 'next/link'
import { FaBuffer, FaBurst, FaBoltLightning, FaBahai, FaBacteria } from "react-icons/fa6";

const Trusted = () => {

    return (
        <section>
            <div className='mb-10 items-center	flex lg:flex-row flex-col'>
                <div className='lg:w-1/5 lg:mb-0 mb-10 justify-center text-xl md:text-3xl lg:flex-col text-white font-bold font-san flex w-full' >
                    <span className='text-cyan-400 me-2'>Trusted By </span>
                    <span> Big Companies</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full lg:w-4/5 justify-items-center'>
                    <div className='w-full flex justify-center pb-10 text-stone-700 hover:text-white transition duration-300 hover:-translate-y-6'>
                        <span className='text-5xl pe-3 '><FaBuffer /></span>
                        <span className='text-2xl'>Automation</span>
                    </div>
                    <div className='w-full justify-center flex items-center pb-10 text-stone-700 hover:text-white transition duration-300 hover:-translate-y-6'>
                        <span className='text-5xl pe-3 '><FaBurst /></span>
                        <span className='text-2xl'>Blocknet</span>
                    </div>
                    <div className='w-full justify-center  flex items-center pb-10 text-stone-700 hover:text-white transition duration-300 hover:-translate-y-6'>
                        <span className='text-5xl pe-3 '><FaBoltLightning /></span>
                        <span className='text-2xl'>Robotx</span>
                    </div>
                    <div className='w-full justify-center  flex items-center pb-10 text-stone-700 hover:text-white transition duration-300 hover:-translate-y-6'>
                        <span className='text-5xl pe-3 '><FaBacteria /></span>
                        <span className='text-2xl'>ziiblock</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Trusted
