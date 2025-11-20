import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/maincomponents/Home";
import LoginPage from "./maincomponents/LoginPage";
import ProductsData from "./products/ProductsData";
import SignIn from "./maincomponents/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="SignPage" element={<SignIn />} />
          <Route path="PruductCard" element={<ProductsData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
