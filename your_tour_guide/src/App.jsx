import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}