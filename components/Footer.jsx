import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../app/ramp-ready-logo.png'
import { BsFacebook, BsInstagram, BsTwitter,BsPinterest } from "react-icons/bs"

function Footer() {
  return (
    <>
        <div className='border border-t-black font-Playfair font-bold text-xl p-14'>
          <div className='flex justify-between'>
            <Image src={logo} alt="logo"/>
            {/* MENU */}
            <ul className='my-auto flex flex-col'>
              <Link href="/">
                <li className='py-2 menu-links'>Home</li>
              </Link>
              
              <Link href="/rent">
                <li className='py-2 menu-links'>Rent</li>
              </Link>

              <Link href="/outfits">
                <li className='py-2 menu-links'>Outfit Ideas</li>
              </Link>
            </ul>
            <ul className='my-auto flex flex-col'>
              <Link href="/about">
                <li className='py-2 menu-links'>About Us</li>
              </Link>

              <Link href="/faq">
                <li className='py-2 menu-links'>FAQ</li>
              </Link>

              <Link href="/contact">
                <li className='py-2 menu-links'>Contact</li>
              </Link>
            </ul>
            {/* SOCIAL LINKS */}
            <div className='my-auto'>
              <p>Follow us on:</p>
              <div className='flex flex-row gap-x-5 pt-5'> 
                <Link href="./facebook">
                  <BsFacebook className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>

                <Link href="/">
                  <BsInstagram className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>
                
                <Link href="/">
                  <BsTwitter className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>

                <Link href="/">
                  <BsPinterest className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer