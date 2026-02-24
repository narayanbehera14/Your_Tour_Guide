import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar, FaClock, FaHeart, FaCompass } from 'react-icons/fa';
import hero from "../assets/240_F_320061630_qTwTYsIEPJO62ubp5bzF41Pob4oJug5b.jpg";
import marineDrive from "../assets/marine_drive.jpg";
import juhu from "../assets/juhu.jpg";
import taj from "../assets/Taj hotel.jpg";
import trident from "../assets/trident.jpg";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const appear = mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <>
      <div
        className="w-full h-[80vh] sm:h-[80vh] md:h-[80vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${hero})`, backgroundRepeat: 'no-repeat' }}
      >
      <div className="absolute inset-0 bg-black/40" />

      <div className={`relative z-10 text-center px-6 max-w-4xl transition-all duration-700 ${appear}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Explore Mumbai With Confidence
        </h1>

        <p className="text-md sm:text-lg text-gray-100 max-w-2xl mx-auto mb-6 leading-relaxed">
          Find hand-picked hotels, local eateries, iconic beaches and museums — all
          with insider tips, ratings and easy directions. Plan faster with curated
          lists, save favorites and discover hidden gems from local guides.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link to="/home">
            <button className="bg-[#9e2a2b] hover:bg-[#7a1f21] px-6 py-3 rounded-lg text-white text-lg font-semibold shadow-lg transition-transform transform hover:-translate-y-0.5">
              Explore Now
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-white/90 hover:bg-white px-6 py-3 rounded-lg text-[#9e2a2b] text-lg font-semibold shadow transition-transform transform hover:-translate-y-0.5">
              Create Account
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 text-left">
            <div className="p-3 bg-white/10 rounded-lg text-white">
              <FaMapMarkerAlt />
            </div>
            <div>
              <div className="font-semibold text-white">Curated Places</div>
              <div className="text-sm text-gray-200">Expert-curated lists for every mood.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 text-left">
            <div className="p-3 bg-white/10 rounded-lg text-white">
              <FaStar />
            </div>
            <div>
              <div className="font-semibold text-white">Trusted Reviews</div>
              <div className="text-sm text-gray-200">Real traveler ratings and tips.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 text-left">
            <div className="p-3 bg-white/10 rounded-lg text-white">
              <FaClock />
            </div>
            <div>
              <div className="font-semibold text-white">Quick Planning</div>
              <div className="text-sm text-gray-200">Save time with ready-made itineraries.</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-200 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <FaHeart className="text-[#ff7b7b]" /> <span>Save favorites</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCompass className="text-[#ffd27f]" /> <span>Offline maps soon</span>
          </div>
        </div>
      </div>

      </div>

      {/* --- Content Sections --- */}
      <main className="-mt-12 relative z-20">
        <section className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-t-3xl shadow-lg">
          <div className={`max-w-4xl mx-auto text-center mb-8 transition-all duration-700 ${appear}`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Popular places to visit</h2>
            <p className="text-gray-600">Hand-picked highlights from our community and local experts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[{img:marineDrive,title:'Marine Drive'},{img:juhu,title:'Juhu Beach'},{img:taj,title:'Taj Mahal Palace'},{img:trident,title:'Trident Hotel'}].map((p,idx)=> (
              <Link to={`/place/${idx+1}`} key={p.title} className="group block rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
                <div className="h-44 bg-gray-100 bg-cover bg-center" style={{backgroundImage:`url(${p.img})`}} />
                <div className="p-4 bg-white">
                  <div className="font-semibold text-gray-900 group-hover:text-[#9e2a2b]">{p.title}</div>
                  <div className="text-sm text-gray-500 mt-1">Iconic spot with great views and local food nearby.</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#9e2a2b]/5 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#9e2a2b] text-white mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-semibold mb-2">Find Places</h3>
              <p className="text-sm text-gray-600">Search curated lists by category, area or rating.</p>
            </div>

            <div className="p-6 bg-[#9e2a2b]/5 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#9e2a2b] text-white mb-4">
                <FaStar />
              </div>
              <h3 className="font-semibold mb-2">Choose with confidence</h3>
              <p className="text-sm text-gray-600">See ratings, photos and reviews from real visitors.</p>
            </div>

            <div className="p-6 bg-[#9e2a2b]/5 rounded-xl text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-[#9e2a2b] text-white mb-4">
                <FaClock />
              </div>
              <h3 className="font-semibold mb-2">Plan fast</h3>
              <p className="text-sm text-gray-600">Build quick day plans and save favorites to your profile.</p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 rounded-xl my-6">
          <h3 className="text-2xl font-bold text-center mb-6">What people say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-gray-700 italic">"Saved me hours planning — the curated lists are gold."</div>
              <div className="mt-4 text-sm font-semibold">— Asha, Mumbai</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-gray-700 italic">"Great local tips and food recommendations — highly recommend."</div>
              <div className="mt-4 text-sm font-semibold">— Raj, Pune</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-gray-700 italic">"Easy to use and helped me find hidden gems off the beaten path."</div>
              <div className="mt-4 text-sm font-semibold">— Maria, Traveler</div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="rounded-xl bg-[#9e2a2b] text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-xl font-bold">Ready to explore?</h4>
              <p className="text-sm text-white/90">Create an account to save favorites and build itineraries.</p>
            </div>
            <div>
              <Link to="/signup">
                <button className="bg-white text-[#9e2a2b] px-6 py-3 rounded-lg font-semibold shadow">Create account — it's free</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
