import React, { useRef } from "react";
import Header from "../../components/layout-component/header";
import HeroSection from "../../components/home/herosection";
import Card from "../../components/pmt-card";
import Collection from "../collection";
import CardCollection from "../../pages/card-collection";
import Footer from "../../components/layout-component/footer";
import DigitalTreasures from "../../components/digital-treasure";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/reducer/user_reducer";

const Home = () => {
  const user = useSelector(getUser);
  console.log("🚀 ~ Home ~ user:", user);
  const productRef = useRef(null);

  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header />
      <HeroSection scrollToProduct={scrollToProduct} />
      <DigitalTreasures />
      <Collection />
      <CardCollection productRef={productRef} />
      <Footer />
    </>
  );
};

export default Home;
