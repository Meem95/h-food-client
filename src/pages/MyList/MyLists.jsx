
import { useContext, useEffect, useState } from "react";
import Mylist from "./Mylist";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import axios from "axios";
import r2 from "../../assets/images/req.json";
import Lottie from "lottie-react";

const MyLists = () => {
   
  const { user } =  useContext(AuthContext) || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  const url = `https://b9a11-food-server.vercel.app/myFood/${user?.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setItem(res.data);
    })
   
  }, [url]);
    
  return (
    
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10 shadow-2xl p-5">
<Helmet>
    <title>  H-food  | My list</title>
  </Helmet>
      <div className="overflow-x-auto">
      <div className="text-center"> <h1 className="text-xl font-bold"> Doanted Food</h1></div>
        <div  className="w-28  max-w-5xl mx-auto mb-8"> <Lottie animationData={r2} /></div>
      {
        !user? <p>no data found</p>
        :
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
              <th>Food Quantity</th>
              <th>Location</th>
              <th>Expired Date</th>
              <th> Status</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {
                item.map((list , index)=> <Mylist
            key={list._id}
            list={list}
            listData={setItem}
            item={item}
            
            index={index + 1}
            ></Mylist>)
        }
           
           
          </tbody>
        </table>
      }
        
      </div>
    </div>
  );
};

export default MyLists;
