import React from 'react'

// components
import CategoryCard from './CategoryCard'

// images
// kurta
import BlackKurta from "../../public/assets/Rent/Rent-Main/Men/Traditional/black-full-sleeves-kurta.png"
import BlueKurta from "../../public/assets/Rent/Rent-Main/Men/Traditional/blue-embroidered-kurta.png"
import PinkSherwani from "../../public/assets/Rent/Rent-Main/Men/Traditional/dusty-pink-sherwani.png"
import CreamKurtaSet from "../../public/assets/Rent/Rent-Main/Men/Traditional/cream_kerta_set.png"


function TraditionalMen() {
  return (
    <>
        <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Traditional Wear</p>
        <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
            {/* Blazers */}
            <CategoryCard
              image={BlackKurta}
              brand="Manyavar"
              product="Black Kurta For Men"
              price="INR 450"
            />
            <CategoryCard
              image={BlueKurta}
              brand="House of Pataudi"
              product="Blue Kurta For Men"
              price="INR 450"
            />
            <CategoryCard
              image={CreamKurtaSet}
              brand="Manyavar"
              product="Cream Kurta Set For Men"
              price="INR 420"
            />
            <CategoryCard
              image={PinkSherwani}
              brand="House of Pataudi"
              product="Pink Sherwani For Men"
              price="INR 500"
            />
        </div>
    </>
  )
}

export default TraditionalMen