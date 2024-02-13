import { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { showToast } = useAppContext();

  //  handle reset password function
  const handleResetPassword = async () => {
    if (!email) {
      showToast({
        message: `Email is required`,
        type: "ERROR",
      });
      console.error("Email is required");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        showToast({
          message: `Password reset link sent to ${email}`,
          type: "SUCCESS",
        });
      } else {
        const responseData = await response.json();
        showToast({
          message: `Email is not exist`,
          type: "ERROR",
        });

        console.error(
          "Failed to initiate password reset:",
          responseData.message
        );
      }
    } catch (error) {
      console.error("Error initiating password reset:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <h6 className="text-2xl font-bold mb-4 p-3">
        Enter the email associated with your account to reset your password.
      </h6>
      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white p-2"
        onClick={handleResetPassword}
      >
        Continue
      </button>
    </div>
  );
};

export default ForgotPassword;
