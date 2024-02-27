import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Exchanges from "./pages/Exchanges";
import Community from "./pages/Community";
import Trades from "./pages/Trades";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App></App>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/community" element={<Community />} />
      <Route path="/trades" element={<Trades />} />
    </Routes>
  </BrowserRouter>
);
