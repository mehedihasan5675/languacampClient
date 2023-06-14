import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApprovedClasses = () => {
    const [axiosSecure]=useAxiosSecure()
    const {data:approvedClasses,isLoading:isClassesDataLoding,refetch,}=useQuery({
        queryKey:['approved_classes',],
        queryFn:async()=>{
            const res=await axiosSecure('/approvedClasses')
            return res.data
        }
        
    })
    return [approvedClasses,isClassesDataLoding,refetch]
};

export default useApprovedClasses;