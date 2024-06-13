import React, { useState } from "react";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import FootballLayout from "../../components/layout/FootballLayout";
import BettingMarket from "../../test/FootballLayout test";

import "../../index.css";

function Main({}) {
  return (
    <div className="">
      <Header />
      <BettingMarket />
      <Footer />
    </div>
  );
}

export default Main;