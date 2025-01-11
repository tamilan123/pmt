import React, { useEffect, useState } from "react";
import warrior from "../../images/warrior.png";
import Card from "../../components/pmt-card";

import girl from "../../images/girlimg.png";
import girl2 from "../../images/girl2.png";
import hands from "../../images/hands.png";
import cycling from "../../images/cycling.png";
import shoe from "../../images/shoe.png";
import rock from "../../images/rock.png";
import grl from "../../images/card-image.png";
import BuyNFTPopup from "../buy-nft";

const RelatedProd = () => {
  const [cards, setCards] = useState([]);
  const cardInfo = [
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands
    }
  ];
  useEffect(() => {
    setCards(cardInfo);
    // fetch("https://api.example.com/cards")
    //   .then((response) => response.json())
    //   .then((data) => setCards(data))
    //   .catch((error) => console.error("Error fetching cards:", error));
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 24;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardInfo.slice(indexOfFirstCard, indexOfLastCard);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleBuyClick = (card) => {
    setSelectedCard(card);
    setIsPopupOpen(true);
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="relative flex flex-col">
        <div className="flex flex-row">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            ap-4 mt-4`}
          >
            {currentCards.map((collection, index) => (
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
    </div>
  );
};

export default RelatedProd;
