import { useState } from "react";

const BuyNFTPopup = ({ onClose, buyPrice }) => {
  const [tokenType, setTokenType] = useState("PMT");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 w-[500px] shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">BUY NFT</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            ✖
          </button>
        </div>
        <div className="mt-6">
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
              >
                <option value="PMT">PMT</option>
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="USDT">USDT</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Wallet Balance
            </label>
            <div className="mt-1 bg-gray-100 p-2 rounded-md text-gray-600">
              {tokenType}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              Buy Price
            </label>
            <div className="mt-1 bg-gray-100 p-2 rounded-md text-gray-600">
              {buyPrice}
            </div>
          </div>
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
