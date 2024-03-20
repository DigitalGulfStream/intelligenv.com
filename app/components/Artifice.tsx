'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ItemArtific from './ItemArtific'
import { artificeType } from '../../types/artifice';
import { CiLock } from "react-icons/ci";
import { GrCloudComputer } from "react-icons/gr";
import { GrHostMaintenance } from "react-icons/gr";
import { PiMedalThin } from "react-icons/pi";

const Artifice = () => {
    const [artifices, setartifices] = useState<artificeType[]>([
        {
            id: 0,
            icon: <CiLock/>,
            title: 'Easy Integration',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        }, {
            id: 1,
            icon: <GrCloudComputer/>,
            title: 'New Technology',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        }, {
            id: 2,
            icon: <GrHostMaintenance/>,
            title: 'Better Reliability',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        }, {
            id: 3,
            icon: <PiMedalThin/>,
            title: '100% Secured',
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua'
        },
    ])

    return (

        <section className='mx-5 sm:mx-0'>
            <div className='columns-1'>
                <div className='columns-1 text-2xl sm:text-5xl font-bold text-center text-white mt-10 sm:mt-20 mb-5'>
                    Why Choose
                    <span className='text-cyan-400	'> Artifice ?</span>
                </div>
                <div className='text-slate-400 font-sans text-center mb-20'>
                    <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </span>
                    <br />
                    <span> incididunt ut labore et dolore magna aliqua enim ad minim veniam</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 border-stone-700 pb-20 border-b'>
                {artifices &&
                    artifices.map((artifice, i) => (
                        <ItemArtific
                            key={i}
                            artifice={artifice}
                        />
                    ))}
            </div>
        </section>

    )
}
export default Artifice
