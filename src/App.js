import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import BusDetails from './components/BusDetails';
import Home from './components/Home';
import AllBuses from './components/AllBuses';
import SingleBus from './components/SingleBus';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busDetails/:busID" element={<SingleBus />} />
        <Route path="/allBuses" element={<AllBuses />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
