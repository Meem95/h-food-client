import { Helmet } from "react-helmet";
import { MdOutlineFoodBank } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateFood = () => {
  
  const updateMyFood = useLoaderData();
  const {
    food_name, quantity, location, date, image, status, short_description, email, name, userImage
    , _id,
  } = updateMyFood;
  const handleUpdatedLocation = (event) => {
    event.preventDefault();

    const form = event.target;

    const food_name = form.food_name.value;
    const quantity = form.quantity.value;
    const date = form.date.value;
    const location = form.location.value;
    const status = form.status.value;
    const image = form.image.value;
    const short_description = form.short_description.value;

    const updateFood = {
      food_name,
      quantity,
      date,
      location,
      status,
      image,
      short_description,
    };

    console.log(updateFood);

    //send data to the server
    fetch(`https://b9a11-food-server.vercel.app/food/${_id}`, {
      method: "Put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Food Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>  H-food | Update Your Food</title>
      </Helmet>
      <section className="p-6 text-black">
        <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
          <div className="mt-5 mb-8 flex  justify-center">
          <div className="text-3xl mt-1 text-lime-600"><MdOutlineFoodBank /></div>
            <div>
              {" "}
              <p className="text-center text-3xl font-bold">
                Update Your Food
              </p>
              <p className="text-center text-2xl font-semibold">
              {food_name}
              </p>
            </div>
          </div>
          <form onSubmit={handleUpdatedLocation}>
            <div className="flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="name">
                Food Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder=" Food Name"
                  id="food_name"
                  name="food_name"
                  defaultValue={food_name}
                />

                
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="quantity"
                >
                  Food Quantity
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="number"
                  placeholder="Enter Food Quantity"
                  id="quantity"
                  name="quantity"
                  defaultValue={quantity}
                />
                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="date"
                >
                 Expired Date
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder="Enter Expired Date"
                  id="date"
                  name="date"
                  defaultValue={date}
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white" htmlFor="image">
                  Food Image
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
                   Pickup Location
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
                  htmlFor="status"
                >
                  Food Status
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF8900]"
                  type="text"
                  placeholder=" (Like Summer/Winter)"
                  id="status"
                  name="status"
                  defaultValue={status}
                />

              </div>
            </div>
            <label
              className="block mt-4 mb-2 dark:text-white"
              htmlFor="description"
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
              className="px-4 w-full py-2 mt-4 rounded hover:bg-[#84CC16]  bg-[#84CC16] duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Update Food"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateFood;
