import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  //  handle reset password function
  const handleResetPassword = async () => {
    if (!email) {
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
        console.log("Password reset initiated successfully");
      } else {
        const responseData = await response.json();
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
        Enter the email associated with your account and we will send you a link
        to reset your password.
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
