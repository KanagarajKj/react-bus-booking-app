import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HomeTwo from './components/HomeTwo';
import SingleBus from './components/SingleBus';
import Form from './components/form';
import SeatSelection from './components/SeatSelection/SeatSelection';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hometwo" element={<HomeTwo />} />
        <Route path="/singlebus/:busName" element={<SingleBus />} />
        <Route path='/form' element={<Form/>}/>
        <Route path ='/seatSelection' element={<SeatSelection/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
