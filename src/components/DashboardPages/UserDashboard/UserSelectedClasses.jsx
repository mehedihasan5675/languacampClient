import Loader from "../../loader/Loader";
import DashSecTitle from "../../utils/DashSecTitle";
import useSelectedClasses from "../../utils/useSelectedClasses";
import UserSelectedTable from "./UserSelectedTable";

const UserSelectedClasses = () => {
    const [selectedClass,refetch,isLoading]=useSelectedClasses()
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div>
            <DashSecTitle body="My Selected Classes"></DashSecTitle>
            <div>
            <div className="overflow-x-auto w-full px-5">
                <p className="text-white text-xl font-mono ">Total Classes: <span className="font-mono text-2xl font-bold tracking-wider">{selectedClass.length}</span></p>
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
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Action</th>
                <th>Payment</th>
                
              </tr>
            </thead>
            <tbody>
                
            {
                selectedClass?.map((cls,i)=><UserSelectedTable key={cls._id} i={i} selectedClass={cls}></UserSelectedTable>)
            }
             
            </tbody>
           
          </table>
        </div>
            </div>
        </div>
    );
};

export default UserSelectedClasses;