import { useParams } from "react-router-dom";
import places from "../api/places";

export default function PlaceDetail() {
  const { id } = useParams();
  const place = places.find(p => p.id === Number(id));

  if (!place) return <h2>Place not found</h2>;

  const mapUrl = `https://www.google.com/maps?q=${place.name},${place.city}&output=embed`;

  return (
    <div className="detail-page">
      <img src={place.image} alt={place.name} />

      <h1>{place.name}</h1>
      <p>{place.category} • {place.city}</p>
      <p>⭐ {place.rating}</p>
      <p>{place.description}</p>

      <div className="map-container">
        <iframe
          src={mapUrl}
          loading="lazy"
          title="map"
        ></iframe>
      </div>
    </div>
  );
}