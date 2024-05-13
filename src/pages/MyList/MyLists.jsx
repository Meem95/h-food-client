
import { useContext, useEffect, useState } from "react";
import Mylist from "./Mylist";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";



const MyLists = () => {
    //const mylists = useLoaderData();
   

  //  const [ MyList,setMyList] =useState(mylists)

    //const { user } = useContext(AuthContext);
    const { user } =  useContext(AuthContext) || {};
  const [item, setItem] = useState([]);
  // console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/myFood/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);
    
  return (
    
    <div className="min-h-screen max-w-7xl mx-auto text-black my-10 shadow-2xl p-5">
<Helmet>
    <title>  H-food  | My list</title>
  </Helmet>
      <div className="overflow-x-auto">
      {
        !user? <p>no data found</p>
        :
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
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
