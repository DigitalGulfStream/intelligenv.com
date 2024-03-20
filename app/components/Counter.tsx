'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ImEarth } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { RiMedal2Line } from "react-icons/ri";
import { PiMedalLight } from "react-icons/pi";

const Counter = () => {


    return (

        <section className='mb-10 mt-20 pb-5 sm:pb-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-5'>
            <div className='flex text-white mb-10 justify-center'>
                <div className='text-cyan-400 text-[60px] me-5'><ImEarth /></div>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <span className='text-4xl'>200</span>
                        <span className='text-cyan-400 text-xl ms-3'><FaPlus /></span>
                    </div>
                    <div className='font-sans text-xl text-slate-500'>Trusted Partner</div>
                </div>

            </div>
            <div className='flex text-white mb-10 justify-center'>
                <div className='text-cyan-400 text-[60px] me-5'><FaUsers /></div>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <span className='text-4xl'>100K </span>
                        <span className='text-cyan-400 text-xl ms-3'><FaPlus /></span>
                    </div>
                    <div className='font-sans text-xl text-slate-500'>Trusted Partner</div>
                </div>
            </div>
            <div className='flex text-white mb-10 justify-center'>
                <div className='text-cyan-400 text-[60px] me-5'><RiMedal2Line /></div>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <span className='text-4xl'>10 </span>
                        <span className='text-cyan-400 text-xl ms-3'><FaPlus /></span>
                    </div>
                    <div className='font-sans text-xl text-slate-500'>Trusted Partner</div>
                </div>

            </div>
            <div className='flex text-white mb-10 justify-center'>
                <div className='text-cyan-400 text-[60px] me-5'><PiMedalLight /></div>
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <span className='text-4xl'>24</span>
                        <span className='text-cyan-400 text-xl ms-3'><FaPlus /></span>
                    </div>
                    <div className='font-sans text-xl text-slate-500'>Trusted Partner</div>
                </div>

            </div>
        </section>

    )
}
export default Counter
