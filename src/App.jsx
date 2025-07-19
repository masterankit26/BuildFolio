/*import './App.css'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import React from 'react'
import Header from './components/Header'

function App() {
  

  return (
    <>
    <Header />
    <Page1 />
    <Page2 />
    <Page3 />
    </>
  )
}

export default App
*/
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import HireMe from './pages/HireMe';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
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
