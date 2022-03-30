import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FilmsPage } from '../pages/Films';
import { Home } from '../pages/Home';
import { PeoplePage } from '../pages/People';
import { SpeciesPage } from '../pages/Species';
import { StarshipsPage } from '../pages/Starships';
import { VehiclesPage } from '../pages/Vehicles';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<FilmsPage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/vehicles" element={<VehiclesPage />} />
      <Route path="/species" element={<SpeciesPage />} />
      <Route path="/starships" element={<StarshipsPage />} />
    </Routes>
  );
};

export default Router;
