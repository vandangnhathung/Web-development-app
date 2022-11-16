import React from "react";
import Footer from "./components/lab4.exercise2/Footer/Footer";
import Header from "./components/lab4.exercise2/Header/Header";
import TinderCard from "./components/lab4.exercise2/TinderCard/TinderCard";

const AppEx2 = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col items-center">
      <Header></Header>
      <TinderCard></TinderCard>

      <Footer></Footer>
    </div>
  );
};

export default AppEx2;
