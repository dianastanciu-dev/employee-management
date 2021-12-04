import React from "react";
import Header from "components/Header"
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './components/Home.js'
import Pricing from './components/Pricing.js'
import Solutions from './components/Solutions.js'
import Contact from './components/Contact.js'



export default function App() {
  return (
    <Router>
      <div>
       <Header />
            

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
     
        </Routes>
     
        <Footer />  
      </div>
    </Router>
  
  );
}




