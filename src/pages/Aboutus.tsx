
const AboutUs  = () => {
  return (
    <div className="bg-gray-800 pb-16 pt-10">
      <div className="container mx-auto flex flex-col gap-8 items-center">
        <h1 className="text-6xl sm:text-4xl text-white font-bold mb-4">Welcome to Our Hotel booking site</h1>
        <p className="text-xl sm:text-lg text-white max-w-2xl text-center">
          At our hotel, we believe in creating memorable experiences for our guests. From luxurious accommodations
          to world-class amenities, we are dedicated to making your stay exceptional.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <img
              src="/images/about_us_image1.jpg" 
              alt="Luxurious Room"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <img
              src="/images/about_us_image2.jpg" 
              alt="Poolside Paradise"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <img
              src="/images/about_us_image3.jpg" 
              alt="Dining Elegance"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-4xl sm:text-2xl text-white font-bold mb-4 text-center">Our Commitment to Excellence</h2>
          <p className="text-lg text-white max-w-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, justo nec sagittis facilisis,
            augue ex faucibus leo, sit amet posuere tellus urna nec nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
