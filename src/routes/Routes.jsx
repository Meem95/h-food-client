import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Root from "../layouts/Root";
// import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
 import AddFood from "../pages/Food/AddFood";
import PrivateRoute from "./PrivateRoute";
import AllAvailableFood from "../pages/AllAvailableFood";
import FoodDetails from "../pages/Food/FoodDetails";
import MyLists from "../pages/MyList/MyLists";
import UpdateFood from "../pages/UpdateFood";
 import NotFoundPage from "../pages/NotFoundPage";
import Request from "../pages/MyList/Request";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
         errorElement: <NotFoundPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
              loader: async () => {
                const [locationData, otherData] = await Promise.all([
                    fetch('https://b9a11-food-server.vercel.app/food').then(res => res.json())
                ]);
                return { locationData, otherData };
            }
               
            },
            
            {
                path: '/add-food',
                element:<PrivateRoute> <AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/food-details/:id',
                element:<PrivateRoute> <FoodDetails></FoodDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://b9a11-food-server.vercel.app/food/${params.id}`)
            },
            
            {
                path: '/my-list/',
                element:<PrivateRoute> <MyLists></MyLists></PrivateRoute>,
                loader:()=>fetch('https://b9a11-food-server.vercel.app/food')

            },
            
            {
                path: '/my-request-list/',
                element:<PrivateRoute> <Request></Request></PrivateRoute>,
                loader:()=>fetch('https://b9a11-food-server.vercel.app/food')

            },
            {
                path: 'update-my-list/:id', 
                element:<PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>, 
                loader: ({params}) => fetch(`https://b9a11-food-server.vercel.app/food/${params.id}`)
              },
            
            {
                path: '/available-food',
                element: <AllAvailableFood></AllAvailableFood>,
                loader:()=>fetch('https://b9a11-food-server.vercel.app/food')
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
          
        ]
    }   

]) 
export default router;