import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Loader from "../../loader/Loader";
import useAdmin from "../../utils/useAdmin";
import useInstructor from "../../utils/useInstructor";
import useSelectedClasses from "../../utils/useSelectedClasses";

const CardClassesPage = ({allClass}) => {
    const [isAdmin]=useAdmin()
    const [isInstructor]=useInstructor()
    const {user}=useContext(AuthContext)
    const [seatZero,setSeatZero]=useState(false)
    
    const {available_seats,image,instructor_name,instructor_email,class_name,price,_id,total_enrolled}=allClass
    useEffect(()=>{
      if(available_seats===0){
        setSeatZero(true)
      }
    },[available_seats])
    const navigate=useNavigate()
    const [,refetch,isLoading]=useSelectedClasses()
    if(isLoading){
        return <Loader></Loader>
    }
    
    const handleSeletedClass=(selectedclasses)=>{
        const {available_seats,image,instructor_name,instructor_email,class_name,price,status,total_enrolled,_id}=selectedclasses;
        const updatedSelectClass={available_seats,image,instructor_name,instructor_email,class_name,price,status,total_enrolled,class_page_id:_id}

if(user){
    axios.post('https://server-spoking-summer.vercel.app/ClassCart',updatedSelectClass)
.then(data=>{
    if(data.data.insertedId){
        refetch()
        // setSelectJustOneTime(true)
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Class Added successfully!',
            showConfirmButton: false,
            timer: 1500
          })
    }
})
}else{
   
    Swal.fire({
      title: 'Are you sure?',
      text: "you have to login first!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Login!'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login')
        
      }
    })
}
    }
    return (
       <>
        <div  className={`card  h-[450px] md:h-[500px]  mx-auto w-[340px] md:w-96 bg-base-100 shadow-xl ${seatZero===true && 'bg-red-300  overflow-hidden'}`}>
                <figure className="w-full h-[400px] md:h-[450px]"><img className="h-full w-full" src={image} alt="LANGUAGE" /></figure>
                <div className={`card-body dark:bg-gray-600 dark:text-white font-mono  ${seatZero===true && ' dark:text-white  dark:bg-red-600 '}`}>
                  <h2 className="card-title">
                    {class_name}
                    
                  </h2>
                 <div className=" flex ">
                 <p className="font-medium tracking-wider text-base">{instructor_name}</p>
                  <span className="badge badge-secondary">instructor</span>
                 </div>
                  <div className="card-actions my-1 justify-between">
                    <div >
                        Avalilable seats : <span className={`badge badge-outline font-semibold ${seatZero===true && ' animate-bounce '}`} >{available_seats}</span>
                        </div> 
                    <div>Price : <span className="badge badge-outline font-semibold">{price}</span>
                    
                    </div>
                  </div>
                  <div className="">Enrolled Student : <span className="badge badge-outline font-semibold">{total_enrolled}</span>
                    
                    </div>
                  <button disabled={isAdmin || isInstructor || seatZero} onClick={()=>handleSeletedClass(allClass)} className="btn border-none mt-3 hover:bg-purple-950 text-white bg-violet-900">Select</button>

                </div>
              </div>
       </>
    );
};

export default CardClassesPage;