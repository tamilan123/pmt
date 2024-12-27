import React from "react";
import ArtImage from "../../images/art.png";
import Helmet from "../../images/helmet.png";
import "./style.scss";

const DigitalTreasures = () => {
  return (
    <section className="digital-treasure-section">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] py-12 relative">
          <img
            alt="ArtImage"
            src={ArtImage}
            className="h-auto w-full max-w-md mx-auto block"
          />
          <div className="helmet-icon">
            <img
              alt="Helmet"
              src={Helmet}
              className="h-auto w-full max-w-md block"
            />
          </div>
        </div>
        <div className="lg:w-[50%] bg-black relative z-[1] overflow-hidden right-side-wrapper">
          <div className="text-stroke-bg">
            <h1 className="bg-text">Unique Digital</h1>
            <h1 className="bg-text">Unique Digital</h1>
          </div>
          <h4>
            Unique <br />
            Digital
            <br />
            <span>Treasures</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default DigitalTreasures;
