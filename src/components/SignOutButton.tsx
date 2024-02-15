import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css";

const SignOutButton = () => {
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();

  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken");

      showToast({ message: "Signed out Successfully!", type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

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
