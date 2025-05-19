import React from "react";
import Title from "./Title.jsx";
import { assets, roomsDummyData } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating.jsx";

const AllRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/*Left-Side*/}
      <div>
        <Title
          align="left"
          title="Hotel Rooms"
          subtitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        {roomsDummyData.map((room) => (
          <div>
            <img
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              onClick={() => {
                navigate(`/rooms/${room._id}`), scrollTo(0, 0);
              }}
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`), scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer">
                {room.hotel.name}
              </p>
            </div>
            <div className="flex items-center">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
              <img src={assets.locationIcon} alt="" />
              <span>{room.hotel.address}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Filters */}
      <div></div>
    </div>
  );
};

export default AllRooms;
