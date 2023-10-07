import React from "react";
import Image from "next/image";
import Link from "next/link";

{
  /*
    list prop is a list of object.
    Structure:
        list = [
            {
                name: String //name of the component.
                img: img Objrct //imported image objecet.
                url: String //the url to redirect.
            }
        ]
*/
}

const BrandBoard = ({ title, list }) => {
  const li = list;
  return (
    <div className="bg-black p-7 py-10 mt-10 md:py-20 rounded-lg">
      <h1 className="text-2xl text-white text-center font-bold pb-10 md:text-3xl">
        {title}
      </h1>
      <div className="flex justify-around flex-wrap gap-5">
        {li.map((items) => (
          <Link key={null} href={items.url} rel="noopener noreferrer" target="_blank" className="hover:scale-110">
            <div
              className="flex_col_mid min-w-[150px] max-w-[150px] min-h-[170px] bg-gray-400/10 rounded-md p-5 md:max-w-[250px] md:max-h-[280px]"
            >
              <Image
                src={items.img}
                className="w-12 h-12 md:w-24 md:h-24"
                alt={items.name}
              />
              <p className="border-b-2 border-white text-white text-lg py-1  md:text-xl">
                {items.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandBoard;
