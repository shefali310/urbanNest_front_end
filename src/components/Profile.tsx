import React from "react";
import { useQuery } from "react-query";
import { fetchUserProfile, UserProfileResponse } from "../api-client";

const Profile: React.FC<{ userId: string }> = ({ userId }) => {
  const { data, isLoading, isError } = useQuery(["profile", userId], () =>
    fetchUserProfile(userId.userId)
  );

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (isError) return <div className="text-center mt-4">Error fetching data</div>;

  const { user } = data as UserProfileResponse;

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 max-w-md mx-auto">
      <h2 className="text-lg font-semibold mb-2">User Profile</h2>
      
      <p>Name: {user.firstName} {user.lastName}</p>

      <p >Email: {user.email}</p>
    </div>
  );
};

export default Profile;
