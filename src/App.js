import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Products from "./pages/Products";
import PrivateRoutes from "./pages/Protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login path="/" />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard path="/dashboard" />} />
          <Route path="/products" element={<Products path="/products" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
