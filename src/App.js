import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Marketplace from "./pages/marketplace-sec";
import ItemDetails from "./pages/item-details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path={`/item-details/:slug`} element={<ItemDetails />} />
    </Routes>
  );
}

export default App;
