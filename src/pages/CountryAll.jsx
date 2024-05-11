import { useLoaderData } from "react-router-dom";
import TouristSpot from "./Home/TouristSpot";


const CountryAll = () => {
    const countries = useLoaderData();
    console.log("countries", countries);



    return (
        <div className="min-h-screen max-w-7xl mx-auto">
        <div>
            <h1></h1>
        </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {countries.map((touristSpot) => (
                <TouristSpot
                  key={touristSpot.id}
                  cards={touristSpot}
                ></TouristSpot>
              ))}
            </div>


           
        </div>
    );
};

export default CountryAll;