import { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ActiveLink from "../../activelink/ActiveLink";
import Loader from "../../loader/Loader";
import useAdmin from "../../utils/useAdmin";
import useInstructor from "../../utils/useInstructor";
import useSelectedClasses from "../../utils/useSelectedClasses";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
  const [isAdmin]=useAdmin()
  const [isInstructor]=useInstructor()
  const navigate=useNavigate()
  const [selectedClass,refetch,isLoading]=useSelectedClasses()

  const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme") :"light")
  const handleThemeToggle=(e)=>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
    }

    useEffect(()=>{
      localStorage.setItem('theme',theme)
      const localTheme=localStorage.getItem('theme')
      if(localTheme==='dark'){
        document.documentElement.classList.add('dark')
      }else{
        document.documentElement.classList.remove('dark')
      }
      
      document.querySelector('html').setAttribute("data-theme",localTheme)
    },[theme])
  if(isLoading){
    return <Loader></Loader>
  }
  // console.log(selectedClass.length);
 
  const handleSingOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch(() => {});
  };
 

  
  const navMenu = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      {
        user && <li>
        
          {
            isAdmin ? <>
            <ActiveLink to="/dashboard/manageClasses">Dashboard</ActiveLink>
            </>:isInstructor ? <>
            
            <ActiveLink to="/dashboard/addClasses">Dashboard</ActiveLink></>:<>
            
            <ActiveLink to="/dashboard/mySelectedClass">Dashboard</ActiveLink></>
          }
      </li>
      }
      
     
      <li>
      {user && (
            <>
              <button className="btn mt-3 md:mt-0 items-center bg-purple-900  hover:bg-purple-700  border-none shadow-md btn-sm lg:btn-md flex gap-2 mr-2">
                <FaShoppingCart className="text-white"></FaShoppingCart>
                <div className="badge badge-secondary">+{selectedClass.length}</div>
              </button>
            </>
          )}
          
      </li>
    </>
  );
  return (
    <div className="">
      <div  className="navbar   pb-5 md:px-10 bg-gradient-to-r from-[#815ead] to-purple-900">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-white w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu bg-white menu-sm dropdown-content mt-3 p-2 shadow   text-black rounded-box w-52 z-30 font-semibold text-base"
            >
              {navMenu}
            </ul>
          </div>
          <Link className="     normal-case text-sm sm:text-xl">
            <div className="border-2 font-semibold  rounded-full px-5 py-3 shadow-md shadow-violet-900 ">
            <p className="uppercase italic text-white  tracking-widest">Lingua<span className="text-yellow-100">Camp</span> </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold text-base tracking-wider  menu-horizontal text-white  px-1">
            {navMenu}
          </ul>
        </div>
        <div className="navbar-end">
        <div className="flex items-center justify-center  fixed  bottom-2 left-2  mx-5">
              <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onChange={handleThemeToggle} type="checkbox" />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 bg-white  p-2 rounded-full text-yellow-500 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off bg-gray-950 rounded-full p-2 fill-current w-10 justify-center text-white items-center flex h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
              </div>
        {user ? (
            <div className="flex items-center gap-3">
             
              <button
                onClick={handleSingOut}
                className="btn bg-purple-800 md:btn-sm btn-xs text-white hover:text-black border-none "
              >
                Sign Out
              </button>
              <img
                className="md:w-12 w-10 cursor-pointer mr-3 h-10 md:h-12 rounded-full"
                src={user.photoURL}
                alt="" title={user.displayName}
              />
            </div>
          ):<Link to="/login">
          <button
          
          className="btn bg-purple-800 md:btn-sm btn-xs mr-5 text-white hover:text-black border-none "
        >
          Login
        </button></Link>}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
