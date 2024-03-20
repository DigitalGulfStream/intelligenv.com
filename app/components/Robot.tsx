'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'


const Robot = () => {


    return (

        <section className='mt-36 flex relative'>
            <div className='outer_overly'></div>
            <div className='flex w-full items-center  mx-5 sm:mx-0'>
                <div className='w-1/2 relative outer hidden lg:block'>
                    <div className='inner'>
                        <img src='/images/robot.png' alt='' className="w-full " />
                    </div>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col justify-center'>
                    <div className='text-white text-2xl mt-10 sm:mt-0 sm:text-4xl font-medium w-full text-center lg:text-start'>
                        Unlock The Potential Of AI<br /> And Robotics With <span className='text-cyan-400  '>Artifice</span>
                    </div>
                    <div className='lg:text-start text-center text-base text-slate-500 font-sans mt-5 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    <br/> 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                    <div className='flex justify-center mb-5 mt-5 sm:mt-0'>
                    <span className="block px-10 py-4 buttonCustomize hover:text-black transition duration-300 hover:-translate-y-4 text-white hover:text-black font-medium text-l border border-cyan-400 block float-start mt-10 rounded-full hover:bg-cyan-400 ">Contact Us</span>
                    </div>
                </div>

            </div>
        </section>

    )
}
export default Robot
