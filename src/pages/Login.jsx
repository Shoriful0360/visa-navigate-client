import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoEye } from 'react-icons/go';
import { FcGoogle } from 'react-icons/fc';import { VscGithub } from 'react-icons/vsc';
import { IoEyeOffOutline } from 'react-icons/io5';
import { authContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
    const {signIn,setUser,loginWithGoogle}=useContext(authContext)
    const [visible,setVisible]=useState(false)
    const navigate=useNavigate('')
    const emailRef=useRef()
    

    const handleSubmit=(e)=>{
        e.preventDefault()
       const email=e.target.email.value;
       const password=e.target.password.value;
       signIn(email,password)
       .then(result=>{
        setUser(result.user)
        navigate('/')
       })
       .catch(()=>{
      
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "email or password invalid!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
       })
      
     
      }

    //   login with google
    const handleGoogle=()=>{
        loginWithGoogle()
        .then((result)=>{
            setUser(result.user)
            navigate('/')
        })
        .catch(()=>{

        })
    }
    return (
        <div className="hero  ">
        <div className="card bg-base-100 p-10 w-full max-w-sm shrink-0 shadow-2xl">
         <form onSubmit={handleSubmit} className="card-body">
             <h1 className='text-2xl font-bold text-center'>Log in now</h1>
             <div className="divider"></div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
           </div>
           <div className="form-control relative">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <div className='absolute right-2 top-[50px] cursor-pointer'>
               {
                 visible ? <div onClick={()=>setVisible(false)}>  <GoEye></GoEye></div> :<div onClick={()=>setVisible(true)}>  <IoEyeOffOutline></IoEyeOffOutline></div>
               }
                                
             </div>
             <input type={visible?'text':'password'} name='password' placeholder="password" className="input input-bordered" required />
             {/* <label className="label">
               <a  onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
             </label> */}
             <Link to={`/login/forgot-password`}>
     Forgot Password?
   </Link>
           </div>
           {/* <h1 className='text-xl font-bold text-red-600'>{error}</h1> */}
           <div className="form-control mt-6">
             <button className="btn bg-neutral-700  text-white text-lg">Login</button>
           </div>
         </form>
         <div className="divider">Login with other option</div>
         <div className='text-center space-x-2'>
             <button onClick={handleGoogle}  className='btn text-4xl bg-white'><FcGoogle></FcGoogle></button>
             <button className='btn text-4xl bg-white'><VscGithub></VscGithub></button>
         </div>
       
         <p className='py-2 text-center'>Don't have an account?<Link className='text-red-500 font-semibold' to={'/register'}>Register</Link></p>
       </div>
   </div>
    );
};

export default Login;