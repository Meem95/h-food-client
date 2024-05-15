import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { CiCalendarDate } from "react-icons/ci";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { motion } from "framer-motion";

const FeatureFood = ({ cards }) => {
  const {
    food_name, quantity, location, date, image, status, short_description, email, name, userImage
    , _id,
  } = cards;
  const truncateString = (str, numWords) => {
    const words = str.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + "...";
    } else {
      return str;
    }
  };

  return (
    <motion.div whileHover = {{scale: 1.02}}>
 <div>

<div className="bg-white rounded-xl overflow-hidden shadow-2xl ">
  <img
    className="w-full h-[252px] "
    src={image}
    alt="Home in Countryside"
  />
  <div className="p-6 space-y-4">
    <div className="flex space-x-4 ">
      <div className="flex ">
        <div className="p-2 "><CiCalendarDate /> </div><span className="text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2">  {date} </span>
      </div>
      <div className=" text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2">
        {quantity} / Persons
      </div>
      <div className="flex "> <div className="p-2"><CiLocationOn /> </div><span className="text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2"> {truncateString(location, 2)} </span></div>
    </div>
    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
  {truncateString(food_name, 4)} <span className="text-xs bg-lime-600  rounded-full text-white badge">{status}</span>
    </h4>
    <div className="mt-2">
      <span>  {truncateString(short_description, 11)}   </span>
    </div>
    <div className="mt-2  ">
      <img
        className="w-[40px] rounded-full h-[40px] "
        src={userImage}
        alt="Home in Countryside"
      />
      <span className=" mt-2 text-gray-600 text-sm">{name}</span>
    </div>
    <div className="text-center ">   <Link to={`/food-details/${_id}`}><button className="text-lime-600 text-center inline-flex items-center">Details  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4  ml-2">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg></button></Link> </div>

  </div>
</div>

</div >
    </motion.div>
   
  );
};
FeatureFood.propTypes = {
  cards: PropTypes.shape({
    tourists_spot_name: PropTypes.string,
    country_Name: PropTypes.string,
    average_cost: PropTypes.number,
    totalVisitorsPerYear: PropTypes.number,
    location: PropTypes.string,
    seasonality: PropTypes.string,
    image: PropTypes.string,
    travel_time: PropTypes.string,
    _id: PropTypes.string,
  }),
};
export default FeatureFood;
