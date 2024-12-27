import { useState } from "react";

const BuyNFTPopup = ({ onClose, buyPrice }) => {
  const [tokenType, setTokenType] = useState("ETH");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 w-[500px] shadow-lg">
        {/* Popup Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">BUY NFT</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            ✖
          </button>
        </div>

        {/* Popup Content */}
        <div className="mt-6">
          {/* Token Type Dropdown */}
          <div className="mb-4">
            <label
              htmlFor="tokenType"
              className="block text-sm font-medium text-gray-700"
            >
              Token Type
            </label>
            <div className="relative">
              <select
                id="tokenType"
                value={tokenType}
                onChange={(e) => setTokenType(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm appearance-none"
                style={{
                  backgroundImage:
                    "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjU2IDUuNzQyTDEyIDUuMjU3TDUuNDUgMTEuNzVMNC44NiAxMkw0LjM4IDExLjUyTDExLjk1IDUuMDM1TDEyLjU2IDUuNzQyWiIgZmlsbD0iI0MzQzNDMyIvPgo8L3N2Zz4=')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1rem",
                }}
              >
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>

          {/* Wallet Balance */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Wallet Balance
            </label>
            <div className="mt-1 bg-gray-100 p-2 rounded-md text-gray-600">
              {tokenType}
            </div>
          </div>

          {/* Buy Price */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Buy Price
            </label>
            <div className="mt-1 bg-gray-100 p-2 rounded-md text-gray-600">
              {buyPrice} {tokenType}
            </div>
          </div>

          {/* Buy Now Button */}
          <div className="flex justify-center">
            <button
              onClick={() => alert("Purchase Confirmed!")}
              className="bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNFTPopup;
