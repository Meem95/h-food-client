import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdSupervisedUserCircle } from "react-icons/md";
import {  CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
const TouristSpot = ({ cards }) => {
    const { tourists_spot_name, country_Name, average_cost, totalVisitorsPerYear, location, seasonality,image, travel_time, _id,short_description} = cards;
    const truncateString = (str, numWords) => {
        const words = str.split(' ');
        if (words.length > numWords) {
            return words.slice(0, numWords).join(' ') + '...';
        } else {
            return str;
        }
    
    };

    return (
        <div>
              <div className="   p-4" data-aos="zoom-in" data-aos-duration="1500">
                <div className="card bg-base-100 shadow-2xl relative p-4">
                <div className="flex  space-x-3 my-2"> <div className="p-2 bg-[#FF8900] rounded-full text-white font-extrabold text-lg"><CiLocationOn /> </div><span className="text-lg font-medium"> {truncateString(location,3)} </span></div>
                    <div className="relative">
                        <figure className="">
                            <img className="rounded-md lg:h-60  md:h-56" src={image} alt={country_Name} />
                        </figure>
                    </div>
                   
                    <div className="">
                        <h2 className="card-title text-black my-4">
                        {truncateString(tourists_spot_name,4)}
                            
                            <div className="badge text-white p-3 bg-[#FF8900]">{country_Name}</div>
                        </h2>
                    
                        <div className="card-actions justify-evenly bg-[#dfe0e6] p-1 rounded-xl">
                            <div className="text-black flex p-1 font-medium"><MdSupervisedUserCircle />{truncateString(totalVisitorsPerYear,3)}  </div>
                            <div className="text-black flex p-1 font-medium">{truncateString(travel_time,2)}  </div>
                            <div className="text-black flex p-1 font-medium"> <TiWeatherPartlySunny />{truncateString(seasonality,2)}  </div>
                        </div>
                        <div className='my-4'>
                            <p>
                                {truncateString(short_description,11)}
                            </p>
                        </div>
                        <div className="flex justify-between my-4">
                        <div><p> <span className=" font-bold text-2xl">${average_cost}</span>/ Person</p></div>
                            <Link to={`/tourist-spot-details/${_id}`}>
                                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:bg-[#ff9811]  bg-[#FF8900] text-white font-bold">View Details</button>
                            </Link>
                        </div>
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
        _id: PropTypes.string
    })
};
export default TouristSpot;