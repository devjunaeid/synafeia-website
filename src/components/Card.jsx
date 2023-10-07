import React from "react";

const Card = ({ title, desc, img, width, height }) => {
  return (
    <div
      className="block max-w-[375px] rounded-lg bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url('${img.src}')` }}
    >
      <div className="w-full h-full bg-black/40 hover:bg-black/70 backdrop-blur-[2px] hover:backdrop-blur-[4px] rounded-lg p-6">
        <h5 class="mb-2 text-xl md:text-2xl font-medium leading-tight text-white">
          {title}
        </h5>
        <p class="mb-4 text-base md:text-xl text-white">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
