import React, { useState, useEffect } from "react";

import { BiFilterAlt } from "react-icons/bi";

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
import sliders from "../../images/Sliders.png";
import Modal from "../../components/model-popup";
import BuyNFTPopup from "../buy-nft";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/urlSearchParams";

const PaginatedCards = () => {
  const location = useLocation();
  const query = useQuery(location.search);
  const type = query.get("type");
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 24;

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
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: grl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: rock,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: shoe,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: warrior,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: cycling,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: girl2,
    },
    {
      name: "Rocketbyz x PMT",
      type: "Loyalty NFTs",
      edition: "Edition 92 of 1001",
      value: "3885 PMT",
      total: "~$231.17",
      imgSrc: hands,
    },
  ];

  useEffect(() => {
    setCards(cardInfo);
    // fetch("https://api.example.com/cards")
    //   .then((response) => response.json())
    //   .then((data) => setCards(data))
    //   .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  console.log("cards length", cardInfo.length);

  // Get current page cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardInfo.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-row justify-between">
        <div className="flex justify-center items-center gap-3 px-4 cursor-pointer  flex-row bg-black w-fit text-white text-sm rounded-2xl w-25 p-1 mb-2">
          <BiFilterAlt />
          <span>Filter</span>
        </div>
        <div className="flex justify-center items-center gap-3 px-4 cursor-pointer  flex-row bg-black w-fit text-white text-sm rounded-2xl w-25 p-1 mb-2">
          {/* <BiFilterAlt /> */}
          <img src={sliders} className="w-5 h-5" alt="Slider" />
          <span>Sort</span>
        </div>
      </div>

      <div className="basis-1/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentCards.map((collection, index) => (
          <Card key={index} {...collection} onBuyClick={handleBuyClick} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <nav className="inline-flex">
          <button
            onClick={handlePrevious}
            className={`px-4 py-2 rounded border border-grey-800 ${
              currentPage === 1
                ? "bg-white cursor-not-allowed"
                : "bg-white hover:bg-gray-400"
            }`}
            disabled={currentPage === 1}
          >
            &larr;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded border  border-grey-800 ${
                currentPage === index + 1
                  ? "bg-yellowbuy text-grey-700"
                  : "bg-white text-gray-500"
              } hover:bg-grey-900`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className={`px-4 py-2 rounded border border-grey-800 ${
              currentPage === totalPages
                ? "bg-grey-300 cursor-not-allowed"
                : "bg-white hover:bg-gray-400"
            }`}
            disabled={currentPage === totalPages}
          >
            &rarr;
          </button>
        </nav>
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

export default PaginatedCards;
