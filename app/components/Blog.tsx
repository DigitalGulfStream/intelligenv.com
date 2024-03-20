'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ItemBlog from './ItemBlog'
import { blogType } from '../../types/blog';


const Blogs = () => {
    const [blogs, setblogs] = useState<blogType[]>([
        {
            id: 0,
            url:'blog2.jpg',
            title: 'Transforming Industries And Changing Lives With AI',
            discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...'
        },
        {
            id: 1,
            url:'blog3.jpg',
            title: 'Exploring The Ethics Of AI And Robotics In Society',
            discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...'
        },
        {
            id: 2,
            url:'blog1.jpg',
            title: 'How AI Is Changing The Face Of Digital Marketing',
            discription:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...'
        }

    ])

    return (

        <section>
            <div className=' mb-5 px-5 sm:px-20'>
                <div>
                    <div className='text-white text-4xl font-medium w-full text-center'>
                        Latest Blog & <span className='text-cyan-400  '>Articles</span>
                    </div>
                    <div className='text-center text-base text-slate-500 font-sans mt-5 text-l'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                        <br />tempor incididunt ut labore et dolore magna aliqua
                    </div>
                </div>
                <div className='mt-20 gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {blogs &&
                        blogs.map((blog, i) => (
                            <ItemBlog
                                key={i}
                                blog={blog}
                            />
                        ))}

                </div>
            </div>
        </section>
    )
}
export default Blogs
