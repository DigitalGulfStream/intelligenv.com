'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ItemExplore from './ItemExplore'
import { exploreType } from '@/types/explore';
import { PiCubeThin } from "react-icons/pi";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { PiCubeTransparentThin, PiCubeFocusThin } from "react-icons/pi";


const Explore = () => {
    const [explores, setexplores] = useState<exploreType[]>([
        {
            id: 0,
            url: 'Explore1.jpg',
            icon: <PiCubeThin />,
            title: 'Easy Integration',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        }, {
            id: 1,
            url: 'Explore2.jpg',
            icon: <HiOutlineCubeTransparent />,
            title: 'Machine Learning',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        }, {
            id: 2,
            url: 'Explore3.jpg',
            icon: <PiCubeTransparentThin />,
            title: 'AI For Conversation',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        }, {
            id: 3,
            url: 'Explore4.jpg',
            icon: <PiCubeFocusThin />,
            title: 'Internet Of Things',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        },
    ])

    return (
        <section>
            <div className='columns-1 flex-col md:flex-row flex  md:columns-2 mb-20 pb-20 mx-5 sm:mx-0'>
                <div className="text-left md:w-2/6 w-full">
                    <div className='text-3xl md:text-5xl text-white  mb-5 text-center md:text-left'>Explore Best <span className='text-cyan-400'>AI Services</span></div>
                    <div className='text-base text-slate-500 font-sans  text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur <br className='hidden md:block' /> adipiscing elit sed eiusmod tempor</div>
                    <div className='flex justify-center	 mb-5 mt-10 sm:mt-0'>
                        <span className='px-10 py-3  buttonCustomize hover:text-white transition duration-300 hover:-translate-y-4 text-white hover:text-black font-medium text-l border border-cyan-400 block md:float-start mt-10 rounded-full hover:bg-cyan-400 '>All Services</span>
                    </div>

                </div>
                <div className='md:w-4/6 grid md:grid-cols-2 grid-cols-1 gap-4 w-full'>
                    {explores &&
                        explores.map((explore, i) => (
                            <ItemExplore
                                key={i}
                                explore={explore}
                            />
                        ))}

                </div>
            </div>

        </section>
    )
}
export default Explore