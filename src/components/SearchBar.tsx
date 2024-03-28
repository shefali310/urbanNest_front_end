import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "../css/urbanNest.css";

const SearchBar = () => {
  // Access the navigation function from react-router-dom
  const navigate = useNavigate();

  // Access the search context
  const search = useSearchContext();

  // State variables for search parameters
  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  // Handle form submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Save search values in the context and navigate to the search page
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  // Set min and max dates for the date picker
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  // Render the SearchBar component with input fields and buttons
  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 sm:-mt-4 p-3 bg-gray-300 rounded shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="flex flex-row items-center bg-white p-2 mt-6">
        <MdTravelExplore size={25} className="mr-2" />
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div>
        <p>Checkin</p>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div>
        <p>Checkout</p>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="flex flex-col  bg-white px-2 py-1 gap-1  mt-6">
        <div className="flex">
          <label className="items-center flex">
            Adults:
            <input
              className="w-full p-1 focus:outline-none font-bold"
              type="number"
              min={1}
              max={20}
              value={adultCount}
              onChange={(event) => setAdultCount(parseInt(event.target.value))}
            />
          </label>
          <label className="items-center flex">
            Children:
            <input
              className="w-full p-1 focus:outline-none font-bold"
              type="number"
              min={0}
              max={20}
              value={childCount}
              onChange={(event) => setChildCount(parseInt(event.target.value))}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center col-span-full">
        <button className=" md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-600 text-orange h-full p-2 font-bold text-xl hover:bg-gray-500">
          Search
        </button>
        <button className=" md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 bg-gray-600 text-orange h-full p-2 ml-4 font-bold text-xl hover:bg-gray-500">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
