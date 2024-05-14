import React from "react";
import { Helmet } from "react-helmet";
import Slider from "./Home/Slider";
import Gallery from "./Home/Gallery";
import Review from "./Home/Review";
import FeatureFood from "./Home/FeatureFood";
import { Link, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const allData = useLoaderData();
  const featureFoods = allData.locationData;

  // Filter featureFoods by status "available"
  const availableFeatureFoods = featureFoods.filter(featureFood => featureFood.status === "available");

  // Sort the availableFeatureFoods by quantity in descending order
  const sortedFeatureFoods = [...availableFeatureFoods].sort((a, b) => b.quantity - a.quantity);

  // Select the top six feature foods
  const sixfeatureFoods = sortedFeatureFoods.slice(0, 6);

  return (
    <div className="m-0 p-0">
      <Helmet>
        <title> H-food | Home</title>
      </Helmet>
      <div>
        <Slider />
      </div>

      <div className="max-w-7xl mx-auto">
        <Fade duration="2000">
          <section className="py-6 sm:py-12">
            <div className="p-6 mx-auto space-y-5">
              <div className="my-6 animate__animated animate__bounce">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                  Featured <span className="text-lime-600">Food</span>
                </h1>
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {sixfeatureFoods.map((featureFood) => (
                  <FeatureFood key={featureFood.id} cards={featureFood} />
                ))}
              </div>
            </div>
            <div className="text-center">
              <Link to={'/available-food'} > <button className="btn  bg-lime-600 text-white btn-wide btn-md">View All</button></Link>
            </div>
          </section>
        </Fade>
      </div>

      <Fade direction="left" duration="2000">
        <div>
          <Gallery />
        </div>
      </Fade>
      <Fade direction="left" duration="2000">
        <div>
          <Review />
        </div>
      </Fade>
    </div>
  );
};

export default Home;
