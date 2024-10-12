"use client"
import React from 'react';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, title, description }) => {
  return (
    <div className=" text-white font-sans rounded-lg border border-gray-950 shadow-lg overflow-hidden"  style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }} >
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-sans font-bold mb-2">{title}</h2>
        <p className="text-gray-400 font-sans text-sm lg:text-md ">{description}</p>
      </div>
    </div>
  );
};

const CourseGrid: React.FC = () => {
  const courses = [
    {
      image: '/ai4.png',
      title: 'Artificial Intelligence',
      description: 'Decode the Future: Dive into Artificial Intelligence, Where Algorithms Shape Possibilities!',
    },
    {
      image: '/uiux.png',
      title: 'UI/UX Design',
      description: 'Design User Experiences Today Dive into the Art of UI/UX with Our Dynamic Course!',
    },
    {
      image: '/Mern.jpg',
      title: 'MERN Stack',
      description: 'Code, Connect, Conquer: Unleash the Power of MERN Stack with Our Comprehensive Training!',
    },
    {
      image: '/DigitalMarketing.png',
      title: 'Digital Marketing',
      description: 'Unlock the Secrets of Digital Marketing - Your Gateway to Digital Dominance',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 p-6">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          image={course.image}
          title={course.title}
          description={course.description}
        />
      ))}
    </div>
  );
};

export default CourseGrid;
// export default {CourseCard,CourseGrid};
