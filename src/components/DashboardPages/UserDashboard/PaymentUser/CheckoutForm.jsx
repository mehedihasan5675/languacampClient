import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../utils/useAxiosSecure";
import './Checkout.css';
const CheckoutForm = ({cls,price}) => {
    console.log(cls);
    const stripe = useStripe();
    const { user } = useContext(AuthContext);
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const [processing,setProcessing]=useState(false)
    const [transactionId,setTransantionId]=useState('')
  console.log('clientSecret',clientSecret);
  const [cardError, setCardError] = useState();
      useEffect(()=>{
        if(price>0){
          axiosSecure.post('/create-payment-intent',{price})
        .then(res=>{
          console.log(res,'res');
            setClientSecret(res.data.clientSecret)
        })
        }
      },[price,axiosSecure])
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
      const card = elements.getElement(CardElement);
      console.log("card", card);
      if (card == null) {
        return;
      }
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });
      if (error) {
        console.log("error", error);
        setTransantionId('')
        setCardError(error.message);
      } else {
        setCardError("");
        console.log("PaymentMethod", paymentMethod);
      }
      setProcessing(true)
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || "unknown",
              name: user?.displayName || "anonymous",
            },
          },
        });
        if(confirmError){
          // console.log(confirmError,'confirmError');
        }
        console.log('paymentIntent',paymentIntent);
        setProcessing(false)
        if(paymentIntent.status==='succeeded'){
          ///
          axios.patch(`https://server-spoking-summer.vercel.app/reduce_increase/${cls.class_page_id}`)
              .then(res=>{
                console.log(res.data,'test seat updated');
               
              })
          ///
          const transaction_Id=paymentIntent.id
          setCardError('')
          setTransantionId(transaction_Id)
          const paymentData={
            instructor_email:cls?.instructor_email,
            transaction_id:transaction_Id,
            price,
            class_name:cls.class_name,
            date: new Date(),
            status:'service pending',
            available_seats:cls.available_seats,
            selectedClass_id:cls._id,
            class_page_id:cls.class_page_id

            
          }
          console.log(paymentData);
          axiosSecure.post('/payments',paymentData)
          .then(res=>{
            console.log(res,'test');
            if(res.data.insertResult.insertedId){
              
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Payment succeeded!',
                showConfirmButton: true,
                timer: 1500
              })
            }
          })

          

        }
    };
    return (
        <div>
            <form className="w-8/12 mx-auto mt-10" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          disabled={!stripe || !clientSecret || processing}
          type="submit"
          className="btn bg-green-400 border-none btn-sm my-5 w-full"
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-rose-500 text-center font-semibold tracking-wider italic mb-10">
          Error: {cardError}
        </p>
      )}
       {transactionId && (
        <p className="text-green-300 text-center font-semibold tracking-wider italic mb-10">
         Transaction complete with transaction id: <span className="text-yellow-200">{transactionId}</span>
        </p>
      )}
        </div>
    );
};

export default CheckoutForm;