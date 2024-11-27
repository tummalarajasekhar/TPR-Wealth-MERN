import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import MutualFunds from './pages/MutualFunds';
import InvestmentCalculator from './pages/InvestmentCalculator';
import TrackInvestment from './pages/TrackInvestments.';
import LoginPage from './pages/LoginPage';
import ResetPassword from './pages/ResetPassword';
import ProfilePage from './pages/Profile';
import { useState } from 'react';



function App() {
  const [user,setUser]=useState("Guest")
  console.log(user)
  return (
    <Router>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen">
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment-calculator" element={<InvestmentCalculator/>} />
          <Route path="/track-investment" element={<TrackInvestment/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/reset-password/:token" element={<ResetPassword/>} />
          <Route path="/profile" element={<ProfilePage setUser={setUser} user={user}/>} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
