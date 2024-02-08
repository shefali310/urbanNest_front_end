import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="bg-gray-800 py-10">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
      
        <span className="text-3xl text-white font-bold tracking-tight mb-4 md:mb-0">
          UrbanNest.com
        </span>

       
        <span className="text-white font-bold tracking-tight flex flex-col gap-4 md:flex-row md:justify-end">
          <p className="cursor-pointer text-center">Privacy Policy</p>
          <p className="cursor-pointer text-center">Terms of Service</p>
          <Link className="cursor-pointer text-center" to="/contactus">Contact Us</Link>
          <Link className="cursor-pointer text-center" to="/aboutus">About us </Link>
         
         
        </span>
      </div>
    </div>
  );
};

export default Footer;
