
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import ClassesFeedback from "../DashboardPages/AdminPages/ManageClasses/ClassesFeedback";
import ManageClasses from "../DashboardPages/AdminPages/ManageClasses/ManageClasses";
import ManageUsers from "../DashboardPages/AdminPages/ManageUsers/ManageUsers";
import AddClasses from "../DashboardPages/InstructorPage/AddClass/AddClasses";
import InstructorClasses from "../DashboardPages/InstructorPage/InstructorClasses/InstructorClasses";
import EnrolledClass from "../DashboardPages/UserDashboard/EnrolledClasses/EnrolledClass";
import PaymentHistory from "../DashboardPages/UserDashboard/PaymentHistory/PaymentHistory";
import PaymentUser from "../DashboardPages/UserDashboard/PaymentUser/PaymentUser";
import UserSelectedClasses from "../DashboardPages/UserDashboard/UserSelectedClasses";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/homePage/home/Home";
import Login from "../pages/login&register/login/Login";
import Register from "../pages/login&register/register/Register";
import AdminRoute from "./adminRoute/AdminRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";
  
 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'instructors',
          element:<InstructorsPage></InstructorsPage>
        },
        {
          path:'classes',
          element:<ClassesPage></ClassesPage>
        },
        
        
        {
          path:'*',
          element:<Navigate to="error"></Navigate>
        },
        
      ]
    },
    {
      
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
          {
            path:'manageUsers',
            element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
          {
            path:'mySelectedClass',
            element:<UserSelectedClasses></UserSelectedClasses>
          },
        {
          path:'enrolled',
          element:<EnrolledClass></EnrolledClass>
        },
          {
            path:'addClasses',
            element:<AddClasses></AddClasses>
          },
          {
            path:'payment/:id',
            element:<PaymentUser></PaymentUser>
          },
          {
            path:'paymentHistory',
            element:<PaymentHistory></PaymentHistory>
          },
          {
            path:'instructorClasses',
            element:<InstructorClasses></InstructorClasses>
          },
          {
            path:'manageClasses',
            element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path:'feedback/:id',
            element:<ClassesFeedback></ClassesFeedback>
          }
        ]
        
    },
    {
      path:'error',
      element:<ErrorPage></ErrorPage>

    }
  ]);