import React from 'react'
import contact from '../public/assets/contact.jpg'
import Image from 'next/image'
import { AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className='text-gray-600 lg:col-span-2 flex flex-col justify-around shadow-2xl shadow-gray-400 rounded-lg'>
    <div className='p-6 rounded-lg hover:scale-105 ease-in duration-300'>
        <Image src={contact} alt='/'/>
    </div>
    <div className='pt-4 w-[90%] mx-auto'>
        <h2 className='tracking-wider text-black'>Peter Safwat</h2>
        <p className='text-sm tracking-wider '>Front-End Developer</p>
        <p>I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
    </div>
    <div className='uppercase tracking-widest mt-8 w-[90%] mx-auto'>
    CONNECT WITH ME
    </div>
    <div className='flex items-center justify-between my-6 w-[65%] mx-auto'>
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
        <Link  href='https://www.linkedin.com/in/peter-safwat-frontend/'passHref >
        <a target='_blank'>
        <FaLinkedinIn/>
        </a>
        </Link>
    </div>

    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
        <Link  href='https://github.com/petersafwat11' >
        <a target='_blank'>
        <FaGithub/>                  
        </a>
        </Link>
    </div>
    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
        <Link  href='https://mail.google.com/mail/u/0/#search/psafwat16%40gmail.com?compose=new'  >
        <a target='_blank'>
        <AiOutlineMail/>
        </a>
        </Link>
    </div>
   </div>
</div>
)
}

export default ContactInfo
