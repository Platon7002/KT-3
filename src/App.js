
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/KT-3">
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
