import { Route, Routes, useLocation } from "react-router-dom";
// import Footer from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70hv]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
