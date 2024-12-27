import React, { useState } from "react";
import Card from "../../components/pmt-card";
import warrior from "../../images/warrior.png";
import girl from "../../images/girlimg.png";
import girl2 from "../../images/girl2.png";
import helmet from "../../images/helmet.png";
import hands from "../../images/hands.png";
import cycling from "../../images/cycling.png";
import shoe from "../../images/shoe.png";
import rock from "../../images/rock.png";
import grl from "../../images/card-image.png";
import PML from "../../images/PML_Logo.png";
import Modal from "../../components/model-popup";
import BuyNFTPopup from "../../components/buy-nft";

const CardCollection = ({ productRef }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleBuyClick = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedCard(null);
  };

  const cardInfo = [
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp1BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$2311.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp2BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$2312.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp3BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp4BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp5BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp6BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp7BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp8BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp9BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp01BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp01BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp03BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp04BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp05BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp06BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT Loyalty NFTs",
      slug: "Sp07BKx6F1bXGml4G",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
  ];

  return (
    <div ref={productRef} className="bg-white-900 pt-4 mb-24">
      <div className="max-w-7xl mx-auto px-2 space-y-4">
        <img className="h-4 w-34" src={PML} alt="PML_logo" />
        <h1 className="text-4xl font-bold font-bruno  text-black">PRODUCTS</h1>
        <div className="basis-1/4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cardInfo.map((collection, index) => (
            <Card key={index} {...collection} onBuyClick={handleBuyClick} />
          ))}
        </div>
      </div>
      {isPopupOpen && (
        <BuyNFTPopup
          onClose={() => setIsPopupOpen(false)}
          walletBalance={"234"}
          buyPrice={selectedCard.total}
        />
      )}
    </div>
  );
};

export default CardCollection;
