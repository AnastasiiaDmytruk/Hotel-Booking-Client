import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import AllRooms from "./components/AllRooms.jsx";
import RoomDetails from "./pages/RoomDetail.jsx";
import MyBookings from "./pages/MyBookings.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
