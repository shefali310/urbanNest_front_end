import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import "../css/urbanNest.css";

interface ResetPasswordParams {
  token: string | undefined;
  [key: string]: string | undefined;
}

const ResetPassword = () => {
  const { showToast } = useAppContext();

  const { token } = useParams<ResetPasswordParams>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!password || !confirmPassword) {
      showToast({
        message: `Enter both passwords!`,
        type: "ERROR",
      });

      console.error("Please enter both password and confirm password");
      return;
    }

    if (password !== confirmPassword) {
      showToast({
        message: `Passwords do not match`,
        type: "ERROR",
      });
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
        showToast({
          message: `Password reset Successful!`,
          type: "SUCCESS",
        });

        navigate("/sign-in");
      } else {
        const responseData = await response.json();

        showToast({
          message: `Failed to reset password`,
          type: "ERROR",
        });
        console.error("Failed to reset password:", responseData.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl text-orange font-bold mb-4">
        Reset your Password here:
      </h2>
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
      <button className="bg-orange text-gray p-2" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
