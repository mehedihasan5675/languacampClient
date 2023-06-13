import { FaEdit } from "react-icons/fa";
import DashSecTitle from "../../../utils/DashSecTitle";
import useClasses from "../../../utils/useClasses";

const InstructorClasses = () => {
    const [classes]=useClasses()
    console.log(classes);
    return (
        <div>
            <DashSecTitle body="Your all classes"></DashSecTitle>

            <div>
        <div className="overflow-x-auto w-full px-5">
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
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Total Enrolled </th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
             {
                classes?.map((cls,i)=> <tr key={cls._id}>
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
                    <th >
                     
                        {cls.total_enrolled}
                      
                    </th>
                    <th>

                    <div className={`${cls.status==='pending'? 'text-yellow-300':cls.status==='approved'?'text-green-400':'text-red-500'} tracking-widest`}>
                     {cls.status}
                      </div>
                    </th>
                    <th>
                        {cls?.feedback}
                    </th>
                    <th>
                      <div  className="flex gap-8">
                      <button className="btn  bg-[#a9907e] hover:bg-[#a9907eab] border-none btn-sm"><FaEdit></FaEdit> Update</button>
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

export default InstructorClasses;