import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import AboutUs from "./component/About_us";
import Footer from "./component/Footer";
import places from "./api/places";
import "./index.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = places.filter(place =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header onSearch={setSearchQuery} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="home-container">
              {filteredPlaces.map(place => (
                <div className="place-card" key={place.id}>

                  <div className="card-badges">
                    <span className="rating">⭐ {place.rating}</span>
                    <span className="location">📍 {place.city}</span>
                  </div>

                  <img src={place.image} alt={place.name} />

                  <h3>{place.name}</h3>
                  <p>{place.category} • {place.city}</p>

                </div>
              ))}
            </div>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<h1>Sign In</h1>} />
      </Routes>

      <Footer />
    </>
  );
}
