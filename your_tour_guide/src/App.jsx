import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./component/Header";
import AboutUs from "./component/About_us";
import Footer from "./component/Footer";
import places from "./api/places";
import PlaceDetail from "./component/PlaceDetail";
import "./index.css";
import SignIn from "./pages/SignIn";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const filteredPlaces = places.filter((place) => {
    const categoryMatch =
      activeCategory.toLowerCase() === "all" ||
      place.category.toLowerCase() === activeCategory.toLowerCase();

    const searchMatch =
      normalize(place.name).includes(normalize(searchQuery)) ||
      normalize(place.city).includes(normalize(searchQuery)) ||
      normalize(place.category).includes(normalize(searchQuery));

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <Header onSearch={setSearchQuery} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* CATEGORY BUTTONS */}
              <div className="category-bar">
                {["all", "Hotel", "Food", "Beach", "Museum"].map((cat) => (
                  <button
                    key={cat}
                    className={`category-btn ${
                      activeCategory.toLowerCase() === cat.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* PLACE CARDS */}
              <div className="home-container">
                {filteredPlaces.length > 0 ? (
                  filteredPlaces.map((place) => (
          <Link
  to={`/place/${place.id}`}
  key={place.id}
  className="card-link"
>
  <div className="place-card">
    <div className="card-badges">
      <span className="rating">⭐ {place.rating}</span>
    </div>

    <img src={place.image} alt={place.name} />

    <div className="card-info">
      <h3>{place.name}</h3>

      <button
        className="location-right"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          window.open(
            `https://www.google.com/maps/search/?api=1&query=${place.name} ${place.city}`,
            "_blank"
          );
        }}
      >
        📍 Location
      </button>
    </div>
  </div>
</Link>

                  ))
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "50px",
                      fontSize: "18px",
                      color: "#555",
                    }}
                  >
                    No places found
                  </p>
                )}
              </div>
            </>
          }
        />
        <Route path="/" element={<h1>Home</h1>} />


        <Route path="/about" element={<AboutUs />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <Footer />
    </>
  );
}