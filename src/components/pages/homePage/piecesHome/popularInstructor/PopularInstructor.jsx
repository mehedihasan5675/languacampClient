import Loader from "../../../../loader/Loader";
import SectionTitle from "../../../../utils/SectionTitle";
import useApprovedClasses from "../../../../utils/useApprovedClasses";
import CardPopularInstructor from "./CardPopularInstructor";

const PopularInstructor = () => {
  const [approvedClasses,isClassesDataLoding,refetch]=useApprovedClasses()
  if(isClassesDataLoding){
    return <Loader></Loader>
  }
    
  return (
    <div className="bg-gradient-to-t from-[#815ead] to-purple-900">
      <div>
        <SectionTitle body="Popular Instructors"></SectionTitle>
      </div>
      <div className="grid max-w-7xl mx-auto py-20 gap-10  md:grid-cols-2 xl:grid-cols-3  justify-center">
    {
        approvedClasses?.slice(0,6).map((dt,i)=><CardPopularInstructor key={i} popularInstructor={dt}></CardPopularInstructor>)
    }

      </div>
    </div>
  );
};

export default PopularInstructor;
