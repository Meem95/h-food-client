import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
const FoodDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState("");
  const { user } = useContext(AuthContext);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const updateMyLocation = useLoaderData();
  const { food_name, quantity, location, date, image, status, short_description, email, name, userImage ,_id} = updateMyLocation;

  const handleRequest = (event) => {
    event.preventDefault();
    const createdAt = new Date().toISOString();
    const newLocation = {
      food_name,
      quantity,
      location,
      ex_date:date,
      image,
      name,
      date,
      email,
      userImage,
      status: "requested",
      short_description:additionalNotes,
      req_email: user.email,
      req_name: user.displayName,
      req_userImage: user.photoURL,
      req_date:createdAt,
      
    };

    // Send data to the server
    fetch(`https://b9a11-food-server.vercel.app/food/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newLocation)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // Display success message
          Swal.fire({
            title: 'Success!',
            text: 'Request Food Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          // Close modal
          setIsOpen(false);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Display error message
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add request. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      });
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10">
      <Helmet>
        <title>H-food | {food_name}</title>
      </Helmet>
      <div className="text-black bg-[#FFFFE0] shadow-2xl">
        <div className="container grid grid-cols-12 mx-auto">
          {/* Left Section */}
          <div className="bg-no-repeat bg-cover col-span-full lg:col-span-6" style={{ backgroundImage: `url(${image})`, backgroundPosition: "center center", backgroundSize: "cover" }}></div>
          {/* Right Section */}
          <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-6 lg:p-10">
            <h1 className="text-3xl font-semibold">{food_name}</h1>
            <p className="flex-1 pt-2"><span className="text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2"> Quantity: </span> {quantity} / Person</p>
            <p className="flex-1 pt-2"><span className="text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2"> Location: </span> {location}</p>
            <p className="flex-1 pt-2"><span className="text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2"> Date: </span> {date}</p>
            <p className="flex-1 pt-2"><span className="text-teal-800 text-xs uppercase font-semibold tracking-wide mt-2"> Short Notes: </span> {short_description}</p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                <img className="h-20 w-20 rounded-full" src={userImage}/>
                <span className="self-center text-sm">{name}</span>
              </div>
              <span className="text-lg bg-lime-500 p-2 rounded-xl text-white">{status}</span>
            </div>
            <div className="text-center mt-6">
              <button onClick={toggleModal} className="inline-flex items-center p-2 space-x-2 text-lg btn btn-outline text-violet-400">
                <span>Request</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Request Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-3xl rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white" id="modal-title">
                Request Food
              </h3>
              <form onSubmit={handleRequest}>
                <div className="mt-5 text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Food Name</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{food_name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Food Image</label>
                      <img className="mt-1 rounded-lg" src={image} alt="Food" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Food ID</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{updateMyLocation.id}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Food Donator Email</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Food Donator Name</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Email</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{updateMyLocation.user_email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Request Date</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{new Date().toLocaleString()}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pickup Location</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{location}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Expire Date</label>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{date}</p>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Additional Notes</label>
                      <textarea
                        //value={additionalNotes}
                        defaultValue={short_description}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        className="w-full mt-1 rounded-md focus:outline-[#84CC16] text-black border p-3"
                        placeholder="Enter additional notes..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="ml-3 px-4 py-2 text-sm font-medium text-lg btn btn-outline text-violet-400">
                    Request
                  </button>
                  <button onClick={toggleModal} className="ml-3 px-4 py-2 text-sm font-medium text-lg btn btn-outline text-violet-400">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodDetails;
