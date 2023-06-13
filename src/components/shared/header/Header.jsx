import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ActiveLink from "../../activelink/ActiveLink";
import useAdmin from "../../utils/useAdmin";
import useInstructor from "../../utils/useInstructor";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin]=useAdmin()
  const [isInstructor]=useInstructor()
  const navigate = useNavigate();
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
                <div className="badge badge-secondary">+ {}</div>
              </button>
            </>
          )}
          
      </li>
    </>
  );
  return (
    <div className=" ">
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
