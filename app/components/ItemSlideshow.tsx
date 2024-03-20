'use client'
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { slideType } from "@/types/slide";
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";


const ItemSlideshow = ({
  slide
}: { slide: slideType }) => {

  return (

    <div className="flex justify-center flex-col lg:flex-row px-5 lg:px-0 items-center lg:pb-36">
      <div className="lg:w-5/12 w-full">
        <div className="columns-1 text-center lg:text-start text-3xl xl:text-5xl font-bold text-white mt-20 mb-5 leading-normal">
          <span className="text-cyan-400 ">Empowering </span>
          <br className="hidden lg:block" />
          The Future With <br className="hidden lg:block" /> AI & Robotics
        </div>
        <div className="w-full flex justify-center  items-center lg:justify-start  flex-col lg:flex-row  items-center lg:items-start">
          <div className="lg:w-8/1	my-10">
            <span className=" px-10 me-4  py-4 buttonCustomize hover:text-black transition duration-300 hover:-translate-y-4 text-white hover:text-black font-medium text-l border border-cyan-400 rounded-full hover:bg-cyan-400 ">Explore Now</span>
          </div>
          <div className='flex flex-col ms-5 lg:mt-10 lg:mt-0'>
            <div className='flex items-center'>
              <span className='text-4xl text-white'>200</span>
              <span className='text-cyan-400 text-xl ms-3'><FaPlus /></span>
            </div>
            <div className='font-sans text-xl text-slate-500'>Trusted Partner</div>
          </div>
        </div>
      </div>
      <div className="w-full relative  lg:h-[350px]  pt-30 lg:w-4/12 ">
        <div className="lg:top-0 lg:right-[-30%] lg:absolute lg:w-[800px] mt-20 lg:mt-0">
          <img src='/images/robot2.png' alt='' className="w-full" />
        </div>

      </div>
      <div className=":w-full flex flex-col lg:w-3/12 lg:block hidden">
        <div className="flex mb-7 flex items-center">
          <div className="p-5  buttonPlay hover:text-black transition duration-300 text-white hover:text-black font-medium text-l border border-cyan-400 rounded-full hover:bg-cyan-400 "><FaPlay /></div>
          <div className="text-white text-l ms-5">Watch Intro</div>

        </div>
        <div className="text-slate-400 font-sans text-xl">
          Our AI and robotics company specializes in the development of cutting-edge technology for a wide range of industries.
        </div>
      </div>

    </div>
  )
}
export default ItemSlideshow
