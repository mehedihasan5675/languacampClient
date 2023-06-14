import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const Register = () => {
    const navigate=useNavigate()
  const { user, createUser,logOut } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const profileUpdate = (currentUser,name,photoURL) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        logOut()
        .then(()=>{})
        .catch(()=>{})
        const userInfo={
         name:data.name, email:data.email,photoURL:data.photo_URL
        }
      fetch(`https://server-spoking-summer.vercel.app/user`,{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(userInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
      })
       profileUpdate(result.user,data.name,data.photo_URL)
       .then(() => {
         reset();
        navigate('/login')
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Register successfully Done!",
           showConfirmButton: false,
           timer: 1500,
         });

       })
       .catch((error) => {
         console.log(error.message);
       });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-b from-[#815ead] to-purple-900 pb-20">
        <div className=" pt-20">
          <div className="card  justify-center flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl  bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="user name"
                  className="input input-bordered"
                />
              </div>
              {errors?.name && (
                <span className="text-red-600 tracking-wider">
                  This name field is required
                </span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photo_URL", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
              </div>
              {errors?.photo_URL && (
                <span className="text-red-600 tracking-wider">
                  This photo url field is required
                </span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              {errors?.email && (
                <span className="text-red-600 tracking-wider">
                  This email field is required
                </span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    maxLength: 20,
                    minLength: 6,
                    pattern:
                      /(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[!@#$%^&*()\-__+.]){1,})/,
                  })}
                  type="password"
                  placeholder="type your password"
                  className="input input-bordered"
                />
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-600 tracking-wider">
                  This password field is required
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 tracking-wider">
                  This character is less than 6 degit.
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 tracking-wider">
                  This character will not be more than 20 degit.
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600 tracking-wider">
                  There need at least one small letter, capital letter & one special character.Please fill this requirement.{" "}
                </span>
              )}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register"
                  className="btn text-white hover:bg-purple-500 bg-purple-600"
                />
              </div>
              <p className="text-pink-600 font-semibold">Already have an account? <Link to="/login" className="underline">Please Login...</Link> </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
