import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Root from "../layouts/Root";
// import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTouristSpot from "../pages/TouristSpot/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";
import AllTouristSpots from "../pages/AllTouristSpots";
import TouristSpotDetails from "../pages/TouristSpot/TouristSpotDetails";
import MyLists from "../pages/MyList/MyLists";
import UpdateTouristSpot from "../pages/UpdateTouristSpot";
import NotFoundPage from "../pages/NotFoundPage";
import CountryAll from "../pages/CountryAll";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
              //  loader:()=>fetch('http://localhost:5000/location'),
              loader: async () => {
                const [locationData, otherData] = await Promise.all([
                    fetch('https://b9a10-tour-server.vercel.app/location').then(res => res.json()),
                    fetch('https://b9a10-tour-server.vercel.app/country').then(res => res.json())
                ]);
                return { locationData, otherData };
            }
               
            },
            
            {
                path: '/add-tourist-spot',
                element:<PrivateRoute> <AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/tourist-spot-details/:id',
                element:<PrivateRoute> <TouristSpotDetails></TouristSpotDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://b9a10-tour-server.vercel.app/location/${params.id}`)
            },
            
            {
                path: '/my-list/',
                element:<PrivateRoute> <MyLists></MyLists></PrivateRoute>,
                loader:()=>fetch('https://b9a10-tour-server.vercel.app/location')

            },
            {
                path: 'update-my-list/:id', 
                element:<PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>, 
                loader: ({params}) => fetch(`https://b9a10-tour-server.vercel.app/location/${params.id}`)
              },
            
            {
                path: '/all-tourist-spot',
                element: <AllTouristSpots></AllTouristSpots>,
                loader:()=>fetch('https://b9a10-tour-server.vercel.app/location')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
           
            {
             path: '/country-name/:id',
              element: <CountryAll></CountryAll>,
              loader:({params}) => 
              fetch(`https://b9a10-tour-server.vercel.app/location-by-country?country=${encodeURIComponent(params.id)}`)
            }
        ]
    }   

]) 
export default router;