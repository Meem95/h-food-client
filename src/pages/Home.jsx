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
  const sixfeatureFoods = featureFoods.slice(0, 6);
  console.log(allData);


  return (
    <div className=" m-0 p-0">
      <Helmet>
        <title> H-food | Home</title>
      </Helmet>
      <div>
        <Slider></Slider>
      </div>

      <div className=" max-w-7xl mx-auto">
        <Fade duration="2000">
          <section className="py-6 sm:py-12 ">
            <div className=" p-6 mx-auto space-y-5">
              <div className="my-6 animate__animated animate__bounce">
                <h2 className="text-5xl text-center font-bold ">
                  Featured Food
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                {sixfeatureFoods.map((featureFood) => (
                  <FeatureFood
                    key={featureFood.id}
                    cards={featureFood}
                  ></FeatureFood>
                ))}
              
              </div>
            </div>
            <div className="text-center">
              <Link ></Link>
                  <button className="btn btn-success btn-md">View All</button>
                </div>
          </section>
        </Fade>
      </div>

      <Fade direction="left" duration="2000">
        <div>
          <Gallery></Gallery>
        </div>
      </Fade>
      <Fade direction="left" duration="2000">
        <div>
          <Review></Review>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
