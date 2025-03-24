
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import EventItem from './components/EventItem';


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

export default App;
