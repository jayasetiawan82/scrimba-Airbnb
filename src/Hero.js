import React from "react";
import heroImg from "./assets/hero.png"

export default function Hero() {
return (
    <div className="hero-heading">
        <img src={heroImg} alt="HeroImage" className="hero"/>
        <h1>Online Experience</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
)
}