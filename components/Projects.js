import React from 'react'
import property from '../public/assets/property.jpg'
import Image from 'next/image'
import Link from 'next/link'
import Ctx from '../store/Context';
import { useContext } from 'react';

const Projects = () => {
    const context = useContext(Ctx);
    const {projects} = context; 
    return (
    projects.map(pro=>(
        <div id='projects' className='w-full'>
            <div className='px-2 py-16 w-[1240] mx-auto'>
                <p className='text-xl tracking-widest text-[#5651e5] '>Projects</p>
                <h2 className='py-4'>what i have built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='flex relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10 ' src={pro.img}/>
                        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden group-hover:block'>
                            <h3 className=' text-xl tracking-wider text-white text-center'> {pro.name} </h3>
                            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                            <div className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer '>
                                <Link  href={`/${pro.name}`}>more info</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
  )
}

export default Projects
