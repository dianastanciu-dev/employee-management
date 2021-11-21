import React from "react";
import Header from "./components/Header"
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


{/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
   <p>App Content</p>

      </header>
    </div>
  );
}

export default App;

*/}

export default function App() {
  return (
    <Router>
      <div>
       <Header />
            

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/solutions" component={<Solutions />} />
          <Route path="/pricing" component={<Pricing />} />
          <Route path="/contact" component={<Contact />} />
     
        </Routes>
     
        <Footer />  
      </div>
    </Router>
  
  );
}




