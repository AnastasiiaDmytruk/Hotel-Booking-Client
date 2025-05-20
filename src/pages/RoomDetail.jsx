import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets.js";
import StarRating from "../components/StarRating.jsx";
import Title from "../components/Title.jsx";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);

  return (
    room && (
      <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Details */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <Title
            align="left"
            className="text-3xl md:text-4xl font-playfair"
            title={
              <>
                {room.hotel.name}{" "}
                <span className="font-inter text-sm">({room.roomType})</span>
              </>
            }
          />

          <p className="text-xs font-inter pu-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>

        {/* Room Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>

        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location" />
          <span>{room.hotel.address}</span>
        </div>
      </div>
    )
  );
};

export default RoomDetail;
