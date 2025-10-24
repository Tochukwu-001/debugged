"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";



const Navbar = () => {

  const [showNav, setShowNav] = useState(false);
  console.log(showNav);
  

  const navItems = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "About Us",
      url: "/about"
    },
    {
      name: "Fixes",
      url: "/fixes"
    },
    {
      name: "FAQs",
      url: "/faq"
    }
  ]
  return (
    <nav className='flex items-center justify-between shadow-md px-5 py-3'>
      <Link href={"/"} className='flex items-center gap-1 z-30'>
        <Image src={"/logo.png"} alt='logo' width={35} height={35} />
        <p className='font-semibold text-xl lg:flex hidden'>Debugg</p>
      </Link>

      <div className='lg:flex hidden items-center gap-8'>
        {
          navItems.map((item, index) => (
            <Link key={index} href={item.url} className='text-lg hover:text-blue-600 transition-all duration-200'>{item.name}</Link>
          ))
        }
      </div>

      <Link href={"#"} className='lg:flex hidden items-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-full'>
        <FiUser className='text-xl' />
        <p>My Account</p>
      </Link>

      <div className='lg:hidden text-2xl z-30'>
        <button onClick={()=> setShowNav(!showNav)}>
          {
            showNav ? <IoIosClose className='text-3xl' /> : <HiMenuAlt4 />
          }
        </button>
      </div>

      {/* mobile and tablet navbar */}
      <div className={`bg-white h-full w-full lg:hidden absolute top-0 left-0 p-5 ${showNav ? "block" : "hidden"}`}>
        <div className='flex flex-col items-center gap-10 mb-10 mt-25'>
          {
            navItems.map((item, index) => (
              <Link key={index} href={item.url}>{item.name}</Link>
            ))
          }
        </div>
        <Link href={"#"} className='flex items-center justify-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-full'>
          <FiUser className='text-xl' />
          <p>My Account</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
