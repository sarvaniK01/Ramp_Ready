import React from 'react'

// components
import CategoryCard from './CategoryCard'

// Blazers
import BlackBlazer from "../../public/assets/Rent/Rent-Main/Men/Formal/blazers/black-blazer.png"
import GreyBlazer from "../../public/assets/Rent/Rent-Main/Men/Formal/blazers/grey-blazer.png"
import WhiteBlazer from "../../public/assets/Rent/Rent-Main/Men/Formal/blazers/off-white-blazer.png"
import TealBlazer from "../../public/assets/Rent/Rent-Main/Men/Formal/blazers/teal-blazer.png"

// Suits
import BlackSuit from "../../public/assets/Rent/Rent-Main/Men/Formal/suits/black-checked-suit.png"
import CharcoalSuit from "../../public/assets/Rent/Rent-Main/Men/Formal/suits/charcoal-formal-suit.png"
import NavySuit from "../../public/assets/Rent/Rent-Main/Men/Formal/suits/navy-blue-three-piece-suit.png"

// trousers
import BlackTrousers from "../../public/assets/Rent/Rent-Main/Men/Formal/trousers/black-trousers-men.png"
import GreyTrousers from "../../public/assets/Rent/Rent-Main/Men/Formal/trousers/grey-trousers-men.png"
import BlueTrousers from "../../public/assets/Rent/Rent-Main/Men/Formal/trousers/navy-blue-trousers-men.jpg"



function Formal() {
  return (
    <>
        <p className='mx-5 text-center mb-8 tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Formal Wear</p>
        <div className='mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10'>
            {/* Blazers */}
            <CategoryCard
              image={BlackBlazer}
              brand="Van Heusen"
              product="Black Fitted Blazer"
              price="INR 400"
            />
            <CategoryCard
              image={GreyBlazer}
              brand="Peter England"
              product="Grey Blazer"
              price="INR 450"
            />
            <CategoryCard
              image={WhiteBlazer}
              brand="Van Heusen"
              product="White Blazer"
              price="INR 420"
            />
            <CategoryCard
              image={TealBlazer}
              brand="Peter England"
              product="Teal Blazer"
              price="INR 500"
            />

            {/* Suits*/}
            <CategoryCard
              image={BlackSuit}
              brand="Van Heusen"
              product="Black Fitted Suit"
              price="INR 700"
            />
            <CategoryCard
              image={NavySuit}
              brand="Peter England"
              product="Navy Blue Suit"
              price="INR 650"
            />
            <CategoryCard
              image={CharcoalSuit}
              brand="Van Heusen"
              product="Charcoal Suit"
              price="INR 750"
            />

            {/* Trousers*/}
            {/* <CategoryCard
              image={BlackTrousers}
              brand="Van Heusen"
              product="Black Fitted Trousers"
              price="INR 400"
            /> */}
            <CategoryCard
              image={GreyTrousers}
              brand="Peter England"
              product="Grey Trousers"
              price="INR 350"
            />
            <CategoryCard
              image={BlueTrousers}
              brand="Van Heusen"
              product="Blue Trousers"
              price="INR 450"
            />
        </div>
    </>
  )
}

export default Formal