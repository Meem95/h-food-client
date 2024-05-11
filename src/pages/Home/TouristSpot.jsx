import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdSupervisedUserCircle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const TouristSpot = ({ cards }) => {
  const {
    tourists_spot_name,
    country_Name,
    average_cost,
    totalVisitorsPerYear,
    location,
    seasonality,
    image,
    travel_time,
    _id,
    short_description,
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
    <div>
      <div className="bg-white rounded-xl overflow-hidden shadow-2xl ">
        <img
          className="w-full h-full "
          src="https://i.ibb.co/3RDnG60/cornsilog-short-term-corned-beef-600nw-1869145681.jpg"
          alt="Home in Countryside"
        />
        <div className="p-6 space-y-4">
          <div className="flex space-x-9">
            <div className="ml-2  text-teal-800 text-xs uppercase font-semibold tracking-wide">
              01/02/2024
            </div>

            <div className="ml-2  text-teal-800 text-xs uppercase font-semibold tracking-wide">
              2 person
            </div>
            <div className="ml-2  text-teal-800 text-xs uppercase font-semibold tracking-wide">
              121 arriele drive
            </div>
          </div>
          <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
            Beautiful Home in the countryside
          </h4>
          <div className="mt-2">
            <span>Biryani is a popular South Asian rice dish characterized by its aromatic flavors and rich spices. Typically made with basmati rice, meat .   </span>
          </div>
          <div className="mt-2  ">
            <img
          className="w-[50px] rounded-full "
          src="https://i.ibb.co/3RDnG60/cornsilog-short-term-corned-beef-600nw-1869145681.jpg"
          alt="Home in Countryside"
        />
          <span className="ml-2 mt-2 text-gray-600 text-sm">Fatema tuz Zohora</span>
          </div>
        </div>
      </div>
    </div>
  );
};
TouristSpot.propTypes = {
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
export default TouristSpot;
