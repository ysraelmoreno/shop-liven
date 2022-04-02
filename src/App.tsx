import React, { useEffect } from "react";
import { ToastProvider } from "./hooks/useToast";
import Home from "./pages/Home";
import Product from "./pages/Product";
import globalStyles from "./styles/Liven.global";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    globalStyles();
  }, []);

  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
