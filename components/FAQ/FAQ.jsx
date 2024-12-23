import React from 'react'
import Navbar from '../Navbar'
import "../../app/globals.css"
import Footer from '../Footer';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// import 'react-accessible-accordion/dist/fancy-example.css';


function FAQ() {
  return (
    <div className=' max-w-[1536px] mx-auto'>
      <Navbar />
      <div className='font-Playfair md:pt-32'>
        <p className='text-3xl md:text-5xl font-bold pt-16 text-center w-[70%] md:w-[100%] mx-auto'>Frequently Asked Questions</p>
        <Accordion
          allowMultipleExpanded
          allowZeroExpanded
          className='pt-16 mx-3 md:mx-32 mb-20 font-semibold text-lg md:text-xl'
        >
          {/* 1 */}
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do I start renting clothes?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                Register as a user and fill in the necessary information. Choose from the various options provided according to your liking 	and add it to the cart. Enter the details about the required clothing and make the payment through the payment gateway and collect the garment from the given shop location.
              </p>
                </AccordionItemPanel>
            </AccordionItem>
            
            {/* 2 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How can I, as a shop use the website? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                Register yourself as a shop and login. Go to the products page 	and upload all the necessary information about the product. The users will rent your product and directly arrive at the shop for the same. 
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 3 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What if the clothes that I rented get some stain or are damaged?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                The instructions are given on the user and shopkeeper instruction page. Please follow the rules accordingly. If some  damage is caused to the garment, then you must inform the shopkeeper about it and do the necessary. Ramp Ready is just a 	medium for renting clothes and is not responsible for any mishaps 	caused by the user.
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 4 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How can I rent my clothes as an individual on Ramp Ready? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                You can register as a shop and upload the garments and 		the necessary information. The user will pick up from the registered location.
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 5 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do I extend the rental duration? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                Please discuss it with the specified shopkeeper. The price of the 	clothes will increase depending on the extension of the number of days.
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 6 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is there any advance amount that has to be paid? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                You can discuss it with the shopkeeper and if it has to be paid 	in advance you can use the payment integration provided in our 	website.
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 7 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Do I need to clean the clothes before returning? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                Please do not attempt to clean or repair the garment as the shopkeepers will inspect the garment after your rental period to 	check for any damage and the laundry process will be different for the rented garments.
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 8 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Can I buy a rented garment? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                If you loved the garment and you want to buy it. Please discuss it with the shopkeeper and if they are providing the buy option. 
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 9 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Do I get any discount for the garments I am renting? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                We have provided a discount that is automatically calculated 	after you enter the information about the garment you want to 	rent. The discount is calculated based upon the number of days 	and also the number of garments you want to rent.
              </p>
                </AccordionItemPanel>
            </AccordionItem>

            {/* 10 */}
            <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Can I rent a garment for a day?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className='px-3 md:px-14'>
                The minimum rental period is 2 days and the maximum is 30 days. You can select the number of days after selecting the garment you want to rent.
              </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
      </div>
      <Footer/>
    </div>
  )
}

export default FAQ