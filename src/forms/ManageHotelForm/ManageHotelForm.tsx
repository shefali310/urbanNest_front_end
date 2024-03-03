import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestSection from "./GuestSection";
import ImagesSection from "./ImagesSection";
import { HotelType } from "../../../../back-end/src/models/hotel";
import { useEffect } from "react";

// Defining the structure of the form data
export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

// Props for the ManageHotelForm component
type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

// Main component for managing hotel form
const ManageHotelForm = ({ onSave, isLoading, hotel }: Props) => {

  // Initializing form methods using useForm hook
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;

  // Resetting form values when the 'hotel' prop changes
  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  // Handling form submission
  const onSubmit = handleSubmit((formDataJson: HotelFormData) => {

    // Creating a FormData object to handle file uploads
    const formData = new FormData();

    // Appending form data to the FormData object
    if (hotel) {
      formData.append("hotelId", hotel._id);
    }
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    // Appending image URLs to the FormData object
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    // Appending image files to the FormData object
    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    // Calling the onSave function with the FormData object
    onSave(formData);
  });

  // Rendering the form using FormProvider to provide form methods to child components
  return (
    <FormProvider {...formMethods}>
      <form className="flex flex-col gap-10 bg-gray-200 p-5 rounded shadow-md" onSubmit={onSubmit}>
        {/* Including various sections of the form as separate components */}
        <DetailsSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestSection />
        <ImagesSection />
        {/* Submit button with loading state */}
        <span className="flex justify-center">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-orange text-white pt-2 pb-2 pl-4 pr-4 font-bold hover:bg-gray-500 text-xl disabled:bg-gray-800"
          >
            {isLoading ? "Adding..." : "ADD"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};


export default ManageHotelForm;
