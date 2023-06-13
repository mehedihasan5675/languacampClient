
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import ManageUsers from "../DashboardPages/AdminPages/ManageUsers/ManageUsers";
import AddClasses from "../DashboardPages/InstructorPage/AddClass/AddClasses";
import InstructorClasses from "../DashboardPages/InstructorPage/InstructorClasses/InstructorClasses";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/homePage/home/Home";
import Login from "../pages/login&register/login/Login";
import Register from "../pages/login&register/register/Register";
  
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
          path:'*',
          element:<Navigate to="error"></Navigate>
        },
        
      ]
    },
    {
      
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'manageUsers',
            element:<ManageUsers></ManageUsers>
          },
          {
            path:'addClasses',
            element:<AddClasses></AddClasses>
          },
          {
            path:'instructorClasses',
            element:<InstructorClasses></InstructorClasses>
          }
        ]
        
    },
    {
      path:'error',
      element:<ErrorPage></ErrorPage>

    }
  ]);