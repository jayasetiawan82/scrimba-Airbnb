import React from "react";
import star from "./assets/Star.png";

export default function Card(props) {
  console.log(props)
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img src={props.item.coverImg} alt="personImage" className="card-img" />
      <div className="card-stats">
        <img src={star} alt="star" />
        <span>{props.item.star}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>

      <h2 className="card-title">{props.item.title}</h2>
      <p>
        <span className="bold">from ${props.item.price}</span> / per week
      </p>
      
    </div>
  );
}
