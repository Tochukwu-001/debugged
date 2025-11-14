import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <main className='flex max-lg:flex-col max-lg:gap-10 items-center justify-between px-10 py-2 border-t border-gray-200 '>
            <Link href={"/"} className='flex items-center gap-1 z-30'>
                <Image src={"/logo.png"} alt='logo' width={35} height={35} />
                <p className='font-semibold text-xl lg:flex hidden'>Debugg</p>
            </Link>

            <div className='flex max-lg:flex-col items-center gap-4 text-sm text-gray-700'>
                <Link href={"#"}>Blog</Link>
                <Link href={"#"}>Chat with us</Link>
                <Link href={"#"}>Bug Bounty</Link>
                <Link href={"#"}>Terms of Service</Link>
            </div>

            <div className='flex items-center gap-2 text-xl text-gray-800'>
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
                <FaYoutube />
            </div>
        </main>
    )
}

export default Footer
