import AppRoutes from "./routes/AppRoutes";
import Header from "./component/Header";
import Footer from "./component/Footer";

import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}