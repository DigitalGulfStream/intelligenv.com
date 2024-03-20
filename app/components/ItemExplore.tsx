import Image from 'next/image'
import Link from 'next/link'
'use client'
import { PiCubeThin } from "react-icons/pi";
import { exploreType } from "@/types/explore";

// className="h-screen flex items-center justify-center bg-cover"
// style={{ backgroundImage: 'url("/path/to/your/image.jpg")' }}
// bg-[url("/images/${explore.url}")] 

const ItemExplore = ({
    explore
}: { explore: exploreType }) => {
    return (
        <section>
            <div style={{ backgroundImage: `url("/images/${explore.url}` }} className="bg-cover bg-center h-[450px] overflow-hidden rounded-lg">
                <div className='h-full w-full p-5 md:p-10 overly group transition duration-300'>
                    <div className='h-full w-full  text-white relative  transition group-hover:duration-300 group-hover:-translate-y-4 '>
                        <div className='text-8xl text-cyan-400 group-hover:duration-300  absolute invisible group-hover:visible transition duration-300 '>{explore.icon}</div>
                        <div className='text-white absolute bottom-0 flex flex-col'>
                            <div className='text-3xl mb-4 font-semibold'>Robotic Automation</div>
                            <div className='text-l font-sans '>Lorem ipsum dolor sit sedar conse adipiscing el sed do eiusmod.</div>
                            <div className='text-cyan-400 mt-3 font-medium invisible group-hover:visible transition duration-300 group-hover:-translate-y-4 '>Read More</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
    
}
export default ItemExplore