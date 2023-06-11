import { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
const Login = () => {
  const {user,loginUser}=useContext(AuthContext)
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location);
  const goTo=location?.state?.from?.pathname || '/'
  console.log(goTo);

  const [disabled,setDisable]=useState(false)
const {LoginGoogle}=useContext(AuthContext)
    useEffect(()=>{
        loadCaptchaEnginge(6)
setDisable(true)
    },[])
    const captchaRef=useRef(null)
    const handleCapcha=(e)=>{
      e.preventDefault()
        const captcha=captchaRef.current.value 
        console.log(captcha);

        if (validateCaptcha(captcha)==true) {
          
          setDisable(false)
      }
 
      else {
        setDisable(true)
      }
    }

const handleLoginBtn=(e)=>{
  e.preventDefault()
  const form=e.target;
  const email=form.email.value;
  const password=form.password.value;
  // console.log(email,password);
  loginUser(email,password)
  .then(()=>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log in successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate(goTo,{replace:true})
  })
  .catch((err)=>{
    console.log(err.message);
  })
}

    const handleGoogleLogin=()=>{
      LoginGoogle()
      .then(result=>{
        console.log(result.user);
        const user=result.user;
        const userInfo={
          name:user.displayName,email:user.email,photoURL:user.photoURL
        }
    //     fetch(`http://localhost:5000/user`,{
    //     method:"POST",
    //     headers:{
    //       'content-type':'application/json'
    //     },
    //     body:JSON.stringify(userInfo)
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data);
    //     navigate(goTo,{replace:true})
    //     Swal.fire({
    //       position:"top-end",
    //       icon: "success",
    //       title: "Login successfully Done!",
    //       showConfirmButton: false,
    //       timer: 1500,
    //     });
    //   })
      })
      .catch(error=>{
        console.log(error.message);
      })
    }
    return (
        <>
            <div className=" min-h-screen pb-20 bg-gradient-to-b from-[#815ead] to-purple-900">
  <div className=" pt-20">
    
    <div className="card  justify-center flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl  bg-base-100">
      <form onSubmit={handleLoginBtn} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <div className="">
            <div  className="my-2"><LoadCanvasTemplate /></div>
            <input ref={captchaRef} type="text" placeholder="type your Captcha" className="input input-bordered my-3" />
            <button onClick={handleCapcha} className='btn w-3/6 btn-xs btn-ghost btn-outline'>confirm Captcha</button>
          </div>
        </div>
        <div className="form-control mt-6">
          {/* TODO:make button disabled for work captcha */}
          <input disabled={false} type="submit" value="Login" className="btn text-white hover:bg-purple-500 bg-purple-600"/>
        </div>


      </form>
      <div className='mx-8 mb-10 '>
      <button  onClick={handleGoogleLogin} className='btn btn-outline w-full btn-ghost  '> <img className='w-8 h-8 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzmwConsAb6apPniVoMtGruouJXZ5MPYSxib6foY__g&s" alt="" /> Login with Google</button>

<p className="text-pink-800 mt-5 font-semibold">New to LinguaCamp? <Link to="/register" className='underline'>Please Register...</Link> </p>
      </div>
    </div>
  </div>
</div>
        </>
    );
};

export default Login;