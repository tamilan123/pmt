import React, { useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const Card = ({ name, edition, value, total, slug, imgSrc, onBuyClick }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`relative bg-gray-900 text-white rounded-2xl border-gray-400  transition-transform transform overflow-hidden h-[25rem]`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        onClick={() => navigate(`/item-details/${slug}`)}
        className={`relative transition-all duration-500 p-3 ${
          hover ? "h-2/3" : "h-full"
        } overflow-hidden`}
      >
        <img
          src={imgSrc}
          alt="NFT Art"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div
        className={`absolute bottom-6 left-6 right-6 rounded-xl p-2 bg-black bg-opacity-90 z-10`}
      >
        <p className="text-xl text-white font-normal font-sans transition-all duration-200000 ease-in-out">
          {name}
        </p>

        <div className="flex flex-row">
          <button
            className={`font-semibold w-full rounded-lg mt-2 bg-yellowbuy text-black px-2
            `}
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
