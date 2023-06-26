import React from 'react'

// components
import CategoryCard from './CategoryCard'

// kurta
import BlackKurta from "../../public/assets/Rent/Rent-Main/Men/Traditional/black-full-sleeves-kurta.png"
import BlueKurta from "../../public/assets/Rent/Rent-Main/Men/Traditional/blue-embroidered-kurta.png"
import CreamKurtaSet from "../../public/assets/Rent/Rent-Main/Men/Traditional/cream_kerta_set.png"
import KurtaAndJacket from "../../public/assets/Rent/Rent-Main/Men/Traditional/nehru-jacket-and-kurta.png"
import PurpleKurtaSet from "../../public/assets/Rent/Rent-Main/Men/Traditional/purple-kurta-set.png"

// Sherwanis
import PinkSherwani from "../../public/assets/Rent/Rent-Main/Men/Traditional/dusty-pink-sherwani.png"
import OffWhiteSherwani from "../../public/assets/Rent/Rent-Main/Men/Traditional/off-white-sherwani.png"
import PeachSherwani from "../../public/assets/Rent/Rent-Main/Men/Traditional/peach-sherwani-with-kurta.png"
import GreenSherwani from "../../public/assets/Rent/Rent-Main/Men/Traditional/green-designer-sherwani.png"


function TraditionalMen() {
  return (
    <>
        <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Traditional Wear</p>
        <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
            {/* Kurta */}
            <CategoryCard
              image={BlackKurta}
              brand="Manyavar"
              product="Black Kurta For Men"
              price="INR 450"
            />
            <CategoryCard
              image={BlueKurta}
              brand="FabIndia"
              product="Blue Kurta"
              price="INR 500"
            />
            <CategoryCard
              image={KurtaAndJacket}
              brand="LifeStyle"
              product="Pink Kurta with Jacket"
              price="INR 420"
            />
            <CategoryCard
              image={CreamKurtaSet}
              brand="Manyavar"
              product="Cream Kurta Set"
              price="INR 420"
            />
            <CategoryCard
              image={PurpleKurtaSet}
              brand="FabIndia"
              product="Purple Kurta Set"
              price="INR 460"
            />

            {/* Sherwanis */}
            <CategoryCard
              image={PinkSherwani}
              brand="House of Pataudi"
              product="Pink Sherwani"
              price="INR 550"
            />
            <CategoryCard
              image={GreenSherwani}
              brand="FabIndia"
              product="Green Sherwani"
              price="INR 570"
            />
            <CategoryCard
              image={PeachSherwani}
              brand="House of Pataudi"
              product="Peach Sherwani"
              price="INR 500"
            />
            <CategoryCard
              image={OffWhiteSherwani}
              brand="FabIndia"
              product="Off White Sherwani"
              price="INR 750"
            />

        </div>
    </>
  )
}

export default TraditionalMen