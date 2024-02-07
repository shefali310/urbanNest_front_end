const Footer = () => {
  return (
    <div className="bg-green-800 py-10">
      <div className="container mx-auto flex flex-col items-center">
        <span className="text-3xl text-white font-bold tracking-tight mb-4">
          UrbanNest.com
        </span>
        <span className="text-white font-bold tracking-tight flex flex-wrap gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
         
          <p className="cursor-pointer">Contact Us</p>
          <p className="cursor-pointer">About</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
