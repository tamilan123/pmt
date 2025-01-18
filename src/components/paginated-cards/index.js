import React, { useState, useEffect } from "react";

import { BiFilterAlt } from "react-icons/bi";

import Card from "../../components/pmt-card";
import AssetCard from "../../components/asset-card";
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
import banner from "../../images/Rectangle.png";
import Modal from "../../components/model-popup";
import BuyNFTPopup from "../buy-nft";
import { useLocation } from "react-router-dom";
import { useQuery } from "../../hooks/urlSearchParams";

const PaginatedCards = () => {
  const tabs = [
    { id: "collectible", label: "Collectible" },
    { id: "on-sale", label: "On Sale" },
    { id: "activity", label: "Activity" },
    { id: "physical-asset", label: "Physical Asset" },
    { id: "track-asset", label: "Track Asset" }
  ];
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

  // Calculate total pages
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  // Get current page cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardInfo.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    handlePageChange(currentPage - 1);
  };

  const handleNext = () => {
    handlePageChange(currentPage + 1);
  };

  const [activeTab, setActiveTab] = useState("collectible");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const orders = [
    {
      id: 1,
      image: girl, // Replace with actual image URL
      name: "Rocketxyz x PMT Loyalty NFTs",
      status: "Shipped", // Status can be "Order Confirmed", "Shipped", "Out for Delivery", "Delivered"
      dates: {
        "Order Confirmed": "Wed, 10th Jan",
        Shipped: "Wed, 11th Jan",
        "Out for Delivery": "Wed, 12th Jan",
        Delivered: "Wed, 13th Jan"
      }
    },
    {
      id: 1,
      image: girl2, // Replace with actual image URL
      name: "Rocketxyz x PMT Loyalty NFTs",
      status: "Out for Delivery", // Status can be "Order Confirmed", "Shipped", "Out for Delivery", "Delivered"
      dates: {
        "Order Confirmed": "Wed, 10th Jan",
        Shipped: "Wed, 11th Jan",
        "Out for Delivery": "Wed, 12th Jan",
        Delivered: "Wed, 13th Jan"
      }
    }
    // Add more orders here
  ];

  const statuses = [
    "Order Confirmed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
  ];

  const trackSection = () => {
    return (
      <div className="p-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-start p-4 mb-4 bg-white">
            <img
              src={order.image}
              alt={order.name}
              className="w-16 h-16 rounded-md object-cover"
            />
            <h4 className="text-sm pl-2 font-semibold justify-center">
              {order.name}
            </h4>
            <div className="ml-4 w-full">
              <div className="mt-4">
                <div className="flex justify-between text-sm font-medium">
                  {statuses.map((status) => (
                    <div key={status} className="text-center w-1/4">
                      <span>{status}</span>
                      {/* <br />
                      <span className="text-gray-500">
                        {order.dates[status]}
                      </span> */}
                    </div>
                  ))}
                </div>

                <div className="flex items-center mt-2 relative">
                  {/* Line */}
                  <div
                    className={`absolute top-1/2 left-0 ${
                      isFilterOpen ? "w-[90%]" : "w-[86%]"
                    } h-1 bg-gray-300`}
                  ></div>
                  {/* Yellow Markers */}

                  {statuses.map((status, index) => (
                    <div
                      key={status}
                      className={`relative z-10 w-4 h-4 rounded-full ${
                        statuses.indexOf(order.status) >= index
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                      }`}
                      style={{
                        left: `${(index / (statuses.length - 1)) * 80}%`
                      }}
                    ></div>
                  ))}
                </div>

                <div className="flex justify-between text-sm font-medium">
                  {statuses.map((status) => (
                    <div key={status} className="text-center w-1/4">
                      {/* <span>{status}</span> */}
                      {/* <br /> */}
                      <span className="text-gray-500">
                        {order.dates[status]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const paginationSec = () => (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex">
        <button
          onClick={handlePrevious}
          className={`px-4 py-2 rounded border ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
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
            className={`px-4 py-2 mx-1 rounded border ${
              currentPage === index + 1
                ? "bg-yellow-400 text-gray-800"
                : "bg-white text-gray-500 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          className={`px-4 py-2 rounded border ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-white hover:bg-gray-400"
          }`}
          disabled={currentPage === totalPages}
        >
          &rarr;
        </button>
      </nav>
    </div>
  );

  const filterSection = () => {
    return (
      <div className="flex flex-row justify-between">
        <div
          className="flex justify-center items-center gap-3 px-4 cursor-pointer flex-row bg-black text-white text-sm rounded-2xl w-fit p-1 mb-2"
          onClick={() => setIsFilterOpen((prev) => !prev)}
        >
          <BiFilterAlt />
          <span>Filter</span>
        </div>

        <div className="flex justify-center items-center gap-3 px-4 cursor-pointer flex-row bg-black text-white text-sm rounded-2xl w-fit p-1 mb-2">
          <img src={sliders} className="w-5 h-5" alt="Slider" />
          <span>Sort</span>
        </div>
      </div>
    );
  };

  const dropDownSec = () => {
    return (
      <div className="flex flex-col mr-4 mt-4">
        <div className="top-12 left-0 bg-[#E9E9E9] shadow-lg rounded-lg p-4 w-64 z-10">
          <div className="w-70 bg-[#E9E9E9] rounded-lg flex flex-col gap-4 mb-[10rem]">
            <div className="flex flex-col">
              <select
                id="status"
                className="p-2 border border-gray-300 rounded-lg text-[#6A6A6A] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Status</option>
                <option value="all">All</option>
                <option value="On auction">On auction</option>
                <option value="New">New</option>
                <option value="Has Offers">Has Offers</option>
              </select>
            </div>
            <div className="flex flex-col">
              <select
                id="price"
                className="p-2 border border-gray-300 rounded-lg text-[#6A6A6A] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Price</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="flex flex-col">
              <select
                id="currency"
                className="p-2 border border-gray-300 rounded-lg text-[#6A6A6A] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Currency</option>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "collectible":
        return (
          <div className="max-w-7xl mx-auto p-4">
            <div className="relative flex flex-col">
              {filterSection()}
              <div className="flex flex-row">
                {isFilterOpen && dropDownSec()}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:${
                    isFilterOpen ? "grid-cols-3" : "grid-cols-4"
                  } gap-4 mt-4`}
                >
                  {currentCards.map((collection, index) => (
                    <Card
                      key={index}
                      {...collection}
                      onBuyClick={handleBuyClick}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <nav className="inline-flex">
                <button
                  onClick={handlePrevious}
                  className={`px-4 py-2 rounded border ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
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
                    className={`px-4 py-2 mx-1 rounded border ${
                      currentPage === index + 1
                        ? "bg-yellow-400 text-gray-800"
                        : "bg-white text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNext}
                  className={`px-4 py-2 rounded border ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-white hover:bg-gray-400"
                  }`}
                  disabled={currentPage === totalPages}
                >
                  &rarr;
                </button>
              </nav>
            </div>

            {/* Buy NFT Popup */}
            {isPopupOpen && (
              <BuyNFTPopup
                onClose={() => setIsPopupOpen(false)}
                walletBalance={"234"}
                buyPrice={selectedCard.total}
              />
            )}
          </div>
        );
      case "on-sale":
        return <div>On Sale Content</div>;
      case "activity":
        return <div>Activity Logs</div>;
      case "physical-asset":
        return (
          <div>
            <div className="max-w-7xl mx-auto p-4">
              <div className="relative flex flex-col">
                {filterSection()}
                <div className="flex flex-row">
                  {isFilterOpen && dropDownSec()}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:${
                      isFilterOpen ? "grid-cols-3" : "grid-cols-4"
                    } gap-4 mt-4`}
                  >
                    {currentCards.map((collection, index) => (
                      <AssetCard
                        key={index}
                        {...collection}
                        onBuyClick={handleBuyClick}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {paginationSec()}

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
      case "track-asset":
        return (
          <div>
            <div className="max-w-7xl mx-auto p-4">
              <div className="relative flex flex-col">
                {filterSection()}
                <div className="flex flex-row">
                  {isFilterOpen && dropDownSec()}
                  <div className="w-full rounded-md shadow">
                    {trackSection()}
                  </div>
                </div>
              </div>

              {paginationSec()}

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
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Banner */}

      <img src={banner} className=" bottom-4 rounded-lg" />

      {/* Tabs */}
      <div className="flex space-x-6  my-4 font-bold text-black">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-1 text-lg ${
              activeTab === tab.id
                ? "border border-black rounded rounded-lg bg-yellowbuy"
                : ""
            }`}
            onClick={() => {
              // setIsFilterOpen((prev) => !prev);
              setActiveTab(tab.id);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default PaginatedCards;
