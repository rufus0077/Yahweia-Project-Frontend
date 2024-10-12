import React from 'react'
import { StickyScroll } from './ui/StickyScroll'
import { DirectionAwareHover } from './ui/DirectionAwareHover';
import { ParallaxScroll } from './ui/ParallaxScroll';
import CourseGrid from './CourseCard';
import MagicBorder from './ui/MagicBorder';


const items = [
    {
      imageUrl: "/Mern.jpg",
      children: (
        <div>
          <h1>Welcome to Our Site</h1>
          <p>Explore our amazing content and features.</p>
        </div>
      ),
      childrenClassName: "overlay-text",
      imageClassName: "background-image  objetc-fit",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1483721310020-03333e577078",
      children: (
        <div>
          <h1>Discover Our Services</h1>
          <p>Learn more about what we offer.</p>
        </div>
      ),
      childrenClassName: "overlay-text-alt",
      imageClassName: "background-image-alt",
    },
    {
      imageUrl: "/ai2.jpg",
      children: (
        <div>
          <h1>Join Our Community</h1>
          <p>Be a part of something great.</p>
        </div>
      ),
      childrenClassName: "overlay-text-highlight",
      imageClassName: "background-image-highlight",
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1483721310020-03333e577078",
        children: (
          <div>
            <h1>Discover Our Services</h1>
            <p>Learn more about what we offer.</p>
          </div>
        ),
        childrenClassName: "overlay-text-alt",
        imageClassName: "background-image-alt",
      },
  ];
  const imageUrls = [
    "https://images01.nicepagecdn.com/page/36/27/website-template-preview-3627444.webp" ,
     "https://images01.nicepagecdn.com/page/29/08/website-template-preview-2908283.webp" ,
     "https://images01.nicepagecdn.com/page/70/43/website-template-preview-70436.webp" ,
     "https://images01.nicepagecdn.com/page/22/94/website-template-preview-2294603.webp", 
    
  ];
  

const Courses = () => {
  return (
    <div className='py-10 md:py-20 lg:py-20' id='courses'>


        <h1 className='lg:text-4xl text-3xl pb-20  text-center text-white-200 font-sans font-bold z-10 '>
               Courses
                
        </h1>
        {/* <StickyScroll content={content} /> */}

        {/* <div className='flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20'>
        {items.map((item, index) => (
        <DirectionAwareHover
          key={index}
          imageUrl={item.imageUrl}
          children={item.children}
          childrenClassName={item.childrenClassName}
          imageClassName={item.imageClassName}
        />
      ))}


            
        </div> */}
          {/* <ParallaxScroll images={imageUrls} />
          
          
          */}

            <CourseGrid />



          
      
    <div className='items-center py-10 lg:py-20  relative justify-center flex'>
            
        {/* <button className="px-8 py-2 rounded-full relative bg-transparent text-white text-sm hover:shadow-2xl hover:shadow-white/[0.2] border border-zinc-700">
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            <span className="relative text-lg font-sans hover:text-yellow-500 z-20">
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcWdcEUk11iQd6FoeucI-cqVIhtzwzCUskuTrB2zJxwiIwpA/viewform"> Register Now</a>
            </span>
        </button> */}

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcWdcEUk11iQd6FoeucI-cqVIhtzwzCUskuTrB2zJxwiIwpA/viewform">
                    <MagicBorder title='Register now' icon={<></>} position={'right'} />
                </a>
        
    
    </div>    
        
    
    
    </div>
  )
}

export default Courses