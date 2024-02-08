import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import Campaign from './components/pages/Campaign.jsx'
import CreateCampaign from './components/pages/CreateCampaign.jsx'
import Profile from './components/pages/Profile.jsx'
import Signup from './components/pages/Signup.jsx'
import Login from './components/pages/Login.jsx'
import Header from './components/UI/Header.jsx'
import Footer from './components/UI/Footer.jsx'
import CharCreate from './components/pages/Create.jsx'
// import Campaign from './components/pages/Campaign.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/createcampaign" element={<CreateCampaign />} />
        <Route path="/create" element={<CharCreate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)