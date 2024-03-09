import React from "react";

import Card from "./Card";
import Navbar from "./Navbar";
import Hero from "./Hero";
import data from "./data";
import "./App.css";


function App() {
  const dataImg = data.map(item => {
    return (
    <Card 
    key={item.id}
    img={item.coverImg}
    rating={item.stats.rating} 
    reviewCount={item.stats.reviewCount}
    location={item.location} 
    title={item.title} 
    price={item.price}
    openSpots={item.openSpots}  />)
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
      {dataImg}
      </section>
      
    </div>
  );
}

export default App;
