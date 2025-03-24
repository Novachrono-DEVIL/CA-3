
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventItem from './components/EventItem';
import { useState } from 'react';
import './App.css'

  





const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/register" element={<EventForm />} />
        <Route path="/Items" element={<EventItem/>} />
      </Routes>
    </Router>
  );
};

return (
  <>
  {
    data.map((item,ind)=>
      <EventForm key={ind} {...item}/>
    )
  }
  </>
)
export default App;
