import React from 'react';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className='w-full h-screen  md:my-8'>
      <div className='w-[90%] mx-auto h-full flex flex-col space-between text-gray-600 lg:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
        <p className='tracking-widest uppercase text-lg text-[#5651e5] '>ABOUT</p>
        <h2 className='py-4'>Who I Am</h2>
        <span className='text-sm py-2'>/ / I am not your average developer</span>
        <p className='py-2'>I always have been wandered about how the websites render
            data to users and eager to know all the details about how this is
            done under the hoods .So I started learning web development 
            since I was 15 and built my first website, it was simple website but I 
            was happy with my knowledge and capabilities so far.
            Last year I decided to take this passion seriously and took 3
            nanodegree from udacity to gain more coding experience which
            tought me the cutting edge technology used in this field.</p>
        <p className='pt-3'>I then started freelancing for e-commerce companies on upwork platform. I am now spending my time building projects with React JS, Firebase, and learning new technologies.</p>
        <p className='underline cursor-pointer py-2' href='#'>Check out some of my latest projects.</p>
        </div>
        <div className=' w-full p-3 m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 '>
          <Image className='rounded-xl ' src={AboutImg} alt='ss' />
        </div>
      </div>      
    </div>
  )
}

export default About
