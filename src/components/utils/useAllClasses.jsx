import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useAllClasses = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const {data:allClasses=[],refetch,isAllClassesLoading,}=useQuery({
        queryKey:['allclasses',user?.email],
        enabled:!loading,
        queryFn:async()=>{
           const res=await axiosSecure.get(`/allClasses`) 
           return res.data
        }
    })
    return [allClasses,refetch,isAllClassesLoading]
};

export default useAllClasses;