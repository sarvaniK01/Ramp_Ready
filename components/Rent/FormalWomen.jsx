import React from 'react'

import CategoryCard from './CategoryCard'

// Blazers
import PinkBlazer from '../../public/assets/Rent/Rent-Main/Women/formal/pink-fitted-blazer.png'
import BlackBlazer from '../../public/assets/Rent/Rent-Main/Women/formal/black-solid-blazer.png'
import BlueBlazer from '../../public/assets/Rent/Rent-Main/Women/formal/navy-blue-striped-blazer.png'
import WhiteBlazer from '../../public/assets/Rent/Rent-Main/Women/formal/white-open-front-blazer.png'

// Trousers
import BlackTrousers from '../../public/assets/Rent/Rent-Main/Women/formal/balc-mid-rise-striped-trousers.png'
import GreyTrouser from '../../public/assets/Rent/Rent-Main/Women/formal/grey-regular-tapered-trouser.png'
import BeigeTrouser from '../../public/assets/Rent/Rent-Main/Women/formal/high-waist-beige-trousers.png'
import WideLegTrouser from '../../public/assets/Rent/Rent-Main/Women/formal/pleated-wide-leg-trousers.png'

// Skirts
import PleatedSkirt from '../../public/assets/Rent/Rent-Main/Women/formal/solid-pleated-skirt.png'

// Tops
import RedTop from '../../public/assets/Rent/Rent-Main/Women/formal/red-solid-v-neck-top.png'
import RustTop from '../../public/assets/Rent/Rent-Main/Women/formal/rust-peplum-top.png'
import TealTop from '../../public/assets/Rent/Rent-Main/Women/formal/teal-tie-up-top.png'
import RoundNeckTop from '../../public/assets/Rent/Rent-Main/Women/formal/white-round-neck-pleated-top.png'

// Shirts
import LavenderShirt from '../../public/assets/Rent/Rent-Main/Women/formal/solid-lavender-formal-shirt.png'
import PinkShirt from '../../public/assets/Rent/Rent-Main/Women/formal/pink-full-sleeve-formal-shirt.png'

function FormalWomen() {
  return (
    <>
        <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Formal Wear</p>
        <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
            {/* Blazers */}
            <CategoryCard
              image={PinkBlazer}
              brand="Van Heusen"
              product="Pink Blazer"
              price="INR 400"
            />
            <CategoryCard
              image={BlueBlazer}
              brand="LifeStyle"
              product="Blue Blazer"
              price="INR 450"
            />
            <CategoryCard
              image={BlackBlazer}
              brand="Sassaffras"
              product="Black Blazer"
              price="INR 420"
            />
            <CategoryCard
              image={WhiteBlazer}
              brand="Van Heusen"
              product="White Blazer"
              price="INR 500"
            />

            {/* Trousers */}
            <CategoryCard
              image={BlackTrousers}
              brand="Levi's"
              product="Black Striped Trousers"
              price="INR 450"
            />
            <CategoryCard
              image={BeigeTrouser}
              brand="LifeStyle"
              product="Beige Trousers"
              price="INR 450"
            />
            <CategoryCard
              image={GreyTrouser}
              brand="Nykaa Fashion"
              product="Grey Trouser"
              price="INR 420"
            />
            <CategoryCard
              image={WideLegTrouser}
              brand="Zara"
              product="Wide Leg Trousers"
              price="INR 570"
            />

            {/* Skirt */}
            <CategoryCard
              image={PleatedSkirt}
              brand="Sassaffras"
              product="Pleated Black Skirt"
              price="INR 450"
            />

            {/* Tops */}
            <CategoryCard
              image={RedTop}
              brand="Sassaffras"
              product="Red Solid V-Neck Top"
              price="INR 420"
            />
            <CategoryCard
              image={TealTop}
              brand="Nykaa Fashion"
              product="Teal Top"
              price="INR 530"
            />
            <CategoryCard
              image={RustTop}
              brand="Sassaffras"
              product="Rust Top"
              price="INR 430"
            />
            <CategoryCard
              image={RoundNeckTop}
              brand="Myntra"
              product="White Pleated Top"
              price="INR 400"
            />
            
            {/* Shirt */}
            <CategoryCard
              image={LavenderShirt}
              brand="Van Heusen"
              product="Lavender Shirt"
              price="INR 450"
            />
            <CategoryCard
              image={PinkShirt}
              brand="Van Heusen"
              product="Pink Solid Shirt"
              price="INR 510"
            />
        </div>
    </>
  )
}

export default FormalWomen