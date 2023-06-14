import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const ManageClassesTable = ({cls,i,refetch}) => {
    const navigate=useNavigate()
    const isApprovedOrDenied=cls?.status === 'approved'|| cls?.status==='denied'
    console.log(isApprovedOrDenied,'is');
    const handleApproveBtn=(cls)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `to approved - ${cls?.class_name} class`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approved!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:7000/class/approve/${cls._id}`,
        {
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${cls.class_name} approved already!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data);
        })
            
            }
          })
    }

    const handleDenyBtn=(cls)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: `to Deny - ${cls?.class_name} class`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Deny!'
          }).then((result) => {
            if (result.isConfirmed) {

                
                fetch(`http://localhost:7000/class/deny/${cls._id}`,
        {
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${cls.class_name} Denied already!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data);
        })
          
            }
          })
    }

//     const handleDenyBtn=(cls)=>{
//         Swal.fire({
//             title: 'Are you sure?',
//             text: `to Deny - ${cls?.class_name} class`,
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, Deny!'
//           }).then((result) => {
//             if (result.isConfirmed) {
// navigate(`/dashboard/feedback/${cls._id}`)
              
                
// fetch(`http://localhost:7000/class/deny/${cls._id}`,
// {
//     method:"PATCH"
// })
// .then(res=>res.json())
// .then(data=>{
//     console.log(data);
//     if(data.modifiedCount){
//         refetch()
//         Swal.fire({
//             position: 'top-end',
//             icon: 'success',
//             title: `${cls.class_name} Denied already!`,
//             showConfirmButton: false,
//             timer: 1500
//           })
//     }
//     console.log(data);
// })  
        
          
//             }
//           })
//     }
    return (
        <tr >
                    
                <th>
                    {i+1}
                </th>
                    
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={cls.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td className="">
                    {cls.class_name}
                    
                    </td>
                    <td className="text-gray-950 tracking-wider">{cls.instructor_name}</td>
                    <td className="text-gray-950 tracking-wider">
                     
                      {cls.instructor_email}
                    </td>
                    <th>

                    {cls.available_seats}
                    </th>
                    <th>
                        {cls?.price}
                    </th>
                    <th >
                       <div className="flex  gap-5 items-center justify-center">
                       <div>
                           <p className={`${cls.status==='pending'? 'text-yellow-200':cls.status==='approved'?'text-green-700':'text-rose-700'} tracking-widest`}> {cls?.status}</p>
                        </div>
                      
                       </div>
                    </th>
                    <th>
                    <div className="flex gap-5">
                    <div  className="flex gap-8">
                      <button disabled={isApprovedOrDenied} onClick={()=>handleApproveBtn(cls) }className="btn  btn-outline  btn-ghost  btn-xs"> Approve</button>
                      </div>

                      <div  className="flex gap-8">
                      <button disabled={isApprovedOrDenied} onClick={()=>handleDenyBtn(cls) } className="btn btn-outline btn-ghost  btn-xs"> Deny</button>
                      </div>

                      
                    </div>
                    </th>
                  </tr>
    );
};

export default ManageClassesTable;