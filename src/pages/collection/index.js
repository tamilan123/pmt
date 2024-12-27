import React from "react";
import CollectionCard from "../../components/collection-card";
import Collection1 from "../../images/collection 1.png";
import Collection2 from "../../images/collection 2.png";
import PML from "../../images/PML_Logo.png";

const Collection = () => {
  const collections = [
    {
      title: "PMT Fractionated RWAs NFT Collection",
      type: "ERC-1155",
      description:
        "Exclusive collection featuring limited-edition RWAs in collaboration with Rocketbyz. Exclusive collection featuring limited-edition RWAs in collaboration with Rocketbyz.",
      nftCount: "20+",
      imgSrc: Collection1,
    },
    {
      title: "Rocketbyz x PMT Limited RWA Collection",
      type: "ERC-721",
      description:
        "Exclusive collection featuring limited-edition RWAs in collaboration with Rocketbyz. Exclusive collection featuring limited-edition RWAs in collaboration with Rocketbyz.",
      nftCount: "10+",
      imgSrc: Collection2,
    },
  ];

  return (
    <div className="bg-white-900 pt-12">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <img className="h-4 w-34" src={PML} alt="PML_logo" />
        <h1 className="text-4xl font-bold font-bruno  text-black">
          COLLECTIONS
        </h1>
        <div className="space-y-8">
          {collections.map((collection, index) => (
            <CollectionCard key={index} {...collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
