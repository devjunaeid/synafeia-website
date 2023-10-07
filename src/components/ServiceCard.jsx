import React from "react";
import Image from "next/image";

const ServiceCard = ({ list }) => {
  return (
    <div className="grid grid-cols-1 gap-5 px-8 bg-gray-900 py-10 rounded-md my-6 md:my-10 md:grid-cols-2">
      {list.map((item) => (
        <div key={null} className="relative">
          <Image src={item.img} className="w-12 h-12 absolute left-[50%] -translate-x-[50%] p-1 rounded-xl bg-white/30 md:w-16 md:h-16" />
          <div className="flex_col_mid mt-6 py-6 px-2 bg-black/40 rounded-md md:mt-8">
            <h3 className="text-xl font-bold text-white text-center pt-2 md:pt-4 md:text-2xl">{item.name}</h3>
            <p className="text-white text-base text-justify md:text-xl">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
