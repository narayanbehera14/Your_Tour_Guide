import { useParams } from "react-router-dom";
import places from "../api/places";

export default function PlaceDetail() {
  const { id } = useParams();
  const place = places.find(p => p.id === Number(id));

  if (!place) return <h2>Place not found</h2>;

  const mapUrl = `https://www.google.com/maps?q=${place.name},${place.city}&output=embed`;

  return (
    <div className="max-w-4xl mx-auto my-10 px-5">
      <img src={place.image} alt={place.name} className="w-full h-96 object-cover rounded-2xl mb-5" />

      <h1 className="text-5xl text-[#9e2a2b] mb-3 font-bold">{place.name}</h1>
      <p className="text-lg text-gray-600 mb-2">{place.category} • {place.city}</p>
      <p className="text-2xl mb-3">⭐ {place.rating}</p>
      <p className="text-lg text-gray-700 mb-6">{place.description}</p>

      <div className="mt-8 w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={mapUrl}
          loading="lazy"
          title="map"
          className="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
  );
}