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

import PinkBlazer from '../../public/assets/Rent/Rent-Main/Women/formal/pink-fitted-blazer.png'
import BlackTrousers from '../../public/assets/Rent/Rent-Main/Women/formal/balc-mid-rise-striped-trousers.png'
import RustTop from '../../public/assets/Rent/Rent-Main/Women/formal/rust-peplum-top.png'
import LavenderShirt from '../../public/assets/Rent/Rent-Main/Women/formal/solid-lavender-formal-shirt.png'

import MochaBrownCargoPants from "../../public/assets/Rent/Rent-Main/Women/casual/mocha-brown-cargo-pants.png"
import BlueDungaree from "../../public/assets/Rent/Rent-Main/Women/casual/blue-denim-dungaree.png"
import GreenRibbedTop from "../../public/assets/Rent/Rent-Main/Women/casual/green-solid-ribbed-top.png"

import BlackStripedKurta from "../../public/assets/Rent/Rent-Main/Women/traditional/black-teal-and-yellow-striped-long-kurta.png"
import PinkSilkLehenga from "../../public/assets/Rent/Rent-Main/Women/traditional/deep-pink-silk-lehenga.png"
import GreenKSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/sea-green-traditional-kanjeevaram-saree.png"

import BlackPartyDress from "../../public/assets/Rent/Rent-Main/Women/dresses/black-and-silver-party-dress.png"
import BlueFloralDress from "../../public/assets/Rent/Rent-Main/Women/dresses/blue-floral-dress.png"
import GreenJumpsuit from "../../public/assets/Rent/Rent-Main/Women/dresses/solid-green-casual-jumpsuit.png"


function Women() {

  const [toggle, setToggle] = useState(0);

  function updateToggle(id){
    setToggle(id)
  }


  return (
    <div className=' max-w-[1536px] mx-auto'>
      <Navbar/>
      <div className='flex flex-col md:flex-row font-Playfair'>
        <div className='border-r border-black'>
          {/* Categories */}
          <div className='pb-10 pt-16 md:pt-40 md:pb-0 px-20'>
            <p className='pb-6 text-2xl font-bold text-center md:text-left'>Filters</p>
            <Accordion>
              <AccordionItem className="text-xl my-3 rent-links mx-auto md:mx-0" header="Formal" onClick={() => updateToggle(1)}>
                <div className='pl-3'>
                  {/* <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Shirts</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Trousers</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Blazers</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Suits</p> */}
                </div>
              </AccordionItem>

              <AccordionItem className="text-xl my-3 rent-links mx-auto md:mx-0" header="Casual" onClick={() => updateToggle(2)}>
                {/* <div className='pl-3'>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>T-shirts</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Shirts</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Bottomwear</p>
                </div> */}
              </AccordionItem>

              <AccordionItem className="text-xl my-3 rent-links mx-auto md:mx-0" header="Traditional" onClick={() => updateToggle(3)}>
                {/* <div className='pl-3'>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Kurtas</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Sherwani</p>
                </div> */}
              </AccordionItem>

              <AccordionItem className="text-xl my-3 rent-links mx-auto md:mx-0" header="Dresses" onClick={() => updateToggle(4)}>
                {/* <div className='pl-3'>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Kurtas</p>
                  <p className='text-lg cursor-pointer hover:scale-105 rent-links'>Sherwani</p>
                </div> */}
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className='mx-auto'>
          <p className='pt-5 md:pt-36 font-bold text-center text-5xl'>Women&apos;s Wear</p>
          {/* Category Cards */}
          <div className='pt-14 pb-20 '>
            <div className={toggle === 0 ? "show-content" : "content"}>
              <div className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10'>
                <CategoryCard
                  image={PinkBlazer}
                  brand="Van Heusen"
                  product="Pink Blazer"
                  price="INR 400"
                />
                <CategoryCard
                  image={BlackTrousers}
                  brand="Levi's"
                  product="Black Striped Trousers"
                  price="INR 450"
                />
                <CategoryCard
                  image={RustTop}
                  brand="Sassaffras"
                  product="Rust Top"
                  price="INR 430"
                />
                <CategoryCard
                  image={LavenderShirt}
                  brand="Van Heusen"
                  product="Lavender Shirt"
                  price="INR 450"
                />

                <CategoryCard
                  image={MochaBrownCargoPants}
                  brand="H&M"
                  product="Brown Cargo Pants"
                  price="INR 400"
                />
                <CategoryCard
                  image={BlueDungaree}
                  brand="Zara"
                  product="Blue Dungaree"
                  price="INR 480"
                />
                <CategoryCard
                  image={GreenRibbedTop}
                  brand="H&M"
                  product="Green Ribbed Top"
                  price="INR 340"
                />

                <CategoryCard
                  image={BlackStripedKurta}
                  brand="Indya"
                  product="Black Striped Kurta"
                  price="INR 400"
                />
                <CategoryCard
                  image={PinkSilkLehenga}
                  brand="Manish Malhotra"
                  product="Pink Silk Lehenga"
                  price="INR 850"
                />
                <CategoryCard
                  image={GreenKSaree}
                  brand="Chennai Silks"
                  product="Green Kanjeevaram Saree"
                  price="INR 980"
                />

                <CategoryCard
                  image={BlackPartyDress}
                  brand="Zara"
                  product="Black Party Dress"
                  price="INR 420"
                />
                <CategoryCard
                  image={BlueFloralDress}
                  brand="Westside"
                  product="Blue Floral Dress"
                  price="INR 380"
                />
                <CategoryCard
                  image={GreenJumpsuit}
                  brand="Myntra"
                  product="Green Jumpsuit"
                  price="INR 370"
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
    </div>
  )
}

export default Women