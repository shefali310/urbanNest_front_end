import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/SignIn";
import { HotelType } from "../../back-end/src/models/hotel";

// Access the API base URL from the Vite environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Function to register a user
export const register = async (formData: RegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const responseBody = await response.json();

  // Throw an error if the response is not okay
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

// Function to sign in a user
export const signIn = async (formData: SignInFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const body = await response.json();

  // Throw an error if the response is not okay
  if (!response.ok) {
    throw new Error(body.message);
  }

  // Return the response body
  return body;
};

// Function to validate the user's token
export const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: "include",
  });

  // Throw an error if the response is not okay
  if (!response.ok) {
    throw new Error("Token invalid");
  }

  // Return the response body as JSON
  return response.json();
};

// Function to sign out a user
export const signOut = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  // Throw an error if the response is not okay
  if (!response.ok) {
    throw new Error("Error during signout");
  }
};

// Function to Add hotel
export const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: hotelFormData,
  });

  if (!response.ok) {
    throw new Error("Failed to add hotel");
  }

  return response.json();
};

// Function to View hotel
export const fetchMyHotels = async (): Promise<HotelType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

  return response.json();
};

// function for fetching hotel by id and view as well as edit hotel.
export const fetchMyHotelById = async (hotelId: string): Promise<HotelType> => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error fetching hotels");
  }

  return response.json();
};

// function of after editing hotel, it will update the hotel data.
export const updateMyHotelById = async (hotelFormData: FormData) => {
  const response = await fetch(
    `${API_BASE_URL}/api/my-hotels/${hotelFormData.get("hotelId")}`,
    {
      method: "PUT",
      body: hotelFormData,
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update Hotel");
  }

  return response.json();
};

// function to Delete hotel
export const deleteMyHotel = async (hotelId: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/my-hotels/${hotelId}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete hotel");
    }

    return response.json();
  } catch (error) {
    console.error("Error deleting hotel:", error);
    throw new Error("Error deleting hotel. Please try again later.");
  }
};
