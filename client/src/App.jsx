import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
