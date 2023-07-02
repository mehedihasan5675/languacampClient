import Loader from "../../../../loader/Loader";
import SectionTitle from "../../../../utils/SectionTitle";
import useApprovedClasses from "../../../../utils/useApprovedClasses";
import CardClass from "./CardClass";

const ClassesPopular = () => {
   
    const [approvedClasses,isClassesDataLoding,refetch]=useApprovedClasses()
    if(isClassesDataLoding){
      return <Loader></Loader>
    }
    return (
        <div className=" bg-gradient-to-b from-[#120d17] to-purple-900">
            <SectionTitle body="Popular Classes"></SectionTitle>
            <div className="grid max-w-7xl mx-auto py-16 gap-10  md:grid-cols-2 xl:grid-cols-3  justify-center">
           
              {
                approvedClasses?.slice(0,6).map((cl,i)=><CardClass key={i} allClass={cl}></CardClass>)
              }
            </div>
        </div>
    );
};

export default ClassesPopular;