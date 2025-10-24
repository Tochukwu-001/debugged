import React from 'react'

const Footer = () => {
  return (
    <main>
        <Link href={"/"} className='flex items-center gap-1 z-30'>
        <Image src={"/logo.png"} alt='logo' width={35} height={35} />
        <p className='font-semibold text-xl lg:flex hidden'>Debugg</p>
      </Link>
    </main>
  )
}

export default Footer
