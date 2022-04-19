import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from '../components/layout/Layout';
import DrinkListScreen from '../pages/DrinkListScreen';
import DetailsDrinkScreen from '../pages/DetailsDrinkScreen';
import IngredientsScreen from '../pages/IngredientsScreen';

export default function RoutesNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route index element={<DrinkListScreen />} />
          <Route path="ingredients" element={<IngredientsScreen />} />
          <Route path="ingredients/:ingredient" element={<IngredientsScreen />} />
          <Route path="details/:id" element={<DetailsDrinkScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
