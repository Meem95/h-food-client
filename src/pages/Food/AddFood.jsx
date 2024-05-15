import { useContext } from "react";
import { MdOutlineFoodBank } from "react-icons/md";
 import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";


const AddFood = () => {
  const { user } = useContext(AuthContext);
    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const food_name = form.food_name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const date = form.date.value;
        const image = form.image.value;
        const status = "available";
        const short_description = form.short_description.value;
        const email = user.email;
        const name = user.displayName;
        const userImage = user.photoURL;

        const newLocation = { food_name, quantity, location, date,image, status, short_description,email ,name,userImage}

        console.log(newLocation);

        //send data to the server
        fetch('https://b9a11-food-server.vercel.app/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newLocation)
        })
            .then(res => res.json())
            .then(data => {
             
                console.log(data);
                form.reset();
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    }

  return (
    <div>
    <Helmet>
    <title> H-food  | Add Your Food</title>
  </Helmet>
      <section className="p-6 text-black my-10">
          <div className="shadow-lg p-5 border dark:bg-[#1a2641d5]">
            <div className="mt-5 mb-8 flex  justify-center">
            <div className="text-3xl mt-1 text-lime-600"><MdOutlineFoodBank /></div>
            <div> <p className="text-center text-3xl font-bold">
                 Add Your Food
              </p></div>
            </div>
            <form onSubmit={handleAddFood}>
            
              <div className="flex gap-8 ">
                <div className="flex-1">
                  <label className="block mb-2 dark:text-white" htmlFor="name">
                  Food Name
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#84CC16]"
                    type="text"
                    placeholder="Food Name"
                    id="food_name"
                    name="food_name"
                    required
                  />

                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="quantity"
                  >
                   Food Quantity
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#84CC16]"
                    type="number"
                    placeholder="Enter Quantity / Person"
                    id="quantity"
                    name="quantity"
                    required
                  />
                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="date"
                  >
                  Expired Date
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#84CC16]"
                    type="date"
                    placeholder="Enter Expired Date"
                    id="date"
                    name="date"
                    required
                  />
                </div>
                {/* Right side */}
                <div className="flex-1">
                  <label className="block mb-2 dark:text-white" htmlFor="image">
                  Food Image
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#84CC16]"
                    type="text"
                    placeholder="Enter Image URL"
                    id="image"
                    name="image"
                    required
                  />
                  <label
                    className="block mb-2 mt-4 dark:text-white"
                    htmlFor="type"
                  >
                    Pickup Location
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#84CC16]"
                    type="text"
                    placeholder="Enter Location"
                    id="location"
                    name="location"
                    required
                  />

                  <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="status"
                  >
                    Food Status
                  </label>
                  <input
                    className="w-full p-2 border rounded-md focus:outline-[#84CC16]"
                    type="text"
                    placeholder=" Available"
                    id="status"
                    name="status"
                    disabled
                  />
                   
                </div>
              </div>
              <label
                    className="block mt-4 mb-2 dark:text-white"
                    htmlFor="description"
                  >
                    Short Notes
                  </label>
              <textarea id="description" required name="short_description" rows="7" placeholder="short description" className="w-full rounded-md  focus:outline-[#84CC16] text-black  border p-3 "></textarea>
              <input
                className="px-4 w-full py-2 mt-4 rounded hover:bg-[#84CC16]  bg-[#84CC16] duration-200 text-white cursor-pointer font-semibold"
                type="submit"
                value="Add Food"
              />
            </form>
          </div>
       
      </section>
    </div>
  );
};

export default AddFood;
