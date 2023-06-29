import React from 'react'

import CategoryCard from './CategoryCard'

// Skirt
import FloralSkirt from "../../public/assets/Rent/Rent-Main/Women/casual/beige-floral-asymmetric-skirt.png"
import TexturedPurpleSkirt from "../../public/assets/Rent/Rent-Main/Women/casual/textured-purple-skirt.png"

// Bottomwear
import SwirlJeans from "../../public/assets/Rent/Rent-Main/Women/casual/black-and-white-swirl-print-jeans.png"
import SequinPants from "../../public/assets/Rent/Rent-Main/Women/casual/black-sequin-high-waisted-fit-and-flare-pants.png"
import BlueBootcutJeans from "../../public/assets/Rent/Rent-Main/Women/casual/blue-dip-dyed-bootcut-jeans.png"
import CharcoalJoggers from "../../public/assets/Rent/Rent-Main/Women/casual/charcoal-joggers.png"
import KhaakiCargoPants from "../../public/assets/Rent/Rent-Main/Women/casual/khaki-cargo-pants.png"
import LayeredPants from "../../public/assets/Rent/Rent-Main/Women/casual/layered-pants.png"
import MochaBrownCargoPants from "../../public/assets/Rent/Rent-Main/Women/casual/mocha-brown-cargo-pants.png"
import MulticoloredWideLegFloralPants from "../../public/assets/Rent/Rent-Main/Women/casual/multicolor-wide-lep-floral-pants.png"
import NavyBlueJoggers from "../../public/assets/Rent/Rent-Main/Women/casual/navy-blue-joggers.png"
import OffWhiteSweatpants from "../../public/assets/Rent/Rent-Main/Women/casual/off-white-sweatpants.png"
import OliveHighWaistedJeans from "../../public/assets/Rent/Rent-Main/Women/casual/olive-high-waisted-jeans.png"
import SolidCrinkleKnottedPantsWithBelt from "../../public/assets/Rent/Rent-Main/Women/casual/solid-crinkle-knotted-pants-with-belt.png"

// Dungaree
import BlueDungaree from "../../public/assets/Rent/Rent-Main/Women/casual/blue-denim-dungaree.png"

// Shirts
import FuchsiaShirt from "../../public/assets/Rent/Rent-Main/Women/casual/fuchsia-shirt.png"

// Tshirts
import BluePoloTshirt from "../../public/assets/Rent/Rent-Main/Women/casual/blue-solid-polo-tshirt.png"
import OffWhitePoloTshirt from "../../public/assets/Rent/Rent-Main/Women/casual/off-white-polo-tshirt.png"
import PrintedTshirt from "../../public/assets/Rent/Rent-Main/Women/casual/printed-tshirt.png"
import PinkDyeOversizedTshirt from "../../public/assets/Rent/Rent-Main/Women/casual/pink-dye-oversized-tshirt.png"

// Hoodie
import LavenderHoodie from "../../public/assets/Rent/Rent-Main/Women/casual/lavender-hoodie.png"

// Tops
import MaroonSatinTop from "../../public/assets/Rent/Rent-Main/Women/casual/maroon-satin-top.png"
import BrownRibbedTop from "../../public/assets/Rent/Rent-Main/Women/casual/brown-ribbed-top.png"
import GreenRibbedTop from "../../public/assets/Rent/Rent-Main/Women/casual/green-solid-ribbed-top.png"
import OffShoulderFloralTop from "../../public/assets/Rent/Rent-Main/Women/casual/off-shoulder-floral-top.png"
import OffWhiteBalloonSleeveTop from "../../public/assets/Rent/Rent-Main/Women/casual/off-white-balloon-sleeve-top.png"
import PinkFloralCropTop from "../../public/assets/Rent/Rent-Main/Women/casual/pink-floral-crop-top.png"
import StripedAsymmetricTop from "../../public/assets/Rent/Rent-Main/Women/casual/striped-asymmetric-top.png"


function CasualWomen() {
  return (
    <>
        <p className='text-center mb-8  tracking-widest font-Playfair text-white bg-black/70 text-2xl'>Casual Wear</p>
        <div className='grid grid-cols-3 gap-x-7 gap-y-10'>
            {/* Skirts */}
            <CategoryCard
              image={FloralSkirt}
              brand="Sassaffras"
              product="Asymmetric Floral Skirt"
              price="INR 400"
            />
            <CategoryCard
              image={TexturedPurpleSkirt}
              brand="Nykaa Fashion"
              product="Textured Purple Skirt"
              price="INR 420"
            />

            {/* BottomWear */}
            <CategoryCard
              image={SwirlJeans}
              brand="Zara"
              product="Black & White Swirl Jeans"
              price="INR 450"
            />
            <CategoryCard
              image={SequinPants}
              brand="Nykaa Fashion"
              product="Black Sequin Pants"
              price="INR 520"
            />
            <CategoryCard
              image={BlueBootcutJeans}
              brand="H&M"
              product="Blue Bootcut Jeans"
              price="INR 410"
            />
            <CategoryCard
              image={CharcoalJoggers}
              brand="Levi's"
              product="Charcoal Jogger"
              price="INR 320"
            />
            <CategoryCard
              image={KhaakiCargoPants}
              brand="Zara"
              product="Khaaki Cargo Pants"
              price="INR 450"
            />
            <CategoryCard
              image={LayeredPants}
              brand="Sassaffras"
              product="Layered Pants"
              price="INR 410"
            />
            <CategoryCard
              image={MochaBrownCargoPants}
              brand="H&M"
              product="Brown Cargo Pants"
              price="INR 400"
            />
            <CategoryCard
              image={MulticoloredWideLegFloralPants}
              brand="Zara"
              product="Multicolored Floral Pants"
              price="INR 620"
            />
            <CategoryCard
              image={NavyBlueJoggers}
              brand="Bewakoof"
              product="Navy Blue Joggers"
              price="INR 410"
            />
            <CategoryCard
              image={OffWhiteSweatpants}
              brand="Zara"
              product="Off White Sweatpants"
              price="INR 420"
            />
            <CategoryCard
              image={OliveHighWaistedJeans}
              brand="H&M"
              product="Olive High Waisted Jeans"
              price="INR 440"
            />
            <CategoryCard
              image={SolidCrinkleKnottedPantsWithBelt}
              brand="Nykaa Fashion"
              product="Crinkled Knotted Pants"
              price="INR 470"
            />

            {/* Dungaree */}
            <CategoryCard
              image={BlueDungaree}
              brand="Zara"
              product="Blue Dungaree"
              price="INR 480"
            />

            {/* Shirt */}
            <CategoryCard
              image={FuchsiaShirt}
              brand="Nykaa Fashion"
              product="Fuchsia Shirt"
              price="INR 350"
            />

            {/* Tshirts */}
            <CategoryCard
              image={BluePoloTshirt}
              brand="Sassaffras"
              product="Blue Polo Tshirt"
              price="INR 340"
            />
            <CategoryCard
              image={OffWhitePoloTshirt}
              brand="Nykaa Fashion"
              product="Off White Polo Tshirt"
              price="INR 400"
            />
            <CategoryCard
              image={PrintedTshirt}
              brand="Bewakoof"
              product="Printed Tshirt"
              price="INR 320"
            />
            <CategoryCard
              image={PinkDyeOversizedTshirt}
              brand="Zara"
              product="Pink Oversized Tshirt"
              price="INR 470"
            />

            {/* Hoodie */}
            <CategoryCard
              image={BrownRibbedTop}
              brand="Zara"
              product="Brown Ribbed Top"
              price="INR 350"
            />

            {/* Tops */}
            <CategoryCard
              image={GreenRibbedTop}
              brand="H&M"
              product="Green Ribbed Top"
              price="INR 340"
            />
            <CategoryCard
              image={MaroonSatinTop}
              brand="Sassaffras"
              product="Maroon Satin Top"
              price="INR 400"
            />
            <CategoryCard
              image={PinkFloralCropTop}
              brand="Zara"
              product="Pink Floral Crop Top"
              price="INR 420"
            />
            <CategoryCard
              image={OffShoulderFloralTop}
              brand="H&M"
              product="Off Shoulder Floral Top"
              price="INR 470"
            />
            <CategoryCard
              image={OffWhiteBalloonSleeveTop}
              brand="Sassaffras"
              product="White Balloon Sleeves Top"
              price="INR 440"
            />
            <CategoryCard
              image={StripedAsymmetricTop}
              brand="Nykaa Fashion"
              product="Striped Asymmetric Top"
              price="INR 400"
            />
        </div>
    </>
  )
}

export default CasualWomen