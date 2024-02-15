import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css";


const SignOutButton = () => {

  // Access the showToast function from the AppContext
  const { showToast } = useAppContext();
  
  // Access the query client for managing queries in React Query
  const queryClient = useQueryClient();

  // Use mutation to handle the sign-out API call
  const mutation = useMutation(apiClient.signOut, {
    // On successful sign-out
    onSuccess: async () => {
      // Invalidate the "validateToken" query to reflect the user's signed-out state
      await queryClient.invalidateQueries("validateToken");

      // Show a success message
      showToast({ message: "Signed out Successfully!", type: "SUCCESS" });
    },
    // On error during sign-out
    onError: (error: Error) => {
      // Show an error message
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  // Handle the sign-out button click
  const handleClick = () => {
    // Trigger the sign-out mutation
    mutation.mutate();
  };

  // Render the SignOutButton component with a button for signing out
  return (
    <button
      onClick={handleClick}
      className="text-orange shadow-md px-3 font-bold bg-white hover:bg-gray-100"
    >
      Sign Out
    </button>
  );
};


export default SignOutButton;
