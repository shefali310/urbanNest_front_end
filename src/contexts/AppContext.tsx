import React, { useContext, useState } from "react";
import Toast from "../components/Toast";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";

// Define the structure of a toast message
type ToastMessage = {
  message: string;
  type: "SUCCESS" | "ERROR";
};

// Define the structure of the AppContext
type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: boolean;
};

// Create the AppContext using React.createContext
const AppContext = React.createContext<AppContext | undefined>(undefined);

// AppContextProvider component to provide the context to its children
export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // State to manage the toast message
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);

  // Use the "validateToken" query to check if the user is logged in
  const { isError } = useQuery("validateToken", apiClient.validateToken, {
    retry: false,
  });

  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          // Set the toast message when showToast is called
          setToast(toastMessage);
        },
        // Determine if the user is logged in based on the "validateToken" query
        isLoggedIn: !isError,
      }}
    >
      {/* Display the Toast component if there is a toast message */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {/* Render the children components */}
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  // Use the useContext hook to access the AppContext
  const context = useContext(AppContext);
  // Return the context as AppContext
  return context as AppContext;
};
