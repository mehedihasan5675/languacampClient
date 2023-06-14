import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ClassesFeedback = () => {
    const id=useParams()
    // console.log(id);
const handleFeedbackSubmit=(e)=>{
e.preventDefault()
const form=e.target 
const feedback=form.feedback.value 
const Feedback={feedbk:feedback}
console.log(feedback);
        fetch(`http://localhost:7000/class/feedback/${id}`,
        {
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(Feedback)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Denied already!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            console.log(data);
        })
}
    return (
        <div className="flex h-full px-3 justify-center items-center">
            <div className="p-5 hover:scale-110 duration-500  rounded-xl bg-[#a9907e6c] text-center">
                <p className="pb-7 font-mono text-lg font-semibold">Write your feedback for denying this class?</p>
                <form onSubmit={handleFeedbackSubmit}>
                <textarea className="p-3 w-full rounded-2xl" name="feedback" id="" cols="40" required rows="5"></textarea>

                <input type="submit" value="Feedback" className="btn btn-ghost btn-outline tracking-widest font-mono mt-5 w-full" />
                </form>
            </div>
        </div>
    );
};

export default ClassesFeedback;