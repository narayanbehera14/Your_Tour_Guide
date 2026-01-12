import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import AboutUs from "./component/About_us";
import Footer from "./component/Footer";
import places from "./api/places";   // your frontend API data
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
          <h3>{place.name}</h3>
          <p>{place.category} • {place.city}</p>
          <img src={place.image} alt={place.name} />

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
