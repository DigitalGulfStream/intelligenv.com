'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF ,FaYoutube , FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {


    return (

        <section className=''>
            <div className='mb-10 flex pt-10 items-center flex-col md:flex-row border-stone-700 pb-10 border-b'>
                <div className='w-full md:w-2/6 text-center md:text-start pb-5'>
                    <a href='#' className='text-white hover:text-cyan-400 text-sm me-4'>Home</a>
                    <a href='#' className='text-white hover:text-cyan-400 text-sm me-4'>Services</a>
                    <a href='#' className='text-white hover:text-cyan-400 text-sm me-4'>Projects</a>
                    <a href='#' className='text-white hover:text-cyan-400 text-sm me-4'>Contact</a>
                </div>
                <div className='w-full pb-10  md:w-2/6 flex justify-center order-first md:order-none'>
                    <img src='/images/Logo.svg' alt=''  className="w-44	" />
                </div>
                <div className='flex pb-10 flex-row-reverse w-full md:w-2/6  justify-center	'>
                    <a href='#' className='text-white hover:text-cyan-400 text-sm me-4'>Privacy & Policy</a>
                    <a href='#' className='text-white hover:text-cyan-400 text-sm me-4'>Terms Condition</a>
                </div>
            </div>
            <div className='flex mb-5 pb-10 md:flex-row flex-col'>
                <div className='w-full md:w-1/2 font-sans text-l pb-5  text-slate-500 md:text-left text-center '>
                    <p>Copyright Artifice © 2023. All rights reserved</p>
                </div>
                <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                    <a href='#' className='w-9 h-9 block text-white rounded-full hover:bg-cyan-400 hover:text-black socialMedia border border-cyan-400 block me-3 float-left text-l p-2'>
                    <FaFacebookF />
                    </a>
                    <a href='#' className='w-9 h-9 block text-white rounded-full hover:bg-cyan-400 hover:text-black socialMedia border border-cyan-400 block me-3 float-left text-l p-2'>
                    <FaTwitter />
                    </a>
                    <a href='#' className='w-9 h-9 block text-white rounded-full hover:bg-cyan-400 hover:text-black socialMedia border border-cyan-400 block me-3 float-left text-l p-2'>
                    <FaInstagram />
                    </a>
                    <a href='#' className='w-9 h-9 block text-white rounded-full hover:bg-cyan-400 hover:text-black socialMedia border border-cyan-400 block me-3 float-left text-l p-2'>
                    <FaYoutube />
                    </a>
                </div>
            </div>
        </section>
    )
}
export default Footer
