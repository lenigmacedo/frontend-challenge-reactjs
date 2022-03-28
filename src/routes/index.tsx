import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FilmsPage } from '../pages/Films';
import { Home } from '../pages/Home';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<FilmsPage />} />
    </Routes>
  );
};

export default Router;
