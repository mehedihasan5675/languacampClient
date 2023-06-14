import { useQuery } from "@tanstack/react-query";
import Loader from "../../loader/Loader";
import SectionTitle from "../../utils/SectionTitle";
import useAxiosSecure from "../../utils/useAxiosSecure";
import CardClassesPage from "./CardClassesPage";

const ClassesPage = () => {
    const [axiosSecure]=useAxiosSecure()
    const {data:approvedClasses,isLoading:isClassesDataLoding,refetch,}=useQuery({
        queryKey:['approved_classes',],
        queryFn:async()=>{
            const res=await axiosSecure('/approvedClasses')
            return res.data
        }
        
    })
    if(isClassesDataLoding){
        return <Loader></Loader>
    }
    return (
        <div className=" bg-gradient-to-b from-[#815ead] to-purple-900">
            <SectionTitle body="All approved classes"></SectionTitle>

            <div className="grid max-w-7xl mx-auto py-20 gap-10  md:grid-cols-2 xl:grid-cols-3  justify-center">
                {
                    approvedClasses?.map(cls=><CardClassesPage key={cls._id} allClass={cls}></CardClassesPage>)
                }
            </div>
        </div>
    );
};

export default ClassesPage;