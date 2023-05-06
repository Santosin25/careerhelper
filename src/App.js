import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Nopage, PrivacyPolicy, Contract, About } from "./pages/index";

import { Header, Footer } from "./components/index";
import {
  ChoosingBroker,
  HowToTradeForex,
  TradingStatagies,
  Forex,
  CareerEdutech,
  CareerWebDeveloper,
  ProfessionalCryptoTrader,
  SustainableIncome,
  EdutechPassiveIncome,
  WaysToMakeMoneyWebDeveloper,
} from "./pages/Blogs/index";

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
          <Route path="about" element={<About />} />
          <Route path="contract" element={<Contract />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />

          <Route path="blogs/careerEdutech" element={<CareerEdutech />} />
          <Route
            path="blogs/careerWebDeveloper"
            element={<CareerWebDeveloper />}
          />
          <Route
            path="blogs/professionalCryptoTrader"
            element={<ProfessionalCryptoTrader />}
          />
          <Route
            path="blogs/sustainableIncome"
            element={<SustainableIncome />}
          />
          <Route
            path="blogs/edutechPassiveIncome"
            element={<EdutechPassiveIncome />}
          />
          <Route
            path="blogs/waysToMakeMoneyWebDeveloper"
            element={<WaysToMakeMoneyWebDeveloper />}
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
