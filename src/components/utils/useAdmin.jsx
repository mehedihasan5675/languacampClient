import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
   const {user,loading}=useContext(AuthContext)
   const [axiosSecure]=useAxiosSecure()
   const {data:isAdmin,isLoading:isAdminLoading,refetch}=useQuery({
    queryKey:['isAdmin',user?.email],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure(`/user/admin/${user?.email}`)
console.log(res.data,'useAdmin')

        return res.data.admin

    }
 

   })
   return [isAdmin,isAdminLoading,refetch]
};

export default useAdmin;