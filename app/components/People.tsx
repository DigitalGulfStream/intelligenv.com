'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ItemPeople from './ItemPeople'
import { peopleType } from '../../types/people';
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
const Artifice = () => {
    const settings = {
        slidesToShow: 3,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    }
    const [peoples, setpeoples] = useState<peopleType[]>([
        {
            id: 0,
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua',
            title: 'Eline Claes',
            url:'people1.jpg',
            position:'Marketing Manager'
        },
        {
            id: 1,
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua',
            title: 'Alexander Engel',
            url:'people2.png',
            position:'Social Media Manager'
        },
        {
            id: 2,
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua',
            title: 'Sebastian Horn',
            url:'people3.jpg',
            position:'Project Manager'
        },
        {
            id: 3,
            discription: 'Lorem ipsum dolor sit amet consecte adipiscing eli sed eiusmod tempo incididu dolore magna aliqua',
            title: 'Eline Claes',
            url:'people4.jpg',
            position:'Marketing Manager'
        },
    ])

    return (

        <section className='mb-20'>
            <div className='columns-1 md:columns-2 mt-20 mb-5 px-5 sm:px-0'>
                <div className='text-4xl leading-normal font-bold text-start text-white'>
                    What <span className='text-cyan-400'>People Say</span> About Our <br/> AI Service & Technology
                </div>
                <div className=' text-slate-500 font-sans text-l '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </div>
            </div>
            <div className='w-full mt-20'>
                <Slider {...settings}>

                    {peoples &&
                        peoples.map((people, i) => (
                            <ItemPeople
                                key={i}
                                people={people}
                            />
                        ))}
                </Slider>
            </div>
        </section>

    )
}
export default Artifice