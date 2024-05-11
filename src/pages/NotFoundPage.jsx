import { Link, useRouteError } from "react-router-dom";
import notFound  from "../assets/images/404.gif";

const NotFoundPage = () => {
    const err = useRouteError()
    console.log(err)
    return (
        <div>
             <div className="grid px-4 pt-20 place-content-center dark:bg-gray-900">
        <div className="text-center">
         <img src={notFound}></img>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Uh-oh!
          </h1>
    
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            {err?.data}
          </p>

          <p className="my-4 text-gray-500 dark:text-gray-400">
            We cant find that page.
          </p>
          <Link to="/"><button className="btn btn-success mb-7 text-white">Back Home</button></Link>
          
        </div>
      </div>
        </div>
    );
};

export default NotFoundPage;