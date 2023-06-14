import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location=useLocation()
  if (loading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children
  }
  return <Navigate to="/login" state={{from:location}} replace={true}></Navigate>;
};

export default PrivateRoute;
