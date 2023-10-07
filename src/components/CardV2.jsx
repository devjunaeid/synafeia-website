import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardV2 = ({ title, desc, url, img}) => {
  return (
        <div className="flex flex-col h-full md:h-[650px] w-full py-10 md:py-20 md:flex-row">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full rounded-2xl rounded-b-none md:rounded-2xl md:rounded-r-none bg-black/50 backdrop-blur-sm overflow-hidden"></div>
            <Image
              src={img}
              alt="Synafeia Logo"
              className="w-full h-[250px] md:h-full object-fill rounded-2xl rounded-b-none md:rounded-2xl md:rounded-r-none"
            />
            <h1 className="absolute inset-0 flex_col_mid text-3xl text-center text-white lg:text-5xl">
              {title}
            </h1>
          </div>
          <div className="flex_col_mid w-full min-h-full bg-black p-6 rounded-2xl rounded-t-none md:rounded-2xl md:rounded-l-none">
            <p className="pl-0 pb-4 md:pb-8 text-white lg:text-2xl">{desc}</p>
            <Link href={url} className="activeNav items-start">
              Learn More
            </Link>
          </div>
        </div>
  );
};

export default CardV2;
