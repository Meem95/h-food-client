import { useLoaderData } from "react-router-dom";
import FeatureFood from "./Home/FeatureFood";
import { useState } from "react";
import { Helmet } from "react-helmet";

const AllAvailableFood = () => {
  const footData = useLoaderData();

  // Filter footData by status "available"
  const availableFoods = footData.filter(food => food.status === "available");

  const [foods, setFoods] = useState(availableFoods);
  const [searchTerm, setSearchTerm] = useState("");
  const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true); // Track layout state

  const sortByExpireDate = () => {
    const sortedFoods = [...foods].sort((a, b) => {
      // Convert date strings to Date objects
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      // Compare dates
      return dateA.getTime() - dateB.getTime();
    });
    setFoods(sortedFoods);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFoods = foods.filter((food) =>
    food.food_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleLayout = () => {
    setIsThreeColumnLayout((prevLayout) => !prevLayout); 
  };

  return (
    <div>
      <Helmet>
        <title> H-food | Available Food</title>
      </Helmet>
      <div className="min-h-screen max-w-7xl mx-auto">
        <section className="py-6 sm:py-12 ">
          <div className=" p-6 mx-auto space-y-5">
            <div className="my-6 animate__animated animate__bounce">
              <h2 className="text-5xl text-center font-bold ">
              Available Food
              </h2>
            </div>
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Search by Food Name"
                className="border w-1/3 border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-lime-600"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="text-center ">
              <button className="btn font-bold" onClick={sortByExpireDate}>
                Sort by Food Expired Date (Calendar Date Wise)
              </button>
              <button className="btn font-bold ml-2  mb-10" onClick={toggleLayout}>
                {isThreeColumnLayout ? "Switch to Two Column" : "Switch to Three Column"}
              </button>
            </div>
            <div className={`grid ${isThreeColumnLayout ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-20 lg:w-full lg:max-w-5xl mx-auto'} gap-x-10 gap-y-10`}>
              {filteredFoods.map((touristSpot) => (
                <FeatureFood
                  key={touristSpot.id}
                  cards={touristSpot}
                ></FeatureFood>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AllAvailableFood;
