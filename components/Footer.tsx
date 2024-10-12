import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <div className="bg-black-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start rounded-lg p-20">
        <div className="p-5">
          <ul>
            <p className="text-yellow-500 font-bold text-3xl pb-6">
              Trio<span className="text-yellow-500">Devs</span>
            </p>
            <div className="flex gap-6 pb-5">
             <a href="https://instagram.com"><FaInstagram className="text-2xl cursor-pointer text-fuchsia-500 hover:text-yellow-600" /></a> 
              <a href="https://instagram.com"><FaTwitter className="text-2xl cursor-pointer hover:text-yellow-500 text-blue-600" /></a>
              <a href="https://instagram.com"><FaLinkedin className="text-2xl cursor-pointer hover:text-yellow-500 text-blue-600" /></a>
              <a href="https://instagram.com"><FaYoutube className="text-2xl cursor-pointer hover:text-yellow-500 text-red-600" /></a>
            </div>
          </ul>
        </div>
        <div className="p-5 font-sans">
          <ul>
            <p className="text-yellow-500 font-bold text-2xl pb-4">Check out</p>
            <li className="text-gray-300 text-sm pb-2 pl-2  hover:text-blue-600 cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              <a href="#about">About us</a>
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              <a href="">Terms of service</a>
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2  hover:z-10 hover:text-blue-600 cursor-pointer">
              <a href="">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="p-5 font-sans">
          <ul>
            <p className="text-yellow-500 font-bold text-2xl pb-4">Our Services</p>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              App Development
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Web Development
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Software Development
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Digital Marketing
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              BlockChain
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Data Analytics
            </li>
            <li className="text-gray-300 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Graphic Design
            </li>
          </ul>
        </div>
      

<div className="pt-6 ml-[-20px] sm:ml-0">
  <p className="text-2xl font-bold tracking-tight text-yellow-500 sm:text-2xl">
    Subscribe to our newsletter.
  </p>
  <p className="mt-4 text-sm leading-8 text-gray-300">
    If you want to know about us, subscribe.
  </p>
  <div className="mt-6 flex flex-col sm:flex-row max-w-md gap-y-4 sm:gap-y-0 sm:gap-x-4">
    <label htmlFor="email-address" className="sr-only">
      Email address
    </label>
    <input
      id="email-address"
      name="email"
      type="email"
      autoComplete="email"
      required
      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      placeholder="Enter your email"
    />
    <button
      type="submit"
      className="flex-none rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      Subscribe
    </button>
  </div>
</div>




{/* test  */}


      </div>
      {/* <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50">
        <h1 className="text-gray-800 font-semibold">
          &copy; 2021-2022 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            streamline{" "}
          </span>
        </h1>
      </div> */}
  {/* <div className="p-5 font-sans">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-yellow-500 text-sm pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-yellow-500 text-md pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-yellow-500 text-md pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-yellow-500 text-md pb-2 pl-2 hover:text-blue-600 cursor-pointer">
               Downloads & Resources
            </li>
            <li className="text-yellow-500 text-md pb-2 pl-2 hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div> */}

        {/* <div className=" pt-6 ">
          <p className="text-2xl font-bold tracking-tight text-yellow-500 sm:text-2xl">Subscribe to our newsletter.</p>
          <p className="mt-4 text-sm leading-8 text-gray-300">
            If you want to know about us subscribe
          </p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Subscribe
            </button>
          </div>
        </div> */}


{/* 2nd change */}

{/* <div className="pt-6 px-4 sm:px-0">
  <p className="text-2xl font-bold tracking-tight text-yellow-500 sm:text-2xl text-center sm:text-left">
    Subscribe to our newsletter.
  </p>
  <p className="mt-4 text-sm leading-8 text-gray-300 text-center sm:text-left">
    If you want to know about us, subscribe.
  </p>
  <div className="mt-6 flex flex-col sm:flex-row max-w-md gap-y-4 sm:gap-y-0 sm:gap-x-4 mx-auto sm:mx-0">
    <label htmlFor="email-address" className="sr-only">
      Email address
    </label>
    <input
      id="email-address"
      name="email"
      type="email"
      autoComplete="email"
      required
      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      placeholder="Enter your email"
    />
    <button
      type="submit"
      className="flex-none rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      Subscribe
    </button>
  </div>
</div> */}

{/* 3rd change */}

{/* <div className="pt-6">
  <p className="text-2xl font-bold tracking-tight text-yellow-500 sm:text-2xl">
    Subscribe to our newsletter.
  </p>
  <p className="mt-4 text-sm leading-8 text-gray-300">
    If you want to know about us, subscribe.
  </p>
  <div className="mt-6 flex flex-col sm:flex-row max-w-md gap-y-4 sm:gap-y-0 sm:gap-x-4">
    <label htmlFor="email-address" className="sr-only">
      Email address
    </label>
    <input
      id="email-address"
      name="email"
      type="email"
      autoComplete="email"
      required
      className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      placeholder="Enter your email"
    />
    <button
      type="submit"
      className="flex-none rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
    >
      Subscribe
    </button>
  </div>
</div> */}



    </>
  );
};

export default Footer;
