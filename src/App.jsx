import React from 'react';
import './App.css';
import Landing from './Pages/Landing';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Contact } from './Pages/Contact';
import About from './Pages/About';
import DigitalMarketing from './Pages/DigitalMarketing';
import WebDesigning from './Pages/WebDesigning';
import GraphicDesign from './Pages/GraphicDesign';
import SeoMarketing from './Pages/SeoMarketing';
import Portfolio from './Pages/Portfolio';
import Career from './Pages/Career';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>,
    },
    {
      path: "/About",
      element: <About/>,
    },
    {
      path: "/DigitalMarketing",
      element: <DigitalMarketing/>,
    },
    {
      path: "/WebDesigning",
      element: <WebDesigning/>,
    },
    {
      path: "/GraphicDesign",
      element: <GraphicDesign/>,
    },
    {
      path: "/SeoMarketing",
      element: <SeoMarketing/>,
    },
    {
      path: "/Career",
      element: <Career/>,
    },
    {
      path: "/Portfolio",
      element: <Portfolio/>,
    },
    {
      path: "/Contact",
      element: <Contact/>,
    }
  ]);
  return(
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App