import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHome, FaInfoCircle, FaConciergeBell, FaUtensils } from 'react-icons/fa';
import { MdNewspaper } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold text-[#9e2a2b] mb-3 flex items-center gap-2">
              <FaMapMarkerAlt /> YourTourGuide
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your ultimate travel companion for exploring Mumbai with confidence and ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#9e2a2b] mb-5 flex items-center gap-2">
              <FaHome size={20} /> Quick Links
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaHome size={16} /> Home</a></li>
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaInfoCircle size={16} /> About Us</a></li>
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaConciergeBell size={16} /> Hotels</a></li>
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaUtensils size={16} /> Restaurants</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold text-[#9e2a2b] mb-5 flex items-center gap-2">
              <FaMapMarkerAlt size={20} /> Explore
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaMapMarkerAlt size={16} /> Beaches</a></li>
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaMapMarkerAlt size={16} /> Museums</a></li>
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaMapMarkerAlt size={16} /> Stadiums</a></li>
              <li><a href="#" className="hover:text-[#9e2a2b] transition-colors flex items-center gap-2"><FaMapMarkerAlt size={16} /> Resorts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-[#9e2a2b] mb-5 flex items-center gap-2">
              <FaPhone size={20} /> Contact
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#9e2a2b]" />
                <a href="mailto:info@yourguide.com" className="hover:text-[#9e2a2b] transition-colors">
                  info@yourguide.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-[#9e2a2b]" />
                <a href="tel:+919876543210" className="hover:text-[#9e2a2b] transition-colors">
                  +91 9876 543 210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#9e2a2b]" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Section - Social Media */}
        <div className="border-t border-gray-700 py-8">
          <h4 className="text-lg font-bold text-[#9e2a2b] mb-5 text-center flex items-center justify-center gap-2">
            <MdNewspaper /> Follow Us
          </h4>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="w-12 h-12 bg-[#9e2a2b] hover:bg-[#7a1f21] rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110" title="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#9e2a2b] hover:bg-[#7a1f21] rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110" title="Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#9e2a2b] hover:bg-[#7a1f21] rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110" title="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#9e2a2b] hover:bg-[#7a1f21] rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110" title="YouTube">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-[#9e2a2b] hover:bg-[#7a1f21] rounded-full flex items-center justify-center text-xl transition-all transform hover:scale-110" title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="max-w-md mx-auto">
            <h4 className="text-lg font-bold text-[#9e2a2b] mb-4 text-center flex items-center justify-center gap-2">
              <MdNewspaper /> Subscribe to Our Newsletter
            </h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:border-[#9e2a2b] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[#9e2a2b] hover:bg-[#7a1f21] px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FaEnvelope /> Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Privacy Policy • Terms & Conditions
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Made with <span className="text-[#9e2a2b]">❤️</span> by Narayan Behera
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                Available 24/7
              </p>
            </div>
          </div>

          <div className="text-center border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-xs">
              © 2024 YourTourGuide. All Rights Reserved. | Your trusted travel companion for Mumbai exploration
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer