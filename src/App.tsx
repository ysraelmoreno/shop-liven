import React, { useEffect } from "react";
import { ToastProvider } from "./hooks/useToast";
import Home from "./pages/Home";
import Product from "./pages/Product";
import globalStyles from "./styles/Liven.global";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./hooks/useCart";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
