import React from "react";
import Header from "../../components/layout-component/header";
import CardDetails from "../../components/card-details";
import Footer from "../../components/layout-component/footer";
import RelatedProd from "../../components/related-prod";

const ItemDetails = () => {
  return (
    <div>
      <Header />
      <CardDetails />
      {/* <RelatedProd /> */}
      <Footer />
    </div>
  );
};

export default ItemDetails;
