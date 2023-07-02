import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import Loader from "../../../loader/Loader";
import DashSecTitle from "../../../utils/DashSecTitle";
import useSelectedClasses from "../../../utils/useSelectedClasses";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
    import.meta.env.VITE_Payment_Publishable_Key
  )
const PaymentUser = () => {
    const payId=useParams()
    const id=payId.id
    const [selectedClass,,isLoading]=useSelectedClasses()
    if(isLoading){
        return <Loader></Loader>
    }
    const clickedClass=selectedClass.find(sc=>sc._id === id)
    const price=parseInt(clickedClass?.price)
    return (
        <div className="px-5">
            <DashSecTitle body="Payment"></DashSecTitle>
            <p className="font-mono text-2xl font-bold tracking-widest text-gray-900">Enrolled amount: ${clickedClass?.price}</p>

            <div>
            <Elements stripe={stripePromise}>
        <CheckoutForm cls={clickedClass} price={price}></CheckoutForm>
      </Elements>
            </div>
        </div>
    );
};

export default PaymentUser;