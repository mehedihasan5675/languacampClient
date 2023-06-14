import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedClasses from "../../utils/useSelectedClasses";

const UserSelectedTable = ({selectedClass,i}) => {
    const [,refetch,]=useSelectedClasses()
    const handleDeleteBtn=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:7000/deleteUserClass/${id}`)
                .then(data=>{
                    console.log(data.data);
                    if(data.data.deletedCount >0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your Class has been deleted.',
                            'success'
                          )
                    }
                     
                })
            
            }
          })
        
    }
    return (
        <>
             <tr >
                    
                    <th>
                        {i+1}
                    </th>
                        
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={selectedClass.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            
                          </div>
                        </td>
                        <td className="">
                        {selectedClass.class_name}
                        
                        </td>
                        <td className="text-gray-950 tracking-wider">{selectedClass.instructor_name}</td>
                        <td className="text-gray-950 tracking-wider">
                         
                          {selectedClass.instructor_email}
                        </td>
                        <th>
    
                        {selectedClass.available_seats}
                        </th>
                        <th>
                            $ {selectedClass?.price}
                        </th>
                        <th >
                           <button onClick={()=>handleDeleteBtn(selectedClass._id)} className="flex btn btn-xs btn-ghost btn-outline gap-5 items-center justify-center">
                           
                          Delete
                           </button>
                        </th>
                        <th>
                        
                        <div  className="flex gap-8">
                          <Link to={`/dashboard/payment/${selectedClass._id}`}><button  className="btn  btn-outline  bg-green-500 text-white border-none  btn-xs"> Pay</button></Link>
                          </div>
    
                          
    
                          
                        
                        </th>
                      </tr>
        </>
    );
};

export default UserSelectedTable;