import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaBars, FaTimes, FaSearch, FaHome, FaInfoCircle, FaSignInAlt } from 'react-icons/fa';

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch && onSearch(search);
    setSearch("");
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
      { name: "Sign In", path: "/signin", icon: <FaSignInAlt size={16} /> },
    { name: "Home", path: "/home", icon: <FaHome size={16} /> },
    { name: "About", path: "/about", icon: <FaInfoCircle size={16} /> },
  
  ];

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-[#5a1619] via-[#7a1f21] to-[#6b1c1e] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3 cursor-pointer">
            <FaMapMarkerAlt className="text-[#9e2a2b]" size={28} />
            <div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight">YourTourGuide</div>
              <div className="text-xs text-gray-200">Explore Mumbai with confidence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-[#9e2a2b] text-white shadow-lg"
                    : "text-white hover:bg-[#7a1f21] hover:shadow-md"
                }`}
              >
                <span className="opacity-90">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden sm:flex items-center bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="text"
              placeholder="Search places..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 text-gray-900 outline-none w-40 md:w-56 bg-transparent placeholder-gray-500"
            />
            <button type="submit" className="bg-[#9e2a2b] hover:bg-[#7a1f21] px-4 py-2 transition-colors text-white">
              <FaSearch />
            </button>
          </form>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 rounded-lg hover:bg-[#7a1f21] transition-colors">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? "bg-[#9e2a2b] text-white"
                    : "text-white hover:bg-[#7a1f21]"
                }`}
              >
                <span className="opacity-90">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Mobile Search */}
            <form onSubmit={(e) => { handleSearch(e); setMenuOpen(false); }} className="flex items-center bg-white rounded-lg overflow-hidden shadow-md mt-3">
              <input
                type="text"
                placeholder="Search places..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2.5 text-gray-900 outline-none flex-1 bg-transparent placeholder-gray-500"
              />
              <button type="submit" className="bg-[#9e2a2b] hover:bg-[#7a1f21] px-4 py-2.5 transition-colors text-white">
                <FaSearch />
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;