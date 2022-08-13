import Image from 'next/image';
import Html from '../public/assets/html.png'
import Css from '../public/assets/css.png'
import Firebase from '../public/assets/firebase.png'
import { useState } from 'react';
import Github from '../public/assets/github1.png'
import ReactJs from '../public/assets/react.png'
import Js from '../public/assets/javascript.png'
import nextJs from '../public/assets/nextjs.png'
import Tailwind from '../public/assets/tailwind.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full mt-96 pt-60 lg:my-8 lg:p-2 text-gray-600 '>
        <div className='max-w-[1240] mx-auto flex flex-col justify-center h-full '>
            <div>
                <p className='uppercase tracking-widest text-xl text-[#5651e5] ' >Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
            </div>
            <div className='grid md:grid-cols-2 gap-8 lg:grid-cols-4'>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={Html} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>HTML</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={Css} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>CSS</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={Tailwind} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>TAILWIND</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={Github} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>GITHUB</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={Js} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>JAVASCRIPT</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={ReactJs} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>REACTJS</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={nextJs} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>NEXTJS</p>
                   </div>
                </div>
                <div  className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 '>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                        <div className='m-auto' >
                            <Image src={Firebase} alt='html' width='64px' height='64px'/>
                        </div>
                        <p>FIREBASE</p>
                   </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Skills;
