import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../app/ramp-ready-logo.png'
import { BsFacebook, BsInstagram, BsTwitter,BsPinterest } from "react-icons/bs"

function Footer() {
  return (
    <>
        <div className='border border-t-black font-Playfair font-bold text-xl p-14'>
        <div className='flex flex-col md:flex-row justify-between'>
          <Link href='/'>
            <Image src={logo} alt="logo" className='mx-auto md:mx-0'/>
          </Link>
            {/* MENU */}
            <div className='my-auto flex flex-col text-center md:text-left'>
              <Link href="/">
                <span className='my-1 py-1 menu-links'>Home</span>
              </Link>
              
              <Link href="/rent">
                <span className='my-1 py-1 menu-links'>Rent</span>
              </Link>

              <Link href="/">
                <span className='my-1 py-1 menu-links'>Outfit Ideas</span>
              </Link>
            </div>
            <div className='my-auto flex flex-col text-center md:text-left'>
              <Link href="/about">
                <span className='my-1 py-1 menu-links'>About Us</span>
              </Link>

              <Link href="/faq">
                <span className='my-1 py-1 menu-links'>FAQ</span>
              </Link>

              <Link href="/contact">
                <span className='my-1 py-1 menu-links'>Contact</span>
              </Link>
            </div>
            {/* SOCIAL LINKS */}
            <div className='my-auto mx-auto md:mx-0'>
              <p className='font-bold pt-10 md:pt-0 text-center'>Follow us on:</p>
              <div className='flex flex-row gap-x-5 pt-5'> 
                <Link href="https://www.facebook.com/" target='_blank' aria-label='facebook-icon'>
                  <BsFacebook className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>

                <Link href="https://www.instagram.com/" target='_blank' aria-label='instagram-icon'>
                  <BsInstagram className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>
                
                <Link href="https://x.com/" target='_blank' aria-label='twitter-icon'>
                  <BsTwitter className='hover:scale-125 hover:ease-in-out hover:duration-300'/>
                </Link>

                <Link href="https://in.pinterest.com/" target='_blank' aria-label='pinterest-icon'>
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