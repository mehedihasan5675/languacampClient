import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useSelectedClasses = () => {
const [axiosSecure]=useAxiosSecure()

    const {data:selectedClass,refetch,isLoading}=useQuery({
        queryKey:['selectedClass'],
        queryFn:async()=>{
            const res=await axiosSecure('/selectedClasses')
            return res.data
        }
    })
    return [selectedClass,refetch,isLoading]
};

export default useSelectedClasses;