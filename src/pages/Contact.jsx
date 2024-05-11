import  { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import '../App.css';
import { Helmet } from "react-helmet";

const Contact = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation([latitude, longitude]);
    });
  }, []); 

  return (
    <div className="min-h-screen  mx-auto mt-16">
    <Helmet>
   <title> Travel Trek | Contact Us</title>
   </Helmet>
      <div className="px-8 py-2  ">
        <div className="py-2 font-bold text-center text-4xl animate__animated animate__bounce">
          <span>Contact Us</span>
        </div>
      </div>
      <div>
      <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 max-w-4xl mx-auto mt-5 p-6">
            <label className="block  text-lg">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Name"
                className="block w-full rounded-md border h-10 shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
              />
            </label>
            <label className="block  text-lg">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="Email"
                className="block w-full h-10 border rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400"
              />
            </label>
            <label className="block  text-lg">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md border focus:ring focus:ring-opacity-75 focus:ring-violet-400 "
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center w-full px-8 py-3 text-lg rounded  btn  bg-[#ff8900] text-white "
            >
              Submit
            </button>
          </form>
      </div>
      <section className="py-6 text-black mt-12  text-center w-full">
        <div className="  grid-cols-1 px-6 lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation with us
            </p>
            <div className="space-y-4 ">
              <div className="">
                <MapContainer
                  center={userLocation || [51.505, -0.09]} // Use user's location if available, else use default center
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={userLocation || [51.505, -0.09]}>
                    <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
                  </Marker>
                </MapContainer>
              </div>
              <p className="flex items-center justify-center text-lg font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+1 3029835847</span>
              </p>
              <p className="flex items-center justify-center text-lg font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>traveltrek@gmail.com</span>
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;
