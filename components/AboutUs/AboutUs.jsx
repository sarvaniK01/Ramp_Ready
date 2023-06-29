import "../../app/globals.css"
import React from 'react'
import Link from 'next/link'

import shop1 from "../../public/assets/AboutUs/shop1.jpg"
import shop2 from "../../public/assets/AboutUs/shop2.jpg"
import shop3 from "../../public/assets/AboutUs/shop3.jpg"
import woman1 from "../../public/assets/AboutUs/woman1.jpg"
import man1 from "../../public/assets/AboutUs/man1.jpg"

import Navbar from '../Navbar'
import Footer from '../Footer'
import Image from "next/image"

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className='font-Playfair pt-28 pb-20'>
        <p className='text-5xl font-bold pt-16 text-center'>About Us</p>
        <div className='pt-10 px-24 font-semimedium text-xl'>
          <p className='text-center text-2xl font-semibold'>Ramp Ready is a website where you can choose from a variety of clothes and rent it for an occasion!</p>

          <div className="flex flex-col md:flex-row gap-5 py-10">
            <Image
              src={shop2}
              alt="shop"
              width={460}
            />
            <Image
              src={shop1}
              alt="shop"
              width={460}
            />
          </div>

          <div className='pt-5'>
            Due to the diverse culture present in the Indian subcontinent, Indians are coerced to buy new clothes and jewellery for festivals and occasions.Many individuals have their wardrobe filled as they have purchased clothes or jewellery for one-time occasion which they no longer need. <br />

            Individuals experience an impulse to buy new outfits which they will wear for a few times or probably not wear the outfit again, thus wasting a lump sum amount of money on them. The waste that is contributed by the individuals in the fashion industry is enormous and leads to many uncertain events. <br />

            Hence, it is necessary to build a green ecological civilization and one of the methods that can be implemented is the clothing renting system.

            <br />
            <br />

            A literature review suggested that previous studies on Fashion Rental are limited to understanding users’ motivations and behavioral intentions. While this is often informative in that it provides how to improve the renting service for  people that  are already using the service,  it&apos;s  still unclear on how to expand the market by attracting new customers into the Fashion Rental market.

            <br />
            <br />

            To make fashion sustainable we have introduced Ramp Ready to help you pick up outfits for your next happening occasion. <br />
          </div>

          <div className="flex flex-col md:flex-row gap-5 py-10">
            <Image
              src={woman1}
              alt="shop"
              width={460}
            />
            <Image
              src={man1}
              alt="shop"
              width={460}
            />
          </div>

          <div className='pt-10'>
            <p className='text-2xl font-bold'>Our Objectives include:</p>
            <ul className='pl-12 list-disc'>
              <li>
                User friendly website that helps people who are financially destitute to be able to rent out their favorite designer clothes instead of having to buy them at an expensive price.
              </li>
              <li>
                Linking renter&apos;s to legitimate sources like shops or individuals willing  to rent the clothing of their choice. (person to shop)
              </li>
              <li>
                Linking renter&apos;s to legitimate owners to rent the clothing of their choice. (person to person)
              </li>
              <li>
                Make fashion sustainable.
              </li>
              <li>
                Helping rental stores with economy (local businesses)
              </li>
              <li>
                Ensure the legitimacy of rental shops and customers by providing identification through verification
              </li>
            </ul>
          </div>

          <div className='pt-10'>
            <p className='font-bold text-2xl'>What we do:</p>
            <ul className='pl-12 list-disc'>
              <li>
                In the project, we are going to build a website that will help others to rent branded clothes at affordable prices on a day or hourly basis.
              </li>
              <li>
                The customers can rent clothes of their choice through the website from various shops and individuals according to their needs.
              </li>
              <li>
                We will also provide the rentee with the location of the stores and individuals nearby so that they can directly reach the businesses.
              </li>
              <li>
                The website will act as a medium between the rentees and stores/individuals who are willing to rent their clothes or accessories : the rentee can afford fashionable outfits, the businesses will have a chance to increase their sales and we will be able to make profit from both the sides.
              </li>
            </ul>
          </div>

          <Image 
            src={shop3}
            alt="shop"
            height={600}
            className="mx-auto pt-10"
          />

          <div className='pt-16 font-bold'>
            <p>If you have any doubts please feel free to <Link href="/contact" className='underline underline-beige'>contact us</Link>!</p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs