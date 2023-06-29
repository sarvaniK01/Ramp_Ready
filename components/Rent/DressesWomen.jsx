import React from 'react'

import CategoryCard from './CategoryCard'

import BlackPartyDress from "../../public/assets/Rent/Rent-Main/Women/dresses/black-and-silver-party-dress.png"
import WhiteSlitDress from "../../public/assets/Rent/Rent-Main/Women/dresses/black-and-white-slit-dress.png"
import BlueFloralDress from "../../public/assets/Rent/Rent-Main/Women/dresses/blue-floral-dress.png"
import GreenBodyconDress from "../../public/assets/Rent/Rent-Main/Women/dresses/pastel-green-bodycon-dress.png"
import PurpleSequinsDress from "../../public/assets/Rent/Rent-Main/Women/dresses/purple-sequins-dress.png"
import WineTieredDress from "../../public/assets/Rent/Rent-Main/Women/dresses/wine-tiered-dress.png"

import GreenJumpsuit from "../../public/assets/Rent/Rent-Main/Women/dresses/solid-green-casual-jumpsuit.png"
import BlackJumpSuit from "../../public/assets/Rent/Rent-Main/Women/dresses/black-embellished-partywear-jumpsuit.png"



function DressesWomen() {
  return (
    <>
      <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Traditional  Wear</p>

      <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
        <CategoryCard
          image={BlackPartyDress}
          brand="Zara"
          product="Black Party Dress"
          price="INR 420"
        />
        <CategoryCard
          image={WhiteSlitDress}
          brand="H&M"
          product="White Slit Dress"
          price="INR 410"
        />
        <CategoryCard
          image={BlueFloralDress}
          brand="Westside"
          product="Blue Floral Dress"
          price="INR 380"
        />
        <CategoryCard
          image={GreenBodyconDress}
          brand="Zara"
          product="Green Bodycon Dress"
          price="INR 400"
        />
        <CategoryCard
          image={PurpleSequinsDress}
          brand="H&M"
          product="Purple Sequins Dress"
          price="INR 520"
        />
        <CategoryCard
          image={WineTieredDress}
          brand="Nykaa Fashion"
          product="Wine Tiered Dress"
          price="INR 400"
        />
        <CategoryCard
          image={GreenJumpsuit}
          brand="Myntra"
          product="Green Jumpsuit"
          price="INR 370"
        />
        <CategoryCard
          image={BlackJumpSuit}
          brand="Zara"
          product="Black Jumpsuit"
          price="INR 410"
        />
      </div>
    </>
  )
}

export default DressesWomen