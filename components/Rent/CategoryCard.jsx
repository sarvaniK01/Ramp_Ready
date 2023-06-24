import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import BeigeCargoPants from "../../public/assets/Rent/Rent-Main/Men/Casual/bottoms/beige-cargo-pants.png"

function CategoryCard({image, brand, product, price}) {
  return (
    <>
        <div className='border hover:transition hover:ease-linear hover:duration-400 hover:delay-200 hover:border-black p-2'>
          <Image src={image} alt="beige cargo pants" width={200} className='border'/>
          <p className='font-bold'>{brand}</p>
          <p>{product}</p>
          <p className='font-bold'>{price}</p>
        </div>     
    </>
  )
}

export default CategoryCard