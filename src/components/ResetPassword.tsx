import { useState } from "react";
// import { useParams } from "react-router-dom";

// interface ResetPasswordParams {
//   token: string;
// }

const ResetPassword = () => {
//   const { token } = useParams<ResetPasswordParams>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = () => {
    // Logic to reset password using the token
    // console.log(`Password reset successful for token: ${token}`);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
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
      <button className="bg-blue-500 text-white p-2" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
