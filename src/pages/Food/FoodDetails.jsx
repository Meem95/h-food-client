import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const updateMyLocation = useLoaderData();
  console.log(updateMyLocation)
  const {food_name, quantity, location, date,image, status, short_description,email ,name,userImage } = updateMyLocation;

  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10">
    <Helmet>
    <title> H-food  | </title>
  </Helmet>
      <div className="container max-w-5xl px-10 py-6 mx-auto rounded-lg shadow-2xl">
        <div>
          <img className="w-full rounded-lg" src={image} alt={food_name} />
        </div>
        
         {food_name}
      </div>
    </div>
  );
};

export default FoodDetails;
