'use client'
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { projectType } from "../../types/project";
import { FaArrowRightLong } from "react-icons/fa6";


const ItemProject = ({
  project
}: { project: projectType }) => {

  return (
    <div className="relative projectItem">
      <div className=' text-white flex flex-col items-center relative  justify-center'>
        <img src={`/images/${project.url}`} alt='' className="rounded-lg" />
        <div className="bg-slate-950	w-4/5	border text-center px-7 py-8 border-slate-800 rounded-xl absolute bottom-[-20%]">
          <div className="text-l sm:text-2xl">{project.title}</div>
          <div className="font-sans	text-slate-500 text-lg	my-5 hidden sm:block">{project.discription}</div>
          <div className="text-cyan-400 flex justify-center items-center  ">
            <span className="hidden sm:block">View Details</span>
             <span className="ps-2 pt-1 hidden sm:block"><FaArrowRightLong /></span>
             </div>
        </div>
      </div>
    </div>
  )
}
export default ItemProject
