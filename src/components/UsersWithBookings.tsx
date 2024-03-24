import React from 'react';
import { useQuery } from 'react-query';
import * as apiClient from '../api-client';
import { BiCalendarCheck } from 'react-icons/bi';

const UsersWithBookings: React.FC = () => {
  const { data: usersWithBookings, isLoading, isError } = useQuery(
    'fetchUsersWithBookings',
    apiClient.fetchUsersWithBookings,
    {
      onError: () => {},
    }
  );

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center mt-4">Error fetching data</div>;
  }

  if (!usersWithBookings || usersWithBookings.length === 0) {
    return <div className="text-center mt-4">No users with bookings found</div>;
  }

  return (
    <div className="space-y-5 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-3xl text-orange font-bold mb-3">Users with Bookings</h1>
      {usersWithBookings.map(user => (
        <div key={user._id} className="border border-slate-300 rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="border bg-gray-300 rounded-lg shadow-lg p-3">
              <BiCalendarCheck className="mr-2" />
              <span className="font-semibold">Bookings:</span>
              {user.bookings.length > 0 ? (
                <ul className="mt-2">
                  {user.bookings.map(booking => (
                    <li key={booking._id} className="mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{booking.firstName}, {booking.lastName}</h3>
                        
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <span>No bookings found</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersWithBookings;
