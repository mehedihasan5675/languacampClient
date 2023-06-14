import DashSecTitle from "../../../utils/DashSecTitle";
import useAllClasses from "../../../utils/useAllClasses";
import ManageClassesTable from "./ManageClassesTable";


const ManageClasses = () => {
    const [allClasses,refetch]=useAllClasses()
   
    return (
        <div>
            <DashSecTitle body="manage classes"></DashSecTitle>


            <div>
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
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email </th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                
              {/* row 1 */}
             {
                allClasses?.map((cls,i)=> <ManageClassesTable key={cls._id} i={i} refetch={refetch} cls={cls}></ManageClassesTable>)
             }
             
            </tbody>
           
          </table>
        </div>
      </div>
            </div>
        </div>
    );
};

export default ManageClasses;