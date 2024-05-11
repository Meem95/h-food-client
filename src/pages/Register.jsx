import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const displayName = form.get("displayName");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");
    
    console.log(displayName, photoURL, email, password);
    
     // Password validation
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
     if (!passwordRegex.test(password)) {
      Swal.fire({
        title: 'error!',
        text: 'Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
        // alert('Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.');
         return;
     }
     
    //create user
    createUser(email, password)
            .then(result => {
              console.log(result);
              const createdAt = result.user?.metadata?.creationTime;
              const user = { email, createdAt: createdAt };
              fetch('https://b9a10-tour-server.vercel.app/user', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(user)
              })
                  .then(res => res.json())
                  .then(data => {
                      if(data.insertedId){
                          console.log('user added to the database')
                      }
                  })
              updateProfile(result.user,
                 {displayName,photoURL}
                 
              ).then(() => {
                Swal.fire({
                  title: 'Success!',
                  text: 'Registrations Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          
                // navigate after login
                navigate(location?.state ? location.state : '/');
              }).catch((error) => {
                console.log(error)
                
                
              });
                console.log("value",result.user)
               
            })
            .catch(error => {
                console.log(error)
                if (/email-already-in-use/g.test(error)) {
                  Swal.fire({
                    title: 'error!',
                    text: 'Already Have An Account Try To Login With Google!',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                  })
                }
            })
  };

  return (
    <div>
     <Helmet>
        <title> Travel Trek | Registrations</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-[#dfe0e6] text-black mx-auto my-14">
        <h1 className="text-2xl font-bold text-center">Registrations</h1>
        <form onSubmit={handleRegister} noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-black">
              Username
            </label>
            <input
              type="text"
              name="displayName"
              id="username"
              placeholder="Username"
              required
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Username"
              required
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photoURL" className="block text-black">
              photoURL
            </label>
            <input
              type="photoURL"
              name="photoURL"
              id="photoURL"
              placeholder="photoURL"
              required
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-gray-700 bg-white text-black focus:border-violet-400"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 font-semibold">
            Registrations
          </button>
        </form>
       
        
        <p className="text-xs text-center sm:px-6 text-black">
          Already have an account?
          <Link to="/login"> <a
            rel="noopener noreferrer"
            href="#"
            className="underline text-black"
          >
           
           Login
          </a></Link>
         
        </p>
      </div>
    </div>
  );
};

export default Register;
