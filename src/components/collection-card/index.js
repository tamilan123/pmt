import React from "react";
import dogimg from "../../images/astdog.png";
import rocks from "../../images/rockzz.png";
import { useNavigate } from "react-router-dom";

const CollectionCard = ({ title, type, description, nftCount, imgSrc }) => {
  const navigate = useNavigate();
  const handleNavigate = () => [navigate(`/marketplace?type=${type}`)];
  return (
    <div className="bg-black text-white rounded-2xl shadow-lg py-16 flex flex-col md:flex-row gap-6">
      {/* First Div - 25% */}
      <div className="flex flex-col md:justify-center md:items-center w-full md:w-23p">
        <div className="flex flex-row m-2">
          <div className="mb-8 w-20 h-20">
            <img
              src={dogimg}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="w-20 h-20">
            <img
              src={rocks}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <span className="text-yellowbuy text-xl font-bold flex flex-col mb-2">
          <h3 className="text-4xl">NFTs</h3>
          <h2 className="text-8xl">{nftCount}</h2>
        </span>
      </div>

      {/* Second Div - 35% */}
      <div className="flex flex-col w-full md:w-37p">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-gray-500 font-bold text-lg mt-1 mb-4">{type}</p>
        <p className="text-gray-400 text-base text-xl font-normal leading-relaxed">
          {description}
        </p>
        <button
          onClick={() => handleNavigate()}
          className="w-28 mt-4 text-lg self-start bg-yellowbuy text-black font-sm py-1 px-3 rounded-2xl hover:bg-yellow-300"
        >
          Explore
        </button>
      </div>

      {/* Third Div - 40% */}
      <div className="w-full md:w-40p mr-12 flex">
        <div className="relative w-full h-auto rounded-lg overflow-hidden border-2 border-yellow-400">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
