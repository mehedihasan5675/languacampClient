import axios from "axios";
import { useContext } from "react";
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
    
    const {available_seats,image,instructor_name,instructor_email,class_name,price,_id}=allClass
    const navigate=useNavigate()
    const [,refetch,isLoading]=useSelectedClasses()
    if(isLoading){
        return <Loader></Loader>
    }
    
    const handleSeletedClass=(selectedclasses)=>{
        const {available_seats,image,instructor_name,instructor_email,class_name,price,status,total_enrolled}=selectedclasses;
        const updatedSelectClass={available_seats,image,instructor_name,instructor_email,class_name,price,status,total_enrolled}

if(user){
    axios.post('http://localhost:7000/ClassCart',updatedSelectClass)
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
    navigate('/')
}
    }
    return (
       <>
        <div  className="card h-[450px] md:h-[500px]  mx-auto w-[340px] md:w-96 bg-base-100 shadow-xl">
                <figure className="w-full h-[400px] md:h-[450px]"><img className="h-full w-full" src={image} alt="LANGUAGE" /></figure>
                <div className="card-body font-mono">
                  <h2 className="card-title">
                    {class_name}
                    
                  </h2>
                 <div className=" flex ">
                 <p className="font-medium tracking-wider text-base">{instructor_name}</p>
                  <span className="badge badge-secondary">instructor</span>
                 </div>
                  <div className="card-actions justify-between">
                    <div >
                        Avalilable seats : <span className="badge badge-outline font-semibold">{available_seats}</span>
                        </div> 
                    <div >Price : <span className="badge badge-outline font-semibold">{price}</span>
                    
                    </div>
                  </div>
                  <button disabled={isAdmin || isInstructor} onClick={()=>handleSeletedClass(allClass)} className="btn  mt-3 hover:bg-purple-950 text-white bg-violet-900">Select</button>

                </div>
              </div>
       </>
    );
};

export default CardClassesPage;