'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import ItemProjects from './ItemProjects'
import { projectType } from '../../types/project';


const Projects = () => {
    const [projects, setprojects] = useState<projectType[]>([
        {
            id: 0,
            url: 'project1.jpg',
            title: 'Agriculture Technology',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            id: 1,
            url: 'project2.jpg',
            title: 'Robotic Technology',
            discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        }
    ])

    return (

        <section>
            <div className='gradientbox mb-5 px-5 sm:px-20  py-24'>
                <div>
                    <div className='text-white text-4xl font-medium w-full text-center'>
                        Take A Look At Our <span className='text-cyan-400  '>Completed Projects</span>
                    </div>
                    <div className='text-center text-base text-slate-500 font-sans mt-4 text-l'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                        <br className='hidden md:block' />tempor incididunt ut labore et dolore magna aliqua
                    </div>
                </div>
                <div className='mt-20 gap-4 grid lg:grid-cols-2 grid-cols-1'>
                    {projects &&
                        projects.map((project, i) => (
                            <ItemProjects
                                key={i}
                                project={project}
                            />
                        ))}

                </div>
                <div className='w-full items-center	flex justify-center mt-10'>
                    <span className=' py-4 buttonCustomize transition duration-300 hover:-translate-y-4 text-white hover:text-black font-medium text-l border border-cyan-400 block float-start mt-10 rounded-full hover:bg-cyan-400'>View All Project</span>
                </div>
            </div>
        </section>

    )
}
export default Projects
