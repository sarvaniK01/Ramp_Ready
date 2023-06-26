import '../../app/globals.css'

import React , { useState } from 'react'

import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import Navbar from '../Navbar'
import Footer from '../Footer'
import CategoryCard from './CategoryCard';
import FormalWomen from './FormalWomen';
import CasualWomen from './CasualWomen';
import TraditionalWomen from "./TraditionalWomen"
import DressesWomen from "./DressesWomen"

import BeigeCargoPants from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/beige-cargo-pants.png"
import BlackSuit from "../../public/assets/Rent/Rent-Main/Men/Formal/suits/black-checked-suit.png"
import BlueTshirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/blue-tshirt.png"
import PurpleKurta from "../../public/assets/Rent/Rent-Main/Men/Traditional/purple-kurta-set.png"


function Women() {

  const [toggle, setToggle] = useState(0);

  function updateToggle(id){
    setToggle(id)
  }


  return (
    <>
      <Navbar/>
      <div className='flex flex-row font-Playfair'>
        <div className='border-r border-black'>
          {/* Categories */}
          <div className='pt-52 pb-20 px-20'>
            <p className='pb-6 text-2xl font-bold'>Filters</p>
            <Accordion>
              <AccordionItem className="text-xl my-3 rent-links" header="Formal" onClick={() => updateToggle(1)}>
                <div className='pl-3'>
                  {/* <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Shirts</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Trousers</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Blazers</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Suits</p> */}
                </div>
              </AccordionItem>

              <AccordionItem className="text-xl my-3 rent-links" header="Casual" onClick={() => updateToggle(2)}>
                {/* <div className='pl-3'>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>T-shirts</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Shirts</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Bottomwear</p>
                </div> */}
              </AccordionItem>

              <AccordionItem className="text-xl my-3 rent-links" header="Traditional" onClick={() => updateToggle(3)}>
                {/* <div className='pl-3'>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Kurtas</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Sherwani</p>
                </div> */}
              </AccordionItem>

              <AccordionItem className="text-xl my-3 rent-links" header="Dresses" onClick={() => updateToggle(4)}>
                {/* <div className='pl-3'>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Kurtas</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Sherwani</p>
                </div> */}
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className='mx-auto'>
          <p className='pt-32 font-bold text-center text-5xl'>Women&apos;s Wear</p>
          {/* Category Cards */}
          <div className='pt-14 pb-20 '>
            <div className={toggle === 0 ? "show-content" : "content"}>
              <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
                <CategoryCard
                  image={BlackSuit}
                  brand="Flying Machine"
                  product="Beige cargo Pants"
                  price="INR 300"
                />
                <CategoryCard
                  image={BlueTshirt}
                  brand="Flying Machine"
                  product="Beige cargo Pants"
                  price="INR 300"
                />
                <CategoryCard
                  image={PurpleKurta}
                  brand="Flying Machine"
                  product="Beige cargo Pants"
                  price="INR 300"
                />
                <CategoryCard
                  image={BeigeCargoPants}
                  brand="Flying Machine"
                  product="Beige cargo Pants"
                  price="INR 300"
                />
              </div>
              
            </div>
            
            <div className={toggle === 1 ? "show-content" : "content"}>
              <FormalWomen />
            </div>
            
            <div className={toggle === 2 ? "show-content" : "content"}>
              <CasualWomen />
            </div>
            
            <div className={toggle === 3 ? "show-content" : "content"}>
              <TraditionalWomen />
            </div>
            
            <div className={toggle === 4 ? "show-content" : "content"}>
              <DressesWomen />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Women