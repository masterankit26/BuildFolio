
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import HireMe from './pages/HireMe';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        

        <Route
          path="/"
          element={
            <>
              <Page1 />
              <Page2 />
              <Page3 />
            </>
          }
        />
         <Route path="/hire-me" element={<HireMe />} />
        
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
