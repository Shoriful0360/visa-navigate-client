

import { useContext, useState } from "react";
import { GoEye } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import { authContext } from "../Provider/AuthProvider";




const Register = () => {
const{ createSignUp,setUser}=useContext(authContext)
   
    const [visible,setVisible]=useState(false)
    const [error,setError]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const name=form.get('name');
        const photo=form.get('photoUrl');
        const email=form.get('email');
        const password=form.get('password');
        const checkbox=e.target.terms.checked;
        const strongPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (password.length < 6) {
            setError('password atleast 6 character')
            return;
          }
          if(!strongPassword.test(password)){
            setError('at least  one uppercase,one lowercase,one number and on special simble')
            return;
          }
          if(!checkbox){
            setError('check terms and conditon')
            return;
          }

        createSignUp(email,password)
       .then((result) => {
        navigate('/')
 
        setUser(result.user)
        // updateUser({displayName:name,photoURL:photo})
        // .then(()=>{
         
        //     setUser((prev)=>{
        //         return {...prev,displayName:name,photoURL:photo}
        //     })
        //     navigate('/')
        // }).catch(()=>{
           
        // })
        // ...
      })
       .catch(error=>{
      setError(error.message)
       })

    }

    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
                <h1 className="text-2xl font-bold  text-center">Rigister Now!</h1>
                <div className="divider"></div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photoUrl" placeholder="Enter your photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className='absolute right-2 top-[50px] cursor-pointer'>
                    {
                visible ? <div onClick={()=>setVisible(false)}>  <GoEye></GoEye></div> :<div onClick={()=>setVisible(true)}><IoEyeOffOutline></IoEyeOffOutline> </div>
              }
                    </div>
                    <input type={visible?'text':'password'} name="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className=" ">
                    <label className=" flex gap-2 items-center  cursor-pointer">
                        <input type="checkbox" name="terms"  className="checkbox checkbox-primary" />
                        <span className="label-text text-lg">Accept <small className="text-neutral-500 text-lg">Terms $ Conditions</small> </span>
                    </label>
                </div>
                <h1 className="text-lg text-bold text-red-600">{error}</h1>
                <div className="form-control mt-6">
                    <button className="btn text-lg bg-neutral-600 text-white">Register</button>
                </div>
              
            </form>
           

                <h1 className="text-center pb-5">Already have an account? <Link to={'/login'} className="text-lg font-bold text-green-700">Log in</Link></h1>
        </div>
    </div>
    );
};

export default Register;