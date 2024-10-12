import ContactForm from "@/components/ContactForm";
import CounterUp from "@/components/CounterUp";
import CourseGrid from "@/components/CourseCard";
import CourseCard from "@/components/CourseCard";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";

import Internship from "@/components/Internship";
import Parallax from "@/components/Parallax";
// import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden 
   mx-auto  sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav
  navItems={[
    { name: 'Home', link: '', icon: <></> },
    { name: 'About', link: '#about', icon: <></> },
    { name: 'Service', link: '#services', icon: <></> },
    { name: 'Course', link: '#courses', icon: <></> },
    { name: 'Contact', link: '#contact', icon: <></> },
  ]}
/>

      <Hero />
      <Grid />
      <CounterUp />
      <Parallax />
      {/* <Services /> */}
      <Testimonials />
      <Courses />
      <ContactForm />

    </div>
    <Footer />
   </main>
  );
}
