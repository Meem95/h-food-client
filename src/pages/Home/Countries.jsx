import { useState } from "react";
import { PropTypes } from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

const Countries = ({ country  }) => {
  const { country_Name, description, image,  } = country;
  // console.log("locationas",locations)

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className=" animate__animated animate__bounce"  data-aos="zoom-in" data-aos-duration="1500">
        <div
          className="relative  shadow-xl image-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        <Link to={`/country-name/${encodeURIComponent(country_Name)}`}>
        <figure>
            <img className=" w-full lg:h-60  md:h-56" src={image} alt={country_Name} />
          </figure>
          {isHovered && (
            <div className="absolute lg:h-60  md:h-56 inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 text-white">
              <div>
                <h2 className="text-2xl font-bold mb-2">{country_Name}</h2>
                <p className="text-lg">{description}</p>
              </div>
            </div>
          )}
        </Link>
          
        </div>
      
    </div>
  );
};
Countries.propTypes = {
  country: PropTypes.shape({
    country_Name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
  }),
};
export default Countries;
