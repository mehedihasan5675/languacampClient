
import {
  Navigate,
  createBrowserRouter
} from "react-router-dom";
import ClassesFeedback from "../DashboardPages/AdminPages/ManageClasses/ClassesFeedback";
import ManageClasses from "../DashboardPages/AdminPages/ManageClasses/ManageClasses";
import ManageUsers from "../DashboardPages/AdminPages/ManageUsers/ManageUsers";
import AddClasses from "../DashboardPages/InstructorPage/AddClass/AddClasses";
import InstructorClasses from "../DashboardPages/InstructorPage/InstructorClasses/InstructorClasses";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import ClassesPage from "../pages/ClassesPage/ClassesPage";
import InstructorsPage from "../pages/InstructorsPage/InstructorsPage";
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
          },
          {
            path:'manageClasses',
            element:<ManageClasses></ManageClasses>
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