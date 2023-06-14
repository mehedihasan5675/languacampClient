import { useQuery } from "@tanstack/react-query";
import moment from "moment/moment";
import Loader from "../../../loader/Loader";
import DashSecTitle from "../../../utils/DashSecTitle";
import useAxiosSecure from "../../../utils/useAxiosSecure";

const PaymentHistory = () => {
    const [axiosSecure]=useAxiosSecure()
    const {data:paymentClasses,isLoading:isPaymentDataLoding,refetch,}=useQuery({
        queryKey:['payment_classes',],
        queryFn:async()=>{
            const res=await axiosSecure('/paymentClasses')
            return res.data
        }
        
    })
    if(isPaymentDataLoding){
        return <Loader></Loader>
    }
   
    return (
        <>
        <DashSecTitle body="payment history"></DashSecTitle>
            <div className="overflow-x-auto">
  <table className="table ">
    {/* head */}
    <thead>
      <tr className="">
        <th></th>
        <th>Class Name</th>
        <th>Instructor Email</th>
        <th>Price</th>
        <th>Transaction ID</th>
        <th >Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        paymentClasses?.map((cls,i)=><tr key={cls._id}>
            <th>{i+1}</th>
            <td className="font-mono font-semibold">{cls.class_name}</td>
            <td className="font-mono tracking-wider">{cls.instructor_email}</td>
            <td>$ {cls.price}</td>
            <td className="font-mono tracking-wide">{cls.transaction_id}</td>
            <td className="font-mono tracking-wider">{moment(cls.date).format("MMM Do YY")} </td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </>
    );
};

export default PaymentHistory;