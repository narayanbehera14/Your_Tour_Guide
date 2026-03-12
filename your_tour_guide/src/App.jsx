import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}