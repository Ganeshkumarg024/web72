import React from "react";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ClientList from "../components/ClientList";
import Facts from "../components/Facts";
import ServiceList from "../components/InvestmentServices";
import Revenue from "../components/Revenue";
import Investment from "../components/FinancialGoals";

const Home = () => {
  return (
    <>
      <InnerHeader />
      <Carousel />
      <main id="main">
        <Investment/>
        <ServiceList/>
        <ClientList/>
        <Facts/>
        <Revenue/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
