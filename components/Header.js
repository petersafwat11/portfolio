import React ,{useState, useEffect} from 'react';
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineMail, AiOutlineClose} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {RiContactsFill} from 'react-icons/ri'

const Header = () => {

  const [nav, setNav] = useState(false)
  const navHandeler = ()=>{
    setNav(!nav);
  }
  const [shadow, setShadow] = useState(false);
  useEffect(()=>{
     const shadowHandeler= ()=>{
           if(window.scrollY>= 90){
                 setShadow(true)
           }
           else{
                 setShadow(false)
           }
     }
     window.addEventListener('scroll', shadowHandeler);
  },[])

  return (
        <div >
          <div className={`fixed w-full h-20 z-10  ${shadow? 'bg-gray-200 shadow-xl': undefined} `} >
            <div className='flex items-center justify-between px-3'>
              <h1 className=' font-extrabold tracking-widest mt-2 '>PS</h1>
              <ul className='hidden lg:flex items-center justify-around w-[55%] uppercase text-sm mt-2 lg:w-[42%]'>
                <li>
                  <Link className='hover:border-b ' href='#main' >Home</Link>
                </li>
                <li>
                  <Link className='hover:border-b ' href='#about'>About</Link>
                </li>
                <li>
                  <Link className='hover:border-b ' href='#skills'>Skills</Link>
                </li>
                <li>
                  <Link className='hover:border-b ' href='#projects'>Projects</Link>
                </li>
                <li>
                  <Link className='hover:border-b ' href='#'>Resume</Link>
                </li>
                <li>
                  <Link className='hover:border-b' href='#contact'>Contact</Link>
                </li>
              </ul>
              <AiOutlineMenu className='inline-block lg:hidden mt-2 cursor-pointer' size={25} onClick={navHandeler}></AiOutlineMenu>
            </div>
          </div>  
          <div className={nav? ' z-50 w-full h-screen left-0 top-0 fixed bg-black/70 lg:hidden': undefined }>
             <div className={nav? 'z-100 fixed top-0 left-0 w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
             'z-100 fixed top-0 left-[-100%] w-[75%] sm:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' }>
              <div className='flex justify-between items-center'>
                <h1 className=''>PS</h1>
                <div onClick={navHandeler} className='rounded-full shadow-lg shadow-gray-400 p-4 text-sm cursor-pointer'>
                  <AiOutlineClose />             
                </div>
              </div>
              <p className='w-[85] w-sm:[90] border-b border-gray-300 my-4 pb-2'>
                let's build something legendary together
              </p>
              <ul className='flex flex-col items-start justify-around  uppercase text-sm mt-8 h-52'>
              <Link  href='#main'>
                  <li onClick={navHandeler} className='hover:border-b w-full hover:bg-gray-400 p-3'>
                    Home
                  </li>
                </Link>
                <Link href='#about'>
                  <li onClick={navHandeler} className='hover:border-b w-full hover:bg-gray-400 p-3'>
                    About
                  </li>
                </Link>
                <Link  href='#skills'>
                  <li onClick={navHandeler} className='hover:border-b w-full hover:bg-gray-400 p-3'>
                    Skills
                  </li>
                </Link>
                <Link  href='#projects'>
                  <li onClick={navHandeler} className='hover:border-b w-full hover:bg-gray-400 p-3'>
                    Projects
                  </li>
                </Link>
                <Link  href='#'>
                  <li onClick={navHandeler} className='hover:border-b w-full hover:bg-gray-400 p-3'>
                    Resume
                  </li>
                </Link>
                <Link  href='#contact'>
                  <li onClick={navHandeler} className='hover:border-b w-full hover:bg-gray-400 p-3'>
                    Contact
                  </li>
                </Link>

              </ul>
              <div className='mt-12'>
                <p className='tracking-widest uppercase text-[#5651e5]'>let's connect</p>
              </div>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                  <Link  href='https://www.linkedin.com/in/peter-safwat-frontend/'passHref >
                        <a target='_blank'>
                        <FaLinkedinIn/>
                        </a>
                  </Link>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                    <Link  href='https://github.com/petersafwat11'passHref >
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
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
                  <Link  href='#contact'>
                  <a >
                        <RiContactsFill/>
                        </a>
                  </Link>
                  </div>
              </div>
            </div>

          </div>


        </div>  
  )  
}

export default Header;
