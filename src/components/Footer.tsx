import { Link } from "react-router-dom";
import "../css/urbanNest.css";

const Footer = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <Link to="/">
          <img
            src="src/assets/UrbanNestLogo.png"
            alt="UrbanNest.com"
            className="w-32 h-14 rounded-md"
          />
        </Link>

        <span className="text-orange font-bold tracking-tight flex flex-col gap-4 md:flex-row md:justify-end">
          <p className="cursor-pointer text-center">Privacy Policy</p>
          <p className="cursor-pointer text-center">Terms of Service</p>
          <Link className="cursor-pointer text-center" to="/contactus">
            Contact Us
          </Link>
          <Link className="cursor-pointer text-center" to="/aboutus">
            About us{" "}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
