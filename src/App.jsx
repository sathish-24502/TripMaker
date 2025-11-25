import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home";
import LoginPage from "./pages/LoginPage";
// import ProductsData from "./products/ProductsData";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="SignPage" element={<SignIn />} />
          <Route path="Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
