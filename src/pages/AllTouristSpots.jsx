import { useLoaderData } from "react-router-dom";
import TouristSpot from "./Home/TouristSpot";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllTouristSpots = () => {
  //const touristSpots = useLoaderData();

  const touristSpotsData = useLoaderData();
  const [touristSpots, setTouristSpots] = useState(touristSpotsData);

  const sortTouristSpotsByCost = () => {
    const sortedTouristSpots = [...touristSpots].sort(
      (a, b) => a.average_cost - b.average_cost
    );
    setTouristSpots(sortedTouristSpots);
  };
  return (
    <div>
      <Helmet>
      <title> Travel Trek |Tourists Spots</title>
    </Helmet>
      <div className="min-h-screen max-w-7xl mx-auto">
        <section className="py-6 sm:py-12 ">
          <div className=" p-6 mx-auto space-y-5">
            <div className="my-6 animate__animated animate__bounce">
              <h2 className="text-5xl text-center font-bold ">
                Tourists Spots
              </h2>
            </div>
            <div className="text-center">
              <button className="btn font-bold"onClick={sortTouristSpotsByCost}>
                Sort by Average Cost (Low to High)
              </button>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {touristSpots.map((touristSpot) => (
                <TouristSpot
                  key={touristSpot.id}
                  cards={touristSpot}
                ></TouristSpot>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllTouristSpots;
