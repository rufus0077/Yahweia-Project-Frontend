"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../MagicButton";
import animationData from '../../data/confetti.json'; // Ensure the path is correct

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Runs only on the client
  }, []);

  const handleCopy = () => {
    if (isClient && navigator.clipboard) {
      navigator.clipboard.writeText("rufusc2004@gmail.com");
      setCopied(true);
    }
  };

  return (
    <div
      className={cn(
        "row-span-1 relative border-white-200 overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 4 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        {id === 4 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-black font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col gap-2 px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans w-full font-extralight md:max-w-50 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10 text-white-200">
            {title}
          </div>

          {id === 3 && (
            <>
              <div className="items-center justify-center flex">
                <h1 className="text-center font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white-200">
                  Build an Affordable Website
                </h1>
              </div>

              <div className="flex justify-center items-center gap-1 w-full h-50 p-5 flex-col">
                <p className="text-white-100 text-center">
                  Get access to customized web page designs and useful tools
                  to build your website and grow your ideal business. Easily
                  build a free website to help you get discovered and grow your
                  customer base in style. Start today with our powerful free
                  website builder.
                </p>
              </div>
            </>
          )}

          {id === 4 && (
            <div className="flex justify-center items-center w-full p-5 flex-col">
              <p className="text-base font-bold">
                Let's start an exciting project together! Feel free to reach out
                to me via email. I'm eager to collaborate, share ideas, and
                create something amazing. Looking forward to hearing from you
                soon!
              </p>
            </div>
          )}

          {id === 2 && (
            <>
              <div className="items-center justify-center flex">
                <h1 className="text-center font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 text-white-200">
                  About Us
                </h1>
              </div>

              <div className="flex justify-center items-center gap-1 w-full h-50 p-5 flex-col">
                <p className="text-white-100 text-center">
                  Team Trio Devs is here to provide you with all that you wish
                  for. Our aim is to meet the needs, wants, and desires of
                  our customers. We're working hard and putting all our
                  technical knowledge together into a single unit to bring out a
                  flourishing success. We see customer satisfaction as our
                  <br />
                </p>
                <p className="text-yellow-500 text-center">
                  "SUCCESS IS IN YOUR HAND WHEN YOU'RE WITH TRIO DEVS"
                </p>
              </div>
            </>
          )}

          {id === 1 && <GlobeDemo />}

          {id === 4 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {isClient && (
                  <Lottie
                    options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                  />
                )}
              </div>

              <MagicButton
                title={copied ? 'Email copied' : 'Copy my Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
