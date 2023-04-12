import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { Header, Footer } from "./components/index";
import {
  ChoosingBroker,
  HowToTradeForex,
  TradingStatagies,
  Forex,
} from "./pages/Blogs/index";
import Nopage from "./pages/Nopage";

function App() {
  return (
    <div className="font-sans App">
      <BrowserRouter className="flex flex-row justify-between">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="blogs/TradingStatagies" element={<TradingStatagies />} />
          <Route path="blogs/ChoosingBroker" element={<ChoosingBroker />} />
          <Route path="blogs/HowToTradeForex" element={<HowToTradeForex />} />
          <Route path="blogs/Forex" element={<Forex />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
