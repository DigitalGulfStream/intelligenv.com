'use client'
import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import { peopleType } from "../../types/people";
import { FaQuoteLeft } from "react-icons/fa6";


const ItemArtific = ({
  people
}: { people: peopleType }) => {
  return (
    <div className='px-4'>
      <div className="text-white font-xl gradientbox p-10">
        <div>
          <span className="text-cyan-400 text-[60px]"><FaQuoteLeft /></span>
        </div>
        <div className=" text-slate-500 font-sans text-xl my-7">
          {people.discription}
        </div>
        <div className="flex items-center	">
            <div className="me-4">
            <img src={`/images/${people.url}`} alt='' className="rounded-full w-16	h-16" />
            </div>
            <div>
                <div className="text-l">{people.title}</div>
                <div className="text-slate-500 font-sans">{people.position}</div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default ItemArtific
