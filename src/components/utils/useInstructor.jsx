import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
   const {user,loading}=useContext(AuthContext)
   const [axiosSecure]=useAxiosSecure()
   const {data:isInstructor,isLoading:isInstructorLoading,refetch}=useQuery({
    queryKey:['isInstructor',user?.email],
    enabled:!loading,
    queryFn:async()=>{
        const res=await axiosSecure(`/user/instructor/${user?.email}`)
        console.log(res.data,'useInstructor');
        return res.data.instructor
        
    }
   })
   return [isInstructor,isInstructorLoading,refetch]
   
};

export default useInstructor;