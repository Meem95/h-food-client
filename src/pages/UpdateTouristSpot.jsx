import { Helmet } from "react-helmet";
import { IoAddCircleSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateTouristSpot = () => {
  
  const updateMyLocation = useLoaderData();
  const {
    _id,
    tourists_spot_name,
    country_Name,
    average_cost,
    totalVisitorsPerYear,
    location,
    seasonality,
    image,
    travel_time,
    short_description,
  } = updateMyLocation;
  const handleUpdatedLocation = (event) => {
    event.preventDefault();

    const form = event.target;

    const tourists_spot_name = form.tourists_spot_name.value;
    const country_Name = form.country_Name.value;
    const average_cost = form.average_cost.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const image = form.image.value;
    const travel_time = form.travel_time.value;
    const short_description = form.short_description.value;

    const updateLocation = {
      tourists_spot_name,
      country_Name,
      average_cost,
      totalVisitorsPerYear,
      location,
      seasonality,
      image,
      travel_time,
      short_description,
    };

    console.log(updateLocation);

    //send data to the server
    fetch(`https://b9a10-tour-server.vercel.app/location/${_id}`, {
      method: "Put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateLocation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Location Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title> Travel Trek | Update Tourist Spot</title>
      </Helmet>
      <section className="p-6 text-black">
        <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
          <div className="mt-5 mb-8 flex  justify-center">
            <div className="text-3xl mt-1 text-[#FF8900]">
              <IoAddCircleSharp />
            </div>
            <div>
              {" "}
              <p className="text-center text-3xl font-bold">
                Update Your Tourist Spot
              </p>
              <p className="text-center text-2xl font-semibold">
              {tourists_spot_name}
              </p>
            </div>
          </div>
          <form onSubmit={handleUpdatedLocation}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="name">
                  Tourists Spot Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder="Tourists Spot Name"
                  id="tourists_spot_name"
                  name="tourists_spot_name"
                  defaultValue={tourists_spot_name}
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="country_Name"
                >
                  Country Name
                </label>
                <select
                  name="country_Name"
                  defaultValue={country_Name}
                  id="country_Name"
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder="Select Country Name"
                >
                {["Bangladesh", "Thailand", "Indonesia", "Malaysia", "Vietnam", "Cambodia"].map((countryOption) => (
    <option
      key={countryOption}
      value={countryOption}
      // Set the selected attribute if the current option matches the country_Name
      selected={countryOption === country_Name}
    >
      {countryOption}
    </option>
  ))}
                  {/* <option value="" selected>
                    Select Country
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Cambodia">Cambodia</option> */}
                </select>

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="average_cost"
                >
                  Average Cost
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="number"
                  placeholder="Enter Average Cost"
                  id="average_cost"
                  name="average_cost"
                  defaultValue={average_cost}
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="totalVisitorsPerYear"
                >
                  Total Visitors Per Year
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder="Enter Total Visitors Per Year"
                  id="totalVisitorsPerYear"
                  name="totalVisitorsPerYear"
                  defaultValue={totalVisitorsPerYear}
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Image
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder="Enter Image URL"
                  id="image"
                  name="image"
                  defaultValue={image}
                />
                <label
                  className="block mb-2 mt-4 dark:text-white"
                  htmlFor="type"
                >
                  Location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder="Enter Location"
                  id="location"
                  name="location"
                  defaultValue={location}
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="seasonality"
                >
                  Seasonality
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder=" (Like Summer/Winter)"
                  id="seasonality"
                  name="seasonality"
                  defaultValue={seasonality}
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="travel_time"
                >
                  Travel Time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder=" Like 7 Days"
                  id="travel_time"
                  name="travel_time"
                  defaultValue={travel_time}
                />
              </div>
            </div>
            <label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="travel_time"
            >
              Short Description
            </label>
            <textarea
              id="description"
              name="short_description"
              defaultValue={short_description}
              rows="7"
              placeholder="short description"
              className="w-full rounded-md  focus:outline-[#FF8900] text-black  border p-3 "
            ></textarea>
            <input
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ff9811]  bg-[#FF8900] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Update Tourist Spot"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateTouristSpot;
