import React from 'react'
import { useState, useEffect } from 'react'
import "../../app/globals.css"
import { AiOutlineArrowLeft } from "react-icons/ai"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import emailjs from "emailjs-com"

import Navbar from '../Navbar'
import Footer from '../Footer'
import ErrorCustom from './ErrorCustom';
import Link from 'next/link';

const SERVICE_ID = "service_gs9n1pk";
const TEMPLATE_ID = "template_5tsqrho";
const USER_ID = "t6k50RZti9gU6EtFm";

function Contact() {
  const initialValues = {
    'name': "",
    'email': "",
    'message': "",
  }

  const [submit, setSubmit] = useState(false)
  
  const validationSchema = Yup.object(
    {
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid Email').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }
  ) 

  const handleSubmit = (e, values) => {
      console.log('Form Submitted', values)
      setSubmit(true)
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log("result:",result.text);
        console.log("Data sent successfully")
      }, (error) => {
        console.log("error",error.text);
        console.log("Sending Email Failed")
      });
    e.target.reset()
  }

  return (
    <>
      <Navbar/>
      <div className='pt-36 pb-10 bg-black font-Playfair'>
        <p className='text-white text-6xl font-bold text-center'>Contact Form</p>
        <Formik
          initialValues={initialValues}
          validationSchema = {validationSchema}
          onSubmit = {handleSubmit}
          className="flex justify-center"
        >
          <Form className='flex flex-col w-[50%] pt-7 pb-10 mx-auto text-xl' onSubmit={handleSubmit}>
            {submit 
              ? 
              <div className='text-3xl text-white text-center py-20'>
                Successfully sent your message to our admin!
                <div className='text-[1.5rem] pt-16 mx-auto w-[50%]'>
                  <Link href="/">
                    <button className='border border-grey py-2 px-4 hover:bg-white/10 ease-in duration-200 '>
                      <div className='flex flex-row gap-x-3'>
                        <AiOutlineArrowLeft className='my-auto'/>
                        Home
                      </div>
                    </button>
                  </Link>
                  
                  <button className='border border-grey py-2 px-4 hover:bg-white/10 ease-in duration-200 mt-10' onClick={() => {
                    window.location.reload(false)
                  }}>
                    Contact Form
                  </button>
                  
                </div>
              </div> 
              : 
              <>
                <div className='flex flex-col py-5'>
                  <label className='text-white pb-2 font-bold text-2xl'>Name</label>
                  <Field 
                    name="name" placeholder="First name   Last name" 
                    className='p-2 rounded-sm '
                  />
                  <ErrorMessage name="name" render={(msg) => <ErrorCustom message={msg}/>}/>
                </div>

                <div className='flex flex-col py-5'>
                  <label className='text-white pb-2 font-bold text-2xl'>Email ID</label>
                  <Field name="email" placeholder="Email ID" className="p-2 rounded-sm"/>
                  <ErrorMessage name="email" render={(msg) => <ErrorCustom message={msg}/>}/>
                </div>
                
                <div className='flex flex-col py-5'>
                  <label className='text-white pb-2 font-bold text-2xl'>Message</label>
                  <Field name="message"     as="textarea"   placeholder="Your Message" className="p-2 rounded-sm h-32"/>
                  <ErrorMessage name="message" render={(msg) => <ErrorCustom message={msg}/>}/>
                </div>
                <button 
                  type='submit' 
                  className='text-white my-10 p-5 border border-white text-2xl font-bold hover:bg-white/10 ease-in duration-200'>
                  Submit
                </button>
              </>
            }
          </Form>
        </Formik>
      </div>
      <Footer/>
    </>
  )
}

export default Contact