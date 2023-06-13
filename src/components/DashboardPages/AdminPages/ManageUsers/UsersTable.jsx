import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { FaTrashAlt, FaUserGraduate, FaUserShield } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../utils/useAxiosSecure";

const UsersTable = () => {
  const [axiosSecure]=useAxiosSecure()
  const {loading}=useContext(AuthContext)

  const { data: users = [], refetch } =useQuery({
   queryKey: ["users"],enabled:!loading,queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
     
      return res.data;
    }
  });
  console.log(users);
const handleAdminBtn=(user)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: `for creating an new admin to - ${user.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Do Admin!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:7000/users/admin/${user._id}`,
    {
        method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
        console.log(data);
    })
        
        }
      })

    
}

const handleInstructorBtn=(user)=>{
  Swal.fire({
      title: 'Are you sure?',
      text: `for creating an new Instructor to - ${user.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do Instructor!'
    }).then((result) => {
      if (result.isConfirmed) {
          fetch(`http://localhost:7000/users/instructor/${user._id}`,
  {
      method:"PATCH"
  })
  .then(res=>res.json())
  .then(data=>{
      if(data.modifiedCount){
          refetch()
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Instructor now!`,
              showConfirmButton: false,
              timer: 1500
            })
      }
      console.log(data);
  })
      
      }
    })

  
}
  return (
    <div >
      <h3 className="text-white font-mono text-lg font-semibold">All users: <span className="text-yellow-200 font-bold text-2xl">{users?.length}</span></h3>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
              <th>
                    Index
                </th>
                <th>
                  Image
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                users?.map((user,i)=> <tr key={user._id}>
                <th>
                    {i+1}
                </th>
                    
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user?.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        
                      </div>
                    </td>
                    <td>
                    <div>
                          <div className="font-bold">{user.name}</div>
                          
                        </div>
                    </td>
                    <td className="text-gray-950 tracking-wider">{user.email}</td>
                    <th className="flex items-center justify-center">
                      <div className="w-1/2">
                      {
                        user?.role ==='admin' ? <p className=" flex w-[63%] items-center btn btn-sm justify-center      italic">Admin</p>:<><button onClick={()=>handleAdminBtn(user)} className="btn  btn-ghost btn-outline text-xs  btn-sm"><FaUserShield className="w-5 h-5"></FaUserShield>Make Admin</button></>
                      }
                      </div>

                      <div className="w-1/2">
                      {
                        user?.role ==='instructor' ? <div className="w-full   flex items-center btn btn-sm justify-center      italic">Instructor</div>:<><button onClick={()=>handleInstructorBtn(user)} className="btn  btn-ghost btn-outline ml-3 text-xs  btn-sm"><FaUserGraduate className="w-5 h-5"></FaUserGraduate>Make Instructor</button></>
                      }
                      </div>
                    </th>
                    <th>
                      <div  className="flex gap-8">
                      <button className="btn  bg-[#a9907e] hover:bg-[#a9907eab] border-none btn-sm"><FaTrashAlt className="text-rose-400 "></FaTrashAlt></button>
                      </div>
                    </th>
                  </tr>)
             }
             
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;