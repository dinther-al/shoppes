import React from 'react';
import { Route, Routes } from "react-router-dom";
import Homepage from './main';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rent" element={<Rent />} />
      </Routes>
    </div>
  )
}
function Rent() {
  return <p>Rent</p>;
}
