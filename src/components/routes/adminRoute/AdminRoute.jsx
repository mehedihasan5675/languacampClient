
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAdmin from "../../utils/useAdmin";

const AdminRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location=useLocation()
  const [isAdmin,isAdminLoading]=useAdmin()
  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center ">
        <span className="loading loading-bars loading-lg text-white text-center"></span>
      </div>
    );
  }
  if (user && isAdmin) {
    return children
  }
  return <Navigate to="/" state={{from:location}} replace={true}></Navigate>;
};

export default AdminRoute;
