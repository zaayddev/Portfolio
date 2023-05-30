import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import description from "./HomeData";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Data
            title={description.title}
            subtitle={description.subtitle}
            description={description.dsc}
          />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
