import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Marketplace from "./pages/marketplace-sec";
import ItemDetails from "./pages/item-details";
import LoginComp from "./pages/login";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path={`/item-details/:slug`} element={<ItemDetails />} />
      <Route path="/login" element={<LoginComp />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
