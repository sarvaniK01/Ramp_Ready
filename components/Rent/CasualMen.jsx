import React from 'react'

// components
import CategoryCard from './CategoryCard'

// images
import BeigeCargoPants from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/beige-cargo-pants.png"
import BlackSkinnyJeans from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/black-skinny-fit-jeans.png"
import BlueRegularFitJeans from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/blue-regular-fit-jeans.png"
import KhaakiPants from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/khaki-cargo-pants.png"
import DistressedJeans from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/slim-fit-distressed-jeans.png"


function CasualMen() {
  return (
    <>
        <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Casual Wear</p>
        <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
            {/* Blazers */}
            <CategoryCard
              image={BeigeCargoPants}
              brand="Flying Machine"
              product="Beige Cargo Pants"
              price="INR 400"
            />
            <CategoryCard
              image={BlackSkinnyJeans}
              brand="Levi's"
              product="Black Skinny Jeans"
              price="INR 450"
            />
            <CategoryCard
              image={BlueRegularFitJeans}
              brand="Flying Machine"
              product="Blue Regular Fit Jeans"
              price="INR 420"
            />
            <CategoryCard
              image={KhaakiPants}
              brand="Peter England"
              product="Khaaki Cargo Pants"
              price="INR 500"
            />
            <CategoryCard
              image={DistressedJeans}
              brand="Levi's"
              product="Distressed Blue Jeans"
              price="INR 540"
            />
        </div>
    </>
  )
}

export default CasualMen