import React from "react";
import GiftBox from "../../../images/gift-box.png";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ scrollToProduct }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/marketplace");
  };
  return (
    <section className="bg-black hero-section">
      <div className="pt-16">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[50%]">
            <div className="flex flex-col gap-6 lg:pl-16 lg:pr-[5rem]">
              <h1 className="m-0 text-6xl text-white font-bold leading-tight">
                Discover Digital <br />
                Arts and Collect <br />
                <span className="text-8xl text-[#FFE501]">NFTs</span>
              </h1>
              <p className="m-0 text-xl text-white font-sans max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Sit faucibus nunc
                aliquet purus id nibh. Ultrices varius quis sit volutpat ipsum.
              </p>
              <button
                type="button"
                onClick={scrollToProduct}
                className="flex w-fit justify-center items-center gap-1 rounded-lg bg-[#FFE501] border border-[#000000] px-3 py-1.5 text-base font-normal text-black"
              >
                Buy Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="lg:w-[50%] bg-[#FFE501] relative shape">
            <div className="relative left-[-4rem] top-[-3rem]">
              <img
                alt="Logo"
                src={GiftBox}
                className="h-auto w-full max-w-xl"
              />
            </div>
            <button
              type="button"
              onClick={() => handleNavigate()}
              className="flex mx-auto mb-8 w-fit justify-center items-center gap-1 rounded-lg bg-[#000000] border border-[#000000] px-3 py-1.5 text-base font-normal text-[#FFE501]"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
