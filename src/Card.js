import React from "react";
import star from "./assets/Star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.img} alt="personImage" className="card-img" />
      <div className="card-stats">
        <img src={star} alt="star" />
        <span>{props.star}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>

      <h2 className="card-title">{props.title}</h2>
      <p>
        <span className="bold">from ${props.price}</span> / per week
      </p>
    </div>
  );
}
