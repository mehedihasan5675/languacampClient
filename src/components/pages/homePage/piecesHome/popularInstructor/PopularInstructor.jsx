import { useEffect, useState } from "react";
import SectionTitle from "../../../../utils/SectionTitle";
import CardPopularInstructor from "./CardPopularInstructor";

const PopularInstructor = () => {
    const [allPopularInstructor,setAllPopularInstructor]=useState([])
    useEffect(()=>{
        fetch('./instructorData.json')
        .then(res=>res.json())
        .then(data=>{
            setAllPopularInstructor(data)
        })
    },[])

    
  return (
    <div className="bg-gradient-to-t from-[#815ead] to-purple-900">
      <div>
        <SectionTitle body="Popular Instructors"></SectionTitle>
      </div>
      <div className="grid max-w-7xl mx-auto py-20 gap-10  md:grid-cols-2 xl:grid-cols-3  justify-center">
    {
        allPopularInstructor.map((dt,i)=><CardPopularInstructor key={i} popularInstructor={dt}></CardPopularInstructor>)
    }

      </div>
    </div>
  );
};

export default PopularInstructor;
