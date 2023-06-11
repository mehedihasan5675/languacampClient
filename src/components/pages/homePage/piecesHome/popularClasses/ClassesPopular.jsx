import { useEffect, useState } from "react";
import SectionTitle from "../../../../utils/SectionTitle";
import CardClass from "./CardClass";

const ClassesPopular = () => {
    const [allClass,setAllClass]=useState([])
    useEffect(()=>{
        fetch('./classesData.json')
        .then(res=>res.json())
        .then(data=>{
           setAllClass(data)
        })
    },[])
    return (
        <div className=" bg-gradient-to-b from-[#815ead] to-purple-900">
            <SectionTitle body="Popular Classes"></SectionTitle>
            <div className="grid max-w-7xl mx-auto py-16 gap-10  md:grid-cols-2 xl:grid-cols-3  justify-center">
           
              {
                allClass?.map((cl,i)=><CardClass key={i} allClass={cl}></CardClass>)
              }
            </div>
        </div>
    );
};

export default ClassesPopular;