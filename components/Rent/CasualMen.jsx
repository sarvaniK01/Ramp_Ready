import React from 'react'

// components
import CategoryCard from './CategoryCard'

// bottomwear
import BeigeCargoPants from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/beige-cargo-pants.png"
import BlackSkinnyJeans from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/black-skinny-fit-jeans.png"
import BlueRegularFitJeans from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/blue-regular-fit-jeans.png"
import KhaakiPants from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/khaki-cargo-pants.png"
import DistressedJeans from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/slim-fit-distressed-jeans.png"

// tshirts
import BlueTshirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/blue-tshirt.png"
import PoloShirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/casual-polo-shirt.png"
import GreySweatShirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/grey-oversized-sweatshirt.png"
import MarvelSweatShirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/marvel-sweatshirt.png"
import PrintedTshirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/printed-tshirt.png"
import WhitePoloShirt from "../../public/assets/Rent/Rent-Main/Men/Casual/tshirts/white-beige-polo-shirt.png"

// Shirts
import BlackShirt from "../../public/assets/Rent/Rent-Main/Men/Casual/shirts/black-solid-shirt.png"
import WhiteShirt from "../../public/assets/Rent/Rent-Main/Men/Casual/shirts/white-shirt-men.png"

function CasualMen() {
  return (
    <>
        <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Casual Wear</p>
        <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
            {/* Bottomwear */}
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

            {/* Tshirts */}
            <CategoryCard
              image={BlueTshirt}
              brand="Flying Machine"
              product="Blue Tshirt"
              price="INR 400"
            />
            <CategoryCard
              image={PoloShirt}
              brand="Levi's"
              product="Polo Shirt"
              price="INR 450"
            />
            <CategoryCard
              image={GreySweatShirt}
              brand="Flying Machine"
              product="Grey Sweatshirt"
              price="INR 420"
            />
            <CategoryCard
              image={MarvelSweatShirt}
              brand="Bewakoof"
              product="Marvel Sweatshirt"
              price="INR 500"
            />
            <CategoryCard
              image={PrintedTshirt}
              brand="Bewakoof"
              product="Printed Tshirt"
              price="INR 540"
            />

            <CategoryCard
              image={WhitePoloShirt}
              brand="Peter England"
              product="Printed Tshirt"
              price="INR 540"
            />

            {/* Shirts */}
            <CategoryCard
              image={BlackShirt}
              brand="Peter England"
              product="Black Solid Shirt"
              price="INR 400"
            />
            <CategoryCard
              image={WhiteShirt}
              brand="Van Heusen"
              product="White Solid Shirt"
              price="INR 450"
            />
        </div>
    </>
  )
}

export default CasualMen