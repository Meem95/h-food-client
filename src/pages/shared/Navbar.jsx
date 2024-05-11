import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/hf.gif";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from 'react-tooltip'
import userProfile from "../../assets/images/profile.png";
import Swal from "sweetalert2";
const Navbar = () => {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
      localStorage.setItem('theme', theme)
      const localTheme = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme', localTheme)

  },[theme])

  const handleToggle = (e) =>{
      if(e.target.checked){
          setTheme('dark')
      }else{
          setTheme('light')
      }
  }
  console.log(theme)

  const { user, logOut } = useContext(AuthContext);
  const [dropdownLeft, setDropdownLeft] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdownRight, setShowDropdownRight] = useState(false);

  const toggleDropdown = (left) => {
    setShowDropdown(!showDropdown);
    setDropdownLeft(left);
  };

  const handleSignOut = () => {
    logOut()
      .then()
      Swal.fire({
        title: 'Success!',
        text: ' Successfully Logout',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      .catch();
  };


  return (
    <div className="sticky top-0 z-10">
      <div className="navbar max-w-7xl mx-auto">
        <div className=" ">
          <div className="dropdown w-full">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
              onClick={() => toggleDropdown(0)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {showDropdown && (
            <ul
              className="menu menu-sm  dropdown-content z-30 mt-3 p-2 shadow bg-base-100 rounded-box absolute "
              style={{ left: dropdownLeft,width: 150,padding:12 }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Home
              </NavLink>
              
                <NavLink to={'/add-tourist-spot'} 
                className={({ isActive }) =>
                  isActive
                  ? ' font-bold mt-4 '
                    : 'font-bold  mt-4'
                }
              >
           Available Foods
          </NavLink> 
          <NavLink
                to={'/my-list'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Add Food
              </NavLink>
          <NavLink
                to={'/my-list'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Manage My Foods
              </NavLink>
             

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                My Food Request 
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#2f400e] font-bold btn-outline btn-[#2f400e] btn '
                    : 'font-bold text-[#2f400e] mt-4'
                }
              >
                Contact 
              </NavLink>
             
             
            </ul>
          )}
          </div>
          <NavLink to={'/'} className="btn btn-ghost text-xl">
          <a className="">
            <img className="w-28" src={logo} />
          </a>
          </NavLink>
        </div>
        <div className="navbar-center hidden mx-auto lg:flex">
          <ul className="menu menu-horizontal px-1">
          <NavLink to={'/'} className={({ isActive }) =>
                  isActive
                    ? 'text-lime-600 font-bold '
                    : 'font-bold text-[#2f400e] '}>  <li>
              <a>Home</a>
            </li>
            </NavLink>
           <NavLink to={'/all-tourist-spot'} className={({ isActive }) =>
                  isActive
                    ? 'text-lime-600 font-bold '
                    : 'font-bold text-[#2f400e] '}>
           <li>
              <a>Available Foods</a>
            </li>
            </NavLink>
           <NavLink to={'/all-tourist-spot'} className={({ isActive }) =>
                  isActive
                    ? 'text-lime-600 font-bold '
                    : 'font-bold text-[#2f400e] '}>
           <li>
              <a>Add Food</a>
            </li>
            </NavLink>
            
            <NavLink to={'/add-tourist-spot'} className={({ isActive }) =>
                  isActive
                    ? 'text-lime-600 font-bold '
                    : 'font-bold text-[#2f400e] '}>
            <li>
              <a>Manage My Foods</a>
            </li>
            </NavLink>
            
            <NavLink to={'/my-list'} className={({ isActive }) =>
                  isActive
                    ? 'text-lime-600 font-bold '
                    : 'font-bold text-[#2f400e] '}>
            <li>
              <a>My Food Request</a>
            </li>
            </NavLink>
          
            <NavLink to={'/contact'} className={({ isActive }) =>
                  isActive
                    ? 'text-lime-600 font-bold '
                    : 'font-bold text-[#2f400e] '}>
            <li>
              <a>Contact</a>
            </li>
            </NavLink>
            
          </ul>
        </div>
        <div className=" space-x-1">
        <label className="cursor-pointer hidden grid place-items-center">
            <input
              type="checkbox"
              onChange={handleToggle}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        {!user ? (
         <Link to="/login">  <button className="btn btn-outline btn-md text-lime-600 ">
            Login
          </button></Link>
          ) : (
            <div className="dropdown">
          <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
              onClick={() => setShowDropdownRight(!showDropdownRight)}
            
            >
              <div className="w-16 rounded-full my-anchor-element">
                <img src={user.photoURL || userProfile } alt="User Avatar"   
               />
             
              </div>
              
            </label>
            <Tooltip anchorSelect=".my-anchor-element" className='z-30'  content= {user?.displayName || 'User'}>
             
             </Tooltip>
           
            {showDropdownRight && (
              <div className="absolute z-10 -left-[120px] bg-white p-5 border-gray-600 shadow-xl rounded-lg">
                <ul>
                <li className="border-b-2  border-red-200"><NavLink to="/profile" className=" text-[#2f400e] mt-4">
                  {user?.displayName || "User" }
                </NavLink></li>
                <li > <button onClick={handleSignOut} className="btn bg-lime-600  text-white mt-2">
                  Logout
                </button></li>
                
              
               
                </ul>
              </div>
             
            )}
          </div>
        )}
        {!user ?  (
          <Link to="/register">
          <button  className="btn btn-outline btn-md text-lime-600 ">
            Register
          </button>
          </Link>
        ):(
          <p></p>
        )}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
