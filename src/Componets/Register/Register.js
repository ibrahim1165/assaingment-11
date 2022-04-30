import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.int';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPass: "",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  })

  const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


  const HandleEmail = e => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value })
      setErrors({ ...errors, email: "" })
    } else {
      setErrors({ ...errors, email: "invalid email" })
      setUserInfo({ ...userInfo, email: "" })
    }
  };
  const handlePassword=e=>{
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if(validPassword){
        setUserInfo({...userInfo, password:e.target.value})
        setErrors({...errors, password: ""});
    }else{
        setErrors({...errors, password:"minimum 6 Character"})
        setUserInfo({...userInfo,password:""})
    }
}
const ConfrimhandlePassword =e=>{
  if (e.target.value === userInfo.password) {
    setUserInfo({ ...userInfo, confirmPass: e.target.value });
    setErrors({ ...errors, password: "" });
} else {
    setErrors({ ...errors, password: "Password's don't match" });
    setUserInfo({ ...userInfo, confirmPass: "" });
}
}
  const handleSingup = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password)
    console.log(userInfo);
  }

  const navigate= useNavigate()
  const location = useLocation()
  const form =location.state?.form.pathname || "/";
 useEffect(()=>{
      if(user){
          navigate(form)
      }
  },[user])
    
  useEffect(() => {
    if (hookError) {
        switch (hookError?.code) {
            case "auth/invalid-email":
                toast("Invalid email provided, please provide a valid email");
                break;
            case "auth/invalid-password":
                toast("Wrong password. Intruder!!");
                break;
            default:
                toast("something went wrong");
        }
    }
}, [hookError]);


  return (
    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto py-12 mt-8 mb-8 ">
        <form onSubmit={handleSingup}>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
              placeholder="Email address" require  onBlur={HandleEmail}/>
          </div>
          <div className="form-group mb-6">
            <input type="password" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
              placeholder="Password" require onBlur={handlePassword}/>
              {errors?.password && <p className="text-red-600">{errors.password}</p> }
          </div>
          <div className="form-group mb-6">
            <input type="password" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
              placeholder="Confrim-Password" require onBlur={ConfrimhandlePassword}/>  
          </div>
          <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign up</button>
          <p>
            You have already Account? <Link className="text-blue-500 text-xl my-5" to="/login">Please Login</Link>
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;