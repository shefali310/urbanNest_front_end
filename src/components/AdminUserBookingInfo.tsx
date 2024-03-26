// AdminUserBookingInfo.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsersWithHotels } from "../api-client"; // Import fetchUsersWithHotels function
import {HotelType} from "../../../back-end/src/models/hotel";

const AdminUserBookingInfo: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [hotels, setHotels] = useState<HotelType[]>([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const hotelsData = await fetchUsersWithHotels(userId); 
                // Pass userId to fetch function

                setHotels(hotelsData);
            } catch (error) {
                console.error("Error fetching hotels:", error);
            }
        };

        fetchHotels();
    }, [userId]);

    return (
        <div>
            {/* <h1>User Booking Details</h1> */}
            {/* <ul>
                {hotels.map((hotel) => (
                    <li key={hotel._id}>
                        <h2>{hotel.name}</h2>
                        <p>{hotel.description}</p>
                    </li>
                ))}
            </ul> */}


<h1 className="text-3xl font-bold text-center mb-8">User Bookings Details</h1>
      <div className="  grid grid-cols-1 gap-5">
        {hotels.map((hotel) => (
          <div
            key={hotel._id}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="grid bg-gray-300 grid-cols-1 lg:grid-cols-[250px,1fr] gap-0 lg:gap-8">
              <div className="w-full h-[250px] relative">
                <img
                  src={hotel.imageUrls[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6 flex  flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{hotel.name}</h2>
                  <p className="text-sm text-gray-600 mt-2">
                    {hotel.city}, {hotel.country}
                  </p>
                  <ul className="mt-4">
                    {hotel.bookings.map((booking, index) => (
                      <li key={index} className="mb-2">
                        <span className="font-bold mr-2">Dates:</span>
                        <span>
                          {new Date(booking.checkIn).toDateString()} -{" "}
                          {new Date(booking.checkOut).toDateString()}
                        </span>
                        <br />
                        <span className="font-bold mr-2">Guests:</span>
                        <span>
                          {booking.adultCount} adults, {booking.childCount}{" "}
                          children
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="mt-4 text-right">
                  <button className="px-4 py-2 font-bold bg-orange text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 transition duration-300 ease-in-out">
                    Cancel Booking
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
};

export default AdminUserBookingInfo;
