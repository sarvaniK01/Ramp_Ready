import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from "../app/ramp-ready-logo.png"

import { SlMenu } from "react-icons/sl"
import { RxCross1 } from "react-icons/rx"

function Navbar() {

    const [navbar, setNavbar] = useState(false)

  return (
    <div className='font-Playfair font-bold text-md md:text-xl w-full'>
        <div className='md:hidden bg-white text-black'>
            {navbar ? 
                <div className='my-auto h-screen mx-auto'>
                    <div className='flex flex-row justify-between mt-2'>
                        <Link href="/" className='my-auto'>
                            <Image src={logo} alt="logo" width="50" className=''/>
                        </Link>

                        <RxCross1 className={`text-black text-3xl my-auto pr-3 ${navbar ? "block" : "hidden"}`} onClick={() => setNavbar(false)}/>
                    </div>
                    
                    <ul className='flex flex-col items-center justify-center mt-[25%]'>
                        {/* HOME */}
                        <Link href="/">
                            <button>
                                <li className='py-1 px-2 menu-links'>Home</li>
                            </button>
                        </Link>

                        {/* RENT */}
                        <Link href="/rent">
                            <button>
                                <li className='py-1 px-2 menu-links'>Rent</li>
                            </button>
                        </Link>

                        {/* ABOUT US */}
                        <Link href="/about">
                            <button>
                                <li className='py-1 px-2 menu-links'>About Us</li>
                            </button>
                        </Link>

                        {/* FAQ */}
                        <Link href="/faq">
                            <button>
                                <li className='py-1 px-2 menu-links'>FAQ</li>
                            </button>
                        </Link>

                        {/* CONTACT */}
                        <Link href="/contact">
                            <button>
                                <li className='menu-links py-1 px-2'>Contact</li>
                            </button>
                        </Link>
                    </ul> 
                </div>
                
            : 
                <div className='flex justify-between h-[4rem]'>
                    <Link href="/" className='my-auto'>
                        <Image src={logo} alt="logo" width="50" className=''/>
                    </Link>

                    <SlMenu className={`text-black text-xl my-auto mr-3 ${navbar ? "hidden" : "block"}`} onClick={() => setNavbar(true)}/>
                </div>}
            
        </div>
        <div className='bg-white fixed flex justify-between border-b border-black shadow-md px-8 py-3 w-full z-10 hidden md:flex'>
            <Link href="/">
                <Image src={logo} alt="logo" width="80" className=''/>
            </Link>
            
            <ul className='flex my-auto gap-x-8'>
                {/* HOME */}
                <Link href="/">
                    <button>
                        <li className='text-black py-1 px-2 menu-links'>Home</li>
                    </button>
                </Link>

                {/* RENT */}
                <Link href="/rent">
                    <button>
                        <li className='text-black py-1 px-2 menu-links'>Rent</li>
                    </button>
                </Link>

                {/* ABOUT US */}
                <Link href="/about">
                    <button>
                        <li className='text-black py-1 px-2 menu-links'>About Us</li>
                    </button>
                </Link>

                {/* FAQ */}
                <Link href="/faq">
                    <button>
                        <li className='text-black py-1 px-2 menu-links'>FAQ</li>
                    </button>
                </Link>

                {/* CONTACT */}
                <Link href="/contact">
                    <button>
                        <li className='text-black menu-links py-1 px-2'>Contact</li>
                    </button>
                </Link>
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar