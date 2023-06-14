// import { FaShoppingCart, FaWallet } from 'react-icons/fa';
import { FaArrowRight, FaCalendar, FaHome, FaPhotoVideo, FaUserGraduate, FaUsers, FaWallet } from "react-icons/fa";
import { Outlet, useNavigation } from "react-router-dom";
import ActiveLink from "../activelink/ActiveLink";
import Loader from "../loader/Loader";
import useAdmin from "../utils/useAdmin";
import useInstructor from "../utils/useInstructor";
const Dashboard = () => {
    const navigation=useNavigation()
    const [isAdmin,isAdminLoading]=useAdmin()
    const [isInstructor,isInstructorLoading]=useInstructor()
    console.log(isInstructor,isAdmin);
   if(isAdminLoading && isInstructorLoading){
    return <Loader></Loader>
   }
    // const isAdmin=true
    // const isInstructor=false
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col w-full bg-[#a9907eab] h-screen">
        <div>{navigation.state === 'loading' && <Loader></Loader>}</div>
         
          <Outlet></Outlet>
         
          <label
            htmlFor="my-drawer-2"
            className="btn top-1/2 -left-1 fixed bg-[#A9907E] bg-opacity-60   border-none drawer-button lg:hidden"
          >
            <FaArrowRight></FaArrowRight>
          </label>
        </div>
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-[#A9907E]   uppercase text-white font-semibold tracking-wider">
            {/* Sidebar content here */}
            {
              isAdmin ? <>
              <li>
                <p className="bg-[#A9907E] px-3 py-2 rounded-2xl shadow-md text-yellow-200 mb-5">Admin Dashboard</p>
              <ActiveLink to="/dashboard/manageClasses"><FaCalendar className="text-yellow-400"></FaCalendar> Manage Classes</ActiveLink> 
              <ActiveLink to="/dashboard/manageUsers"><FaUsers className="text-yellow-400"></FaUsers> Manage Users</ActiveLink> 
              
            </li>
            
              </>:
              isInstructor ? <>
              <li>
                <p className="bg-[#A9907E] px-3 py-2 rounded-2xl shadow-md text-yellow-200 mb-5">Instructor Dashboard</p>
              <ActiveLink to="/dashboard/addClasses"><FaHome className="text-yellow-400"></FaHome> Add a Class</ActiveLink> 
              <ActiveLink to="/dashboard/instructorClasses"><FaCalendar className="text-yellow-400"></FaCalendar> My Classes</ActiveLink>
              
            </li>
            
              </>:<>
              <li>
                <p className="bg-[#A9907E] px-3 py-2 rounded-2xl shadow-md text-yellow-200 mb-5">Student Dashboard</p>
              <ActiveLink to="/dashboard/mySelectedClass"><FaHome className="text-yellow-400"></FaHome> My Selected Classes</ActiveLink>
               <ActiveLink to="/"><FaHome className="text-yellow-400"></FaHome>My Enrolled Classes</ActiveLink> 
              
              <ActiveLink to="/"><FaWallet className="text-yellow-400"></FaWallet> Payment </ActiveLink>
            </li>
            
              </>
             
              
            }
            <div className="divider h-1 my-5 bg-gray-600 rounded-full"></div>

            <li ><ActiveLink to="/"><FaHome className="text-yellow-400 "></FaHome>  Home</ActiveLink></li>

            <li ><ActiveLink to="/classes"><FaPhotoVideo className="text-yellow-400"></FaPhotoVideo>All Classes</ActiveLink></li>

            <li ><ActiveLink to="/instructors"><FaUserGraduate className="text-yellow-400"></FaUserGraduate>All  Instructors</ActiveLink></li>



          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;



