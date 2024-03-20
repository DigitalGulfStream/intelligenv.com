'use client'
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { artificeType } from "../../types/artifice";
import { FaBattleNet } from "react-icons/fa6";


const ItemArtific = ({
  artifice
}: { artifice: artificeType }) => {

  return (

    <div className='flex flex-col p-10 itemArtific transition duration-300 hover:-translate-y-4 gradientbox'>
      <div className='mb-3'>
        <span className='rounded-full bg-cyan-400 block float-left text-4xl	p-3'>{artifice.icon}</span>
      </div>
      <div className='text-white mb-3 text-2xl'>
        {artifice.title}
      </div>
      <div className='text-slate-500 font-sans  text-justify	'>
        {artifice.discription}
      </div>
    </div>
  )
}
export default ItemArtific
