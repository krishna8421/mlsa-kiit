'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import NavbarItem from './NavbarItem';

const OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFFSET) {
        setShowBackground(true)
      }
      else setShowBackground(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <nav className={`fixed z-40 px-[24px] py-[15px] w-screen top-0 left-0 right-0 bg-transparent
      transition
      duration-500
      ${showBackground ? 'bg-gradient-blue-reverse bg-opacity-90 ': ""}` 
      }>
        <div className='flex justify-between items-center'>
          <div className="flex items-center gap-4">
            <Image src="/mlsa-logo.png" alt="MLSA Logo" width={38} height={33} loading="eager" className='2xl:w-[2.6vw] w-auto h-auto'/>
            <span className="bg-gradient-to-r from-[#0070C5] to-[#3BABCF] bg-clip-text text-[20px] 2xl:text-[1.4vw] font-semibold text-transparent">
              MLSA 
            </span>
          </div>
          <div className='flex items-center gap-10 2xl:gap-[2.3vw]'>
            <div className={`gap-10 items-center hidden lg:flex font-normal ${showBackground ? 'text-white': ""}`}>
              <Link href=""><NavbarItem item='Events'></NavbarItem></Link>
              <Link href=""><NavbarItem item='Projects'></NavbarItem></Link>
              <Link href=""><NavbarItem item='Blog'></NavbarItem></Link>
              <Link href=""><NavbarItem item='Gallary'></NavbarItem></Link>
              <Link href=""><NavbarItem item='Teams'></NavbarItem></Link>
              <Link href=""><NavbarItem item='Youtube'></NavbarItem></Link>
            </div>
            {/* <MobileMenu visible={true}/> */}
            <button className='text-sm px-[20px] py-[5px] 2xl:py-[1vh] 2xl:px-[1.4vw] 2xl:w-[6vw] 2xl:text-[1vw] bg-gradient-blue rounded-full text-white'>Contact</button>
        </div>
          </div>
    </nav>
    </>
  )
}

export default Navbar
