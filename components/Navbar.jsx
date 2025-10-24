"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiUser } from "react-icons/fi";
import { BsMenuAppFill } from "react-icons/bs";

const Navbar = () => {
    const navItems = [
     {
        name: "home",
        url: "/"
     },
     {
        name: "About us",
        url:  "/about"
     },

     {
        name: "fixes",
        url: "/fixes"
     },
     {
        name: "FAQS",
        url: "/faq"
     }
    ]
  return (
    <nav className='flex items-center justify-between shadow-md px-5 py-3'>
      <Link href={"/"} className='flex items-center gap-1 '>
          <Image src={"/logo.png"} alt='logo' width={35} height={35}/>
          <p className='font-semibold text-xl lg:flex hidden '>debugg</p>
      </Link>

      <div className='lg:flex hidden items-center gap-5 '>
        {
            navItems.map((items, index)=> (
              <Link key={index} href={items.url} className='text-lg hover:text-blue-600 transition-all duration-200'>{items.name}</Link>
    
            ))
        }
        
      </div>

      

      <div className='lg:hidden text-2xl'>
        <button>
            <BsMenuAppFill />
        </button>

      </div>
    {/* mobile and tablet navbar */}
    <div className='bg-white h-full w-full lg:hidden flex absolute top-0 left-0 p-5'>
       <div className='flex flex-col items-center gap-10 mb-10 mt-25'>
        {
            navItems.map((item, index)=>(
                <Link key={index} herf={item.url}>{item.name}</Link>

            ))
        }
       </div>
       <Link href={"#"} className='flex items-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-full'>
       <FiUser className='text-xl' />
       <p>my account</p>
      </Link>
    </div>
    </nav>
  )
}

export default Navbar
