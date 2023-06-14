import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../utils/SectionTitle";
import useAxiosSecure from "../../utils/useAxiosSecure";
import CardInstructorsPage from "./CardInstructorsPage";

const InstructorsPage = () => {
    const [axiosSecure]=useAxiosSecure()
    const {data:approvedInstructor,refetch}=useQuery({
        queryKey:['approved_instructor',],
        queryFn:async()=>{
            const res=await axiosSecure('/approvedInstructor')
            return res.data
        }
        
    })
    return (
        <div className=" bg-gradient-to-b from-[#815ead] to-purple-900">
            <SectionTitle body="All instructors"></SectionTitle>

            <div className="grid max-w-7xl mx-auto py-20 gap-10  md:grid-cols-2 xl:grid-cols-3  justify-center">
                {
                    approvedInstructor?.map(ai=><CardInstructorsPage key={ai._id} Instructors={ai}></CardInstructorsPage>)
                }
            </div>
        </div>
    );
};

export default InstructorsPage;