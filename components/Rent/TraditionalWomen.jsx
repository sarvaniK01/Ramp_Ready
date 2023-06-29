import React from 'react'

import CategoryCard from './CategoryCard'

import BlackStripedKurta from "../../public/assets/Rent/Rent-Main/Women/traditional/black-teal-and-yellow-striped-long-kurta.png"
import BluePrintedTunic from "../../public/assets/Rent/Rent-Main/Women/traditional/blue-white-printed-tunic.png"
import BrownAnarkali from "../../public/assets/Rent/Rent-Main/Women/traditional/brown-chikankari-anarkali-suit.png"
import PinkSharara from "../../public/assets/Rent/Rent-Main/Women/traditional/fuchsia-pink-festive-embroidered-sharara-set.png"
import GreenKurta from "../../public/assets/Rent/Rent-Main/Women/traditional/green-striped-straight-kurta.png"
import BandhaniSuit from "../../public/assets/Rent/Rent-Main/Women/traditional/pink-bandhani-suit-set.png"
import PinkCoord from "../../public/assets/Rent/Rent-Main/Women/traditional/pink-co-ord-fusion-set.png"
import WhiteKurta from "../../public/assets/Rent/Rent-Main/Women/traditional/pure-cambri-cotton-white-jaipur-kurta.png"
import RedSharara from "../../public/assets/Rent/Rent-Main/Women/traditional/red-sharara-set.png"
import WineSuit from "../../public/assets/Rent/Rent-Main/Women/traditional/wine-gold-printed-suit.png"

// Lehenga
import PinkSilkLehenga from "../../public/assets/Rent/Rent-Main/Women/traditional/deep-pink-silk-lehenga.png"
import GreenPurpleLehenga from "../../public/assets/Rent/Rent-Main/Women/traditional/green-and-purple-brocade-lehenga.png"
import GreenLehenga from "../../public/assets/Rent/Rent-Main/Women/traditional/green-georgette-lehenga.png"

// Saree
import WineChiffonSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/dual-shade-wine-shimmer-chiffon-saree.png"
import GreenHandloomSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/forest-green-cotton-handloom-saree.png"
import BlueSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/navy-blue-printed-ruffle-saree.png"
import WhiteSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/organza-silk-off-white-saree.png"
import GoldSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/pink-gold-zari-edged-linen-saree.png"
import GreenKSaree from "../../public/assets/Rent/Rent-Main/Women/traditional/sea-green-traditional-kanjeevaram-saree.png"

function TraditionalWomen() {
  
  return (
    <>
      <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Traditional  Wear</p>

      <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
        <CategoryCard
          image={BlackStripedKurta}
          brand="Indya"
          product="Black Striped Kurta"
          price="INR 400"
        />
        <CategoryCard
          image={BluePrintedTunic}
          brand="Mango"
          product="Blue Printed Tunic"
          price="INR 350"
        />
        <CategoryCard
          image={BrownAnarkali}
          brand="BIBA"
          product="Chikankari Anarkali"
          price="INR 470"
        />
        <CategoryCard
          image={PinkSharara}
          brand="Soch"
          product="Pink Embroidered Sharara"
          price="INR 500"
        />
        <CategoryCard
          image={GreenKurta}
          brand="Libas"
          product="Green Striped Kurta"
          price="INR 410"
        />
        <CategoryCard
          image={BandhaniSuit}
          brand="Soch"
          product="Pink Bandhani Suit Set"
          price="INR 460"
        />
        <CategoryCard
          image={PinkCoord}
          brand="Indya"
          product="Pink Co-ord Fusion Set"
          price="INR 430"
        />
        <CategoryCard
          image={WhiteKurta}
          brand="Mango"
          product="White Jaipur Kurta"
          price="INR 350"
        />
        <CategoryCard
          image={RedSharara}
          brand="BIBA"
          product="Red Sharara Set"
          price="INR 430"
        />
        <CategoryCard
          image={WineSuit}
          brand="Soch"
          product="Wine & Gold Suit"
          price="INR 400"
        />

        {/* Lehengas */}
        <CategoryCard
          image={GreenLehenga}
          brand="GlobalDesi"
          product="Green Georgette Lehenga"
          price="INR 720"
        />
        <CategoryCard
          image={PinkSilkLehenga}
          brand="Manish Malhotra"
          product="Pink Silk Lehenga"
          price="INR 850"
        />
        <CategoryCard
          image={GreenPurpleLehenga}
          brand="Indya"
          product="Green & Purple Lehenga"
          price="INR 700"
        />

        {/* Saree */}
        <CategoryCard
          image={WineChiffonSaree}
          brand="GlobalDesi"
          product="Wine Chiffon Saree"
          price="INR 700"
        />
        <CategoryCard
          image={GreenHandloomSaree}
          brand="Indya"
          product="Green Handloom Saree"
          price="INR 850"
        />
        <CategoryCard
          image={BlueSaree}
          brand="BIBA"
          product="Blue Ruffle Saree"
          price="INR 700"
        />
        <CategoryCard
          image={WhiteSaree}
          brand="GlobalDesi"
          product="White Organza Saree"
          price="INR 650"
        />
        <CategoryCard
          image={GoldSaree}
          brand="Manish Malhotra"
          product="Gold Zari Saree"
          price="INR 750"
        />
        <CategoryCard
          image={GreenKSaree}
          brand="Chennai Silks"
          product="Green Kanjeevaram Saree"
          price="INR 980"
        />
      </div>
      
    </>
  )
}

export default TraditionalWomen