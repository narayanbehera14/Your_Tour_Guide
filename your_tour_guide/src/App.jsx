import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import AboutUs from "./component/About_us";
import Footer from './component/Footer';
import "./index.css"

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<h1>Sign In</h1>} />
      </Routes>
      <Footer/>
    </>
  );
}
