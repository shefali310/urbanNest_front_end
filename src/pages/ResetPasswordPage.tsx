import React from "react";
import { Link } from "react-router-dom";
import ResetPassword from "../components/ResetPassword";

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Link to="/">Back to Home</Link>
      <ResetPassword />
    </div>
  );
};

export default ResetPasswordPage;
