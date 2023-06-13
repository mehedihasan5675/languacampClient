import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const {data:classes=[],refetch,isClassesLoading,}=useQuery({
        queryKey:['classes',user?.email],
        enabled:!loading,
        queryFn:async()=>{
           const res=await axiosSecure.get(`/classes/${user?.email}`) 
           return res.data
        }
    })
    return [classes,refetch,isClassesLoading]
};

export default useClasses;