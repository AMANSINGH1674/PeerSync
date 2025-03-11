import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import AISecurityPage from './pages/AISecurityPage';
import BlockchainVerificationPage from './pages/BlockchainVerificationPage';
import DashboardPage from './pages/DashboardPage';
import ContactFAQPage from './pages/ContactFAQPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="ai-security" element={<AISecurityPage />} />
        <Route path="blockchain-verification" element={<BlockchainVerificationPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="contact" element={<ContactFAQPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;