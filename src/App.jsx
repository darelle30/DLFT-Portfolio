import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Project';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for does not exist.</p>
    </div>  
  );
};

const App = () => {
  return (

      
    <BrowserRouter>
      <Navbar /> {/* Moved Navbar here to keep it consistent across all routes */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
