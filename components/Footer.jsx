import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <main className='flex max-lg:flex-col max-lg:gap-10 items-center justify-center justify bewteen px-10 py-2 border-t border-gray-200'>
        <Link href={"/"} className='flex items-center gap-1 z-30'>
        <Image src={"/logo.png"} alt='logo' width={35} height={35} />
        <p className='font-semibold text-xl lg:flex hidden'>Debugg</p>
      </Link>
      <div>
        <Link href={"#"}>blog</Link>
        <Link href={"#"}>chat with us</Link>
        <Link href={"#"}>bug bounty</Link>
        <Link href={"#"}>terms of service</Link>
      </div>

      <div>
        <FaFacebook />
        <FaInstagram />
        <FaXTwitter/>
        <FaYoutube/>
      </div>
    </main>
  )
}

export default Footer
