"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrowR from "@/public/icons/arrowR.svg";
import arrowL from "@/public/icons/arrowL.svg";
import frontend from "@/public/service/icons/frontend.svg";
import fullstack from "@/public/service/icons/fullstack.svg";
import wordpress from "@/public/service/icons/wordpress.svg";
import digitalMarketing from "@/public/service/icons/digitalmarketing.svg";
import uiux from "@/public/service/icons/uiux.svg";

const serviceName = [
  {
    id: 1,
    name: "Frontend Development",
    img: frontend,
  },
  {
    id: 2,
    name: "FullStack Development",
    img: fullstack,
  },
  {
    id: 3,
    name: "UI and UX Design",
    img: uiux,
  },
  {
    id: 4,
    name: "Wordpress Development",
    img: wordpress,
  },
  {
    id: 5,
    name: "SEO and Digital Marketing",
    img: digitalMarketing,
  },
];

const SlideShow = () => {
  const autoSlide = true;
  const [current, setcurrent] = useState(0);
  const slideInterval = 3000;

  const preSlide = () => {
    setcurrent((current === 0) ? serviceName.length - 1 : current - 1)
  }

  const nextSlide = () => {
    setcurrent((current === serviceName.length-1) ? 0 : current + 1)
  }

  useEffect(() => {
    if(!autoSlide) return;
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, [current])
  

  return (
    <div className="overflow-hidden relative w-[350px] md:w-full mb-20 mx-10">
      <div className={`flex transition-transform ease-out duration-700 delay-100"}`}style={{transform: `translateX(-${current * 100}%)`}}>
        {serviceName.map((service) => (
          <div className="flex_col_mid gap-5 min-h-[400px] md:min-h-[600px] min-w-full bg-black" key={service.id}>
            <Image src={service.img} alt={service.name} className="h-16 w-16 md:w-24 md:h-24" />
            <h1 className="text-2xl md:text-4xl">{service.name}</h1>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-3 md:px-16">
        <Image
          src={arrowL}
          alt=" "
          className="w-8 h-8 md:w-16 md:h-16 p-2 md:p-5 bg-gray-100/10 rounded-md cursor-pointer hover:scale-125"
          onClick={preSlide}
        />
        <Image
          src={arrowR}
          alt=" "
          className="w-8 h-8 md:w-16 md:h-16 p-2 md:p-5 bg-gray-100/10 rounded-md cursor-pointer hover:scale-125"
          onClick={nextSlide}
        />
      </div>
      <div className="absolute bottom-5 left-0 right-0 mx-auto">
            <div className="flex_row_mid gap-3">
                {serviceName.map((_, i) => (
                    <div key={null} className={`w-2 h-2 md:w-3 md:h-3 rounded-full bg-white ${(current === i) ? "w-3 h-3 md:w-4 md:h-4" : "opacity-30"}`}></div>
                ))}
            </div>
      </div>
    </div>
  );
};

export default SlideShow;
