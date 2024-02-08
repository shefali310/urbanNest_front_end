import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface ResetPasswordParams {
  token: string | undefined;
  [key: string]: string | undefined;
}

const ResetPassword = () => {
  const { token } = useParams<ResetPasswordParams>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      console.error("Please enter both password and confirm password");
      return;
    }

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      if (response.ok) {
        console.log("Password reset successful");
        navigate("/login");
      } else {
        const responseData = await response.json();
        console.error("Failed to reset password:", responseData.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Reset your Password here:</h2>
      <input
        type="password"
        placeholder="Enter your new password"
        className="border p-2 mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm your new password"
        className="border p-2 mb-4"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        className="bg-green-500 text-white p-2"
        onClick={handleResetPassword}
      >
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
