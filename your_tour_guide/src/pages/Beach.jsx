import React from "react";
import places from "../api/places";

const Beach = () => {
  const data = places.filter(p => p.category === "beach");

  return (
    <div className="home-container">
      {data.map(item => (
        <div className="place-card" key={item.id}>
          
          <div className="card-badges">
            <span className="rating">⭐ {item.rating}</span>
            <span className="location">📍 {item.city}</span>
          </div>

          <img src={item.image} alt={item.name} />

          <h3>{item.name}</h3>
          <p>{item.description}</p>

        </div>
      ))}
    </div>
  );
};

export default Beach;
