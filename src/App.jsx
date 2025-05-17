import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70hv]">
        <Routes>
          <Route path="/" element={<Home />} />Í
        </Routes>
      </div>
    </div>
  );
};

export default App;
