import '../../app/globals.css'

import React from 'react'
import { useState } from "react"
import Image from 'next/image'
import Link from 'next/link'

import Navbar from '../Navbar'
import Footer from '../Footer'

import { BsArrowUpRight } from 'react-icons/bs'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


// men images
import men_formal from "../../public/assets/Rent/Rent-Home/men/men-formal.jpg"
import men_casual from "../../public/assets/Rent/Rent-Home/men/men-casual.jpg"
import men_indian from "../../public/assets/Rent/Rent-Home/men/men-indian.jpg"

// women images
import women_formal from "../../public/assets/Rent/Rent-Home/women/women-formal.jpg"
import women_casual from "../../public/assets/Rent/Rent-Home/women/women-casual.jpg"
import women_indian from "../../public/assets/Rent/Rent-Home/women/women-traditional.jpg"

const menSlides = [
  {img: men_formal, tag:'formal.'},
  {img: men_casual, tag:'casual.'},
  {img: men_indian, tag:'indian.'},
];

const womenSlides = [
  {img: women_formal, tag:'formal.'},
  {img: women_casual, tag:'casual.'},
  {img: women_indian, tag:'indian.'},
];

function Rent() {

  return (
    <>
      <Navbar/>
      <div>
        <p className='pt-32 font-Playfair text-black text-center text-5xl font-bold'>Rent</p>
        <div className='relative pt-12 flex flex-col md:flex-row md:gap-x-5 lg:gap-x-20 justify-center font-Playfair text-xl py-20 mx-10 md:px-40'>
          {/* MEN */}
          <div className='border p-2 mb-10'>
            <div className='w-[13rem] md:w-[19rem] mx-auto'>
              <Slider infinite autoplay previousButton=" " nextButton=" ">
                {menSlides.map((slide, index) => 
                  <div key={index} className=''>
                    <Image src={slide.img} alt='mens-image' width={350}/>
                    <div className='-rotate-90 absolute bg-black/70 bottom-10 right-56 w-fit'>
                      <p className='text-white text-xl tracking-widest font-Courier px-2'>{slide.tag}</p>
                    </div>
                  </div>)}
              </Slider>
            </div>

            <p className='text-center pt-2'>Men</p>
              <button className='border bg-black text-white p-1 w-[100%] my-2 hover:bg-black/90'>
                <Link href="/men">
                  <div className='flex gap-x-1 mx-auto w-[50%] hover:scale-105'>
                    <p className='text-center mx-auto'>Start Renting</p>
                    <BsArrowUpRight className='my-auto mx-auto'/>
                  </div>
                </Link>
              </button>
          </div>
          
          {/* WOMEN */}
          <div className='border p-2 mb-10'>
            <div className='w-[13rem] md:w-[19rem] mx-auto'>
              <Slider infinite autoplay previousButton=" " nextButton=" ">
                {womenSlides.map((slide, index) => 
                  <div key={index} className=''>
                    <Image src={slide.img} alt='mens-image' width={350}/>
                    <div className='-rotate-90 absolute bg-black/70 bottom-10 right-56 w-fit'>
                      <p className='text-white text-xl tracking-widest font-Courier px-2'>{slide.tag}</p>
                    </div>
                  </div>)}
              </Slider>
            </div>

            <p className='text-center pt-2'>Women</p>
              <button className='border bg-black text-white p-1 w-[100%] my-2 hover:bg-black/90'>
                <Link href="/women">
                  <div className='flex gap-x-1 mx-auto w-[50%] hover:scale-105'>
                    <p className='text-center mx-auto'>Start Renting</p>
                    <BsArrowUpRight className='my-auto mx-auto'/>
                  </div>
                </Link>
                
              </button>
          </div>    
        </div>  
      </div>
      
      <Footer/>
    </>
  )
}

export default Rent