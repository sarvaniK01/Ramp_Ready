import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../app/ramp-ready-logo.png"

function Navbar() {
  return (
    <div className='font-Playfair font-bold text-xl w-full'>
        <div className='bg-white fixed flex justify-between border-b border-black shadow-md px-8 py-3 w-full z-10'>
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