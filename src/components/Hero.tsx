import "../css/urbanNest.css";

const Hero = () => {
  return (
    <div className="bg-gray-800 pb-16 pt-3">
      <div className="container mx-auto flex flex-col gap-2">
        <h1 className="sm:text-4xl md:text-4xl lg:text-4xl  pl-5 text-orange font-bold">
          Book the moment, stay a lifetime.
        </h1>
        <p className="sm:text-sm md:text-base lg:text-2xl  pl-5 text-orange">
          Discover elegance, discover comfort, discover your home away from
          home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
