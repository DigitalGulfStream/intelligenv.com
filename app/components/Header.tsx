'use client'
import Image from 'next/image'
import Link from 'next/link'
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    return (
        <section className='flex my-5 border-stone-700 pb-5 border-b px-5 lg:px-0'>
            <div className='w-1/2 lg:w-2/12'>
            <img src='/images/Logo.svg' alt=''  className="w-44	" />
            </div>
            <div className='lg:w-10/12 w-0 flex items-center justify-center text-lg invisible  lg:visible '>
                <a href='#' className='text-white hover:text-cyan-400 me-4'>Home</a>
                <a href='#' className='text-white hover:text-cyan-400 me-4'>Services</a>
                <a href='#' className='text-white hover:text-cyan-400 me-4'>Projects</a>
                <a href='#' className='text-white hover:text-cyan-400 me-4'>Contact</a>
            </div>
            <div className='w-1/2 lg:w-2/12 text-white flex items-center flex-row-reverse text-2xl '>
                <span className='border-stone-700 ms-3 ps-3 border-s'><RxHamburgerMenu/></span>
                <span><IoSearchOutline/></span>
            </div>
        </section>
    )
}
export default Header