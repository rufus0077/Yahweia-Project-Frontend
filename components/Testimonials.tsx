import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'



const quotesArray = [
    {
      quote: "Trio Devs exceeded our expectations with their unparalleled web development skills. They transformed our vision into a stunning, functional website. Their dedication . Highly recommend for exceptional web solutions. ",
      name: "Kanmani Suresh Kumar",
      title: "CEO & Founder of Spark AI",
      imgUrl: "./testimonials-1.jpg"
    },
    {
      quote: "Trio Devs delivers unparalleled app development expertise. Their commitment to quality, timely delivery, and client satisfaction sets them apart. and  Exceptional team, exceptional results!.",
      name: "Ramar Annadurai",
      title: "CEO & Founder of Scurtiny Bookkeeper",
      imgUrl: "./testimonials-2.jpg"
    },
    {
      quote: " Trio Devs exceeded our expectations in blockchain development. Their innovative solutions and commitment to quality are unmatched. Working with them was a game-changer for our project. ",
      name: "Dr.Joshua Martin",
      title: "Doctor - UK",
      imgUrl: "./testimonials-4.jpg"
    },

    {
        quote: "Exceptional design expertise! Trio Devs crafted a logo that perfectly captures our brand essence. Their professionalism, and prompt delivery make them our go-to choice for design solutions. ",
        name: "Janet",
        title: "Blessy Boutique",
        imgUrl: "./testimonials-3.jpg"
      },
      
      {
        quote: "Simplified our restaurant operations with Trio Devs' software! User-friendly, efficient, and tailored to our needs. Grateful for their expert team's support in enhancing our business. Highly recommend!. ",
        name: "Amal Raj",
        title: "Elite Rottu Kadai Restaurant - Owner",
        imgUrl: "./testimonials-5.jpg"
      },






  ];

const Testimonials = () => {
  return (
    <div className='py-32 md:py-20 lg:py-20' id='services'>


        <h1 className='lg:text-4xl text-3xl  text-center text-white-200 font-sans font-bold z-10 '>
               Testimonials
                
        </h1>
        <p className='text-white-100 pb-20 text-sm text-center lg:text-lg  mt-4'>Discover the stories of delighted customers. Our success is measured by the satisfaction of those we serve. Read their experiences and join the journey of excellence.</p>
        <InfiniteMovingCards items={quotesArray} speed='slow'/>
        
        
    
    
    </div>
  )
}

export default Testimonials