'use client'
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { blogType } from "@/types/blog";
import { FaArrowRightLong } from "react-icons/fa6";


const ItemProject = ({
  blog
}: { blog: blogType }) => {

  return (
    <div style={{ backgroundImage: `url("/images/${blog.url}` }}  className="relative thumbnail_cover h-[507px] rounded-lg text-white object-cover bg-center">
    <div className="flex flex-col absolute text-white bottom-0 z-10 w-full p-8">
        <div className="text-lg">{blog.title}</div>
        <div className="font-sans text-l  text-slate-500">{blog.discription}</div>
    </div>
    </div>
  )
}
export default ItemProject
