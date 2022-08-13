import React from 'react'
import { AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {RiContactsFill} from 'react-icons/ri'
import Link from 'next/link';


const Main = () => {
  return (
    <div id='main' className='w-full h-screen text-center' >
        <div className='w-full h-full max-w-[1240px] mx-auto flex items-center justify-center p-2'>
            <div>
            <p className='tracking-widest py-2 text-sm text-gray-600 uppercase' >LET'S BUILD SOMETHING legendary TOGETHER</p>
            <h2 className='text-gray-700 font-black'>Hi, I'm <span className='text-[#5651e5] my-6'>Peter</span> <br/>
             A Front-End Web Developer</h2>
            <p className='py-2 max-w-[75%] mx-auto text-gray-600'>I’m focused on building responsive front-end web applications while learning back-end technologies.</p>
            <div className='flex items-center justify-between my-4 w-[50%] mx-auto'>
            <Link  href='https://www.linkedin.com/in/peter-safwat-frontend/' >
                        <a target='_blank'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 '>
                              <FaLinkedinIn/>
                              </div>
                        </a>         
           </Link>

           <Link  href='https://github.com/petersafwat11' >
                        <a target='_blank'>
                              <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 '>
                              <FaGithub/>  
                              </div>                
                        </a>
            </Link>

            <Link  href='https://mail.google.com/mail/u/0/#search/psafwat16%40gmail.com?compose=new' >
                        <a target='_blank' >
                        <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <AiOutlineMail/>
                        </div>
                        </a>
            </Link>
            
            <Link  href='#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300 '>
                  <RiContactsFill/>
                  </div>
            </Link>
      </div>

            </div>
        </div>
    </div>
  )
}

export default Main;
