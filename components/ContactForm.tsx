"use client"

import React from 'react';

const ContactForm: React.FC = () => {
    const contactMethods = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            contact: "teamtriodevs@gmail.com",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            contact: "+91 7094228508",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            contact: "Trichy , India - 620102",
        },
    ];

    return (
        <main className="pb-14" id="contact">
             <h1 className='lg:text-4xl text-3xl pb-20  text-center text-white-200 font-sans font-bold z-10 '>
               Contact Us
                
        </h1>
          <div className='bg-yellow-500  py-20 px-30 rounded-lg' >
            <div className="max-w-screen-xl mx-auto px-4  text-black md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-black text-2xl font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have. We look forward to hearing from you! Please fill out the form, or use the contact information below.
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {contactMethods.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-x-3">
                                        <div className="flex-none text-black">
                                            {item.icon}
                                        </div>
                                        <p>{item.contact}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form action="https://getform.io/f/aejynnyb" method='POST' className="space-y-5">
                            <div>
                                <label className="font-bold text-black">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    placeholder='Type your name'
                                    required
                                    name='Name'
                                    className="w-full mt-2 px-3 py-3   text-white border-gray-500 bg-zinc-900 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-bold text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    required
                                    name='mail'
                                    className="w-full mt-2 px-3 py-3  text-white border-gray-500 bg-zinc-900 outline-none border focus:border-black shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-bold text-black">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    placeholder='Company name'
                                    required
                                    name='company'
                                    className="w-full mt-2 px-3 py-3  text-white border-gray-500 bg-zinc-900 outline-none border focus:border-black shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-bold text-black">
                                    Message
                                </label>
                                <textarea
                                    required
                                    placeholder='Type something.......'
                                    name='message'
                                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none  text-white border-gray-500 bg-zinc-900 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button className="w-full px-4 py-2 hover:text-black text-yellow-500 font-medium bg-black hover:bg-teal-600 active:bg-indigo-600 rounded-lg duration-150">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </main>
    );
};

export default ContactForm;
