import React from 'react';
import Header from './components/header';  // Corrected the filename to match the actual filename
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';  // Corrected the component name to 
import Counsellor from './components/counceller';  // Corrected the filename to match the actual filename
import Signin from './components/signin.js';
import Signup from './components/signup.js';
import Visitor from './components/visitor.js';
import Appointment from './components/Appointment';
import StickyFooter from './components/Footer';
import Contact from './components/contact .js';

function App() {
  return (
    <React.Fragment>
      <Header>

      </Header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/counsellor" element={<Counsellor/>} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </React.Fragment>
  );
}

export default App;
