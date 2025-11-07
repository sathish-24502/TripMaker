import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/maincomponents/Home";
import LoginPage from "./maincomponents/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="LoginPage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
