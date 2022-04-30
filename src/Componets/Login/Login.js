import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.int';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';
const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);
    const HandleEmail =e=>{
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if(validEmail){
            setUserInfo({...userInfo,email:e.target.value})
            setErrors({...errors, email: ""}) 
        }else{
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
    const handleLogibn = e =>{
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password)
    }
    const navigate= useNavigate()
    const location = useLocation()
    const form =location.state?.form.pathname || "/";
    useEffect(()=>{
        if(user){
            navigate(form)
        }
    },[user])
    useEffect(()=>{
        const error =hookError || googleError;
        if(error){
            switch(error?.code){   
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                    case "auth/auth/invalid-password":
                        toast("wrong password provided, please provide a valid password")
                        break;
                        default:
                            toast("Something went wrong")
            }
           

        }
    },[hookError, googleError])
    return (
        <div className="block p-6 rounded-lg shadow-lg max-w-sm mx-auto my-2 py-8 mb-16 mt-6 ">
            <form onSubmit={handleLogibn}>
                <div className="form-group mb-6">
                    <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input type="email" className="form-control
              block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                        aria-describedby="emailHelp" placeholder="Enter email" onBlur={HandleEmail} />
                </div>
                <div className="form-group mb-6">
                    <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                        placeholder="Password" onBlur={handlePassword} />
                        {errors?.password && <p className="text-red-600">{errors.password}</p> }
                </div>
                <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        <input type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck2" />
                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                    </div>
                    <Link to="" onClick={
                         async () => {
                            await sendPasswordResetEmail(userInfo.email);
                            toast('Sent email')
                        }
                    }
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                        password?</Link>
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
            ease-in-out">Login</button>
                <p className="text-gray-800 mt-6 text-center">Create New Account? <Link to="/register"
                    className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                </p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;