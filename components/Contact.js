import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Form from './Form'
import ContactInfo from './ContactInfo';
const Contact = () => {
    const topHandeler = ()=>{
        window.scrollTo(0,0);
    }
  return (
    <div id='contact' className='w-full lg:h-screen '>
        <div className='max-w-[1240px] mx-auto px-2 py-16 -w-full'>
            <p className='tracking-widdest uppercase text-xl text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='flex flex-col'>
                <div className='grid lg:grid-cols-5 gap-8'>
                    <ContactInfo/>
                    <div className='lg:col-span-3 text-gray-600 flex flex-col shadow-2xl shadow-gray-400 rounded-lg bg-gray-200'>
                        <Form/>
                    </div>
                </div>
                <div  className='text-[#5651e5] mx-auto py-4 p-3 rounded-full shadow-xl border-1 border-gray-200 my-4 lg:my-8'>
                    <HiOutlineChevronDoubleUp onClick={topHandeler} className='cursor-pointer ' size={30}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
