import React, { useState } from "react";
import grl from "../../images/girlimg.png";
import heart from "../../images/Vector.png";
import binace from "../../images/binace.png";
import creator from "../../images/crtr.png";
import cart from "../../images/ShoppingCartSimple.png";
import { BsThreeDots } from "react-icons/bs";

const CardDetails = () => {
  const [favourite, setFavourite] = useState("");
  const creatorInfo = [
    { title: "creator", walletAddress: "0x76ff25cc...b11wa", srcImg: creator },
    { title: "creator", walletAddress: "NFT 1155", srcImg: creator },
    { title: "creator", walletAddress: "0x76ff25cc...b11wa", srcImg: creator },
    { title: "creator", walletAddress: "0x76ff25cc...b11wa", srcImg: creator },
    { title: "creator", walletAddress: "0x76ff25cc...b11wa", srcImg: creator }
  ];
  const handleFavourite = (fav) => {
    setFavourite(fav);
  };
  return (
    <div className="flex flex-row p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="flex-[0.4] flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 bg-yellow-400 rounded-lg overflow-hidden shadow-md border-t-4 border-black">
          <div className="flex flex-row justify-between z-10 top-0 left-0 w-full bg-[#FFE501] p-2 border-b border-black">
            <img src={binace} alt="Binance Icon" className="w-6 h-6" />

            <button
              onClick={() => handleFavourite("")}
              className="p-1 rounded-full shadow-md"
            >
              <img className="w-6 h-6" src={heart} />
            </button>
          </div>
          <img
            src={grl}
            alt="NFT"
            className="object-cover w-full h-full opacity-90"
          />
        </div>
      </div>
      <div className="flex-[0.4] mt-6 md:mt-0 md:ml-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Rocketbyz x PMT Loyalty NFTs
        </h1>
        <p className="text-gray-600 font-normal text-base mb-6 w-[23rem]">
          Lorem ipsum dolor sit amet consectetur. Donec leo pellentesque orci
          tempus nunc odio convallis. Sagittis facilisis ridiculus et arcu
          tellus.
        </p>

        <button className="bg-yellow-400 text-black text-sm border border-black px-16 py-3 rounded-lg hover:bg-yellow-500 bg-[#FFE501] transition mb-6 flex items-center">
          <span className="pr-6">Buy Now</span>
          <div className="w-px h-6 bg-black mx-2"></div>
          <img className="w-5 h-5 mx-4" src={cart} />
        </button>

        <div className="flex flex-wrap gap-4">
          {creatorInfo.map((collection, index) => (
            <CreatorBox key={index} {...collection} />
          ))}
        </div>
      </div>
      <div className="flex-[0.1] flex flex-col items-center justify-between ml-4">
        <div className="flex items-center justify-center w-full">
          <button className="p-2 rounded-full shadow-md hover:bg-gray-200 transition">
            <BsThreeDots />
          </button>
        </div>
        {/* <div className="flex-grow bg-gray-100 w-full"></div> */}
      </div>
    </div>
  );
};

const CreatorBox = ({ title, walletAddress, srcImg }) => {
  return (
    <div className="flex-1 min-w-[calc(50%-1rem)] md:min-w-[calc(33.333%-1rem)] border border-gray-300 rounded-2xl p-2">
      <h3 className="font-bold text-gray-700 mb-2">{title}</h3>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-300 rounded-full overflow-hidden">
          <img
            src={srcImg}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm font-normal text-gray-600">
          {walletAddress}
        </span>
      </div>
    </div>
  );
};

export default CardDetails;
