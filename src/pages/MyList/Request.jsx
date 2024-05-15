
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import MyRequestlist from "./MyRequestlist";
import r2 from "../../assets/images/req.json";
import Lottie from "lottie-react";

const Request = () => {
    const { user } =  useContext(AuthContext) || {};
  const [item, setItem] = useState([]);
  console.log("requested user",user);
  const url = `https://b9a11-food-server.vercel.app/myReqFood/${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setItem(res.data);
    })
   
  }, [url]);
    
  return (
    
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10 shadow-2xl p-5">
<Helmet>
    <title>  H-food  | My Request list</title>
  </Helmet>
      <div className="overflow-x-auto">
        <div className="text-center"> <h1 className="text-xl font-bold">Requested Food</h1></div>
        <div  className="w-28  max-w-5xl mx-auto mb-8"> <Lottie animationData={r2} /></div>
        

      {
        !user? <p>no data found</p>
        :
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Donar Name</th>
              <th>Pickup Location</th>
              <th>Expired Date</th>
              <th> Request Date </th>
            </tr>
          </thead>
          <tbody>
            {
            item.map((list , index)=> <MyRequestlist
            key={list._id}
            list={list}
            listData={setItem}
            item={item}
            
            index={index + 1}
            ></MyRequestlist>)
        }
           
           
          </tbody>
        </table>
      }
        
      </div>
    </div>
  );
};
export default Request;