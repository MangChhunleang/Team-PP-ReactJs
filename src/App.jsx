import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import MainProduct from "./components/MainProduct";
import OnFooter from "./components/OnFooter";
import { Footer } from "./components/Footer";
import Register from "./components/Register";
import HeaderAfterLogin from "./components/HeaderAfterLogin";
import CheckCard from './components/CheckCard';
import OrderSummary from "./components/OrderSummary";
import OrderSummary2 from "./components/OrderSummary2";
import OrderSummary3 from "./components/OrderSummary3";
import OrderSummary4 from "./components/OrderSummary4";
import MainTents from "./components/MainTents";
import SecondTents from "./components/SecondTents";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const MainLayout = () => (
    <>
      {isLoggedIn ? <HeaderAfterLogin /> : <Header toggleModal={toggleModal} />}
      {!isLoggedIn && (
        <Register 
          isModalOpen={isModalOpen} 
          toggleModal={toggleModal} 
          onLogin={handleLogin} 
        />
      )}
      <Navbar />
      <HeroImage />
      <MainProduct />
      <OnFooter />
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/check-card" element={<CheckCard />} />
          <Route path="/order-summary1" element={<OrderSummary />} />
          <Route path="/order-summary2" element={<OrderSummary2 />} />
          <Route path="/order-summary3" element={<OrderSummary3 />} />
          <Route path="/order-summary4" element={<OrderSummary4 />} />
          <Route path="/maintents" element={<MainTents />} />
          <Route path="/men-tents1" element={<SecondTents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
