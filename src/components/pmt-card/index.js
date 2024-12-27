import React, { useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const Card = ({ name, edition, value, total, slug, imgSrc, onBuyClick }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`relative bg-gray-900 text-white rounded-2xl border-gray-400  transition-transform transform overflow-hidden h-[30rem]`}
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
        {hover && (
          <p
            className={`text-xs font-normal text-gray-400 mb-4 transition-all duration-500 ease-in-out`}
          >
            {edition}
          </p>
        )}
        <div className="flex flex-row">
          <p
            className={`text-xl font-bold transition-colors duration-500 ease-in-out ${
              hover ? "text-white" : "text-yellowbuy"
            }`}
          >
            {value}
          </p>
          <p
            className={`text-sm ml-2 pt-1 transition-all duration-500 ease-in-out text-[#FFE5019C] ${
              hover ? "opacity-0" : "opacity-100 text-yellowbuy"
            }`}
          >
            {total}
          </p>
        </div>
        {hover && (
          <button
            onClick={() => onBuyClick({ name, edition, value, total })}
            className="absolute bottom-2 w-20 left-1/2 bg-yellow-400 text-black font-semibold mx-2 rounded-lg bg-yellowbuy transition-opacity"
          >
            Buy
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
