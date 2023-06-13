import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import DashSecTitle from "../../../utils/DashSecTitle";
import useAxiosSecure from "../../../utils/useAxiosSecure";
const img_hosting_key = import.meta.env.VITE_img_hosting_key;
const AddClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(data);
    formData.append("image", data.image[0]);
    fetch(img_hosting_url,{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then(imgResponse=>{
        if(imgResponse.success){
            const imgURL=imgResponse.data.display_url
            const {class_name,price,instructor_name,instructor_email,available_seats}=data
            const newItem={class_name,price:parseInt(price),instructor_name,instructor_email,available_seats:parseInt(available_seats),image:imgURL,status:'pending',total_enrolled:parseInt(0)}
            console.log(newItem);
            axiosSecure.post('/classes',newItem)
            .then(data=>{
                if(data.data.insertedId){
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
    })
  };

  return (
    <div className="mx-auto w-full h-screen md:px-16 px-5">
      <DashSecTitle body="manage Classes"></DashSecTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-black font-semibold text-base label-text">
              Class name:
            </span>
          </label>
          <input
            type="text"
            placeholder="class name"
            className="input input-bordered w-full "
            {...register("class_name", { required: true })}
          />
        </div>

        <input
          type="file"
          placeholder="select your image"
          className="file-input w-full md:w-1/2 mt-5"
          {...register("image", { required: true })}
        />
        <div className="flex md:flex-row flex-col my-5 gap-5">
          <div className="form-control md:w-6/12 w-full">
            <label className="label">
              <span className="text-black font-semibold text-base label-text">
                Instructor name:
              </span>
            </label>
            <input
              type="text"
              defaultValue={user.displayName}
              readOnly
              className="input input-bordered w-full "
              {...register("instructor_name", { required: true })}
            />
          </div>

          <div className="form-control md:w-6/12 w-full">
            <label className="label">
              <span className="text-black font-semibold text-base label-text">
                Instructor email:
              </span>
            </label>
            <input
              type="email"
              defaultValue={user.email}
              readOnly
              className="input input-bordered w-full "
              {...register("instructor_email", { required: true })}
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="text-black font-semibold text-base label-text">
                Price:
              </span>
            </label>
            <input
              type="number"
              placeholder="$"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </div>

          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="text-black font-semibold text-base label-text">
                Available seats
              </span>
            </label>
            <input
              type="number"
              placeholder="available seats"
              className="input input-bordered w-full "
              {...register("available_seats", { required: true })}
            />
          </div>
        </div>
        <input
          type="submit"
          className="block btn bg-[#9c8e80] hover:bg-[#908174] border-none text-white shadow-lg mt-10 w-full"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClasses;
