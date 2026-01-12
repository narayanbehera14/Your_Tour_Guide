import React from "react";
import places from "../api/places";

const Stadium = () => {
  const data = places.filter(p => p.category === "stadium");

  return (
    <div className="home-container">
      {data.map(item => (
        <div className="place-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Stadium;
