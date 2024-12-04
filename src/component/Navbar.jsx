import {  useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";





const Navbar = () => {
  const {user,userSignOut}=useContext(authContext)
  const [isScrolled,setIsScrolled]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const link=<>
    
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allVisa'}>All Visa</NavLink></li>
        <li><NavLink to={'/addvisa'}>Add Visa</NavLink></li>
        <li><NavLink to={'/myVisa'}>My Added Visas</NavLink></li>
        <li><NavLink to={'/visaApplication'}>My visa Application</NavLink></li>
        {/* <li><NavLink to={'/'}>My Profile</NavLink></li> */}
    
    </>
    return (
   
      <div className={`navbar fixed rounded-md right-0 left-0 z-50 py-4 px-5 ${isScrolled? 'bg-white/30   backdrop-blur-md shadow-md':'bg-blue-950 '}`}>
      <div className="navbar-start">
          <div className="dropdown">
              <div tabIndex={0} role="button" className="btn text-xl text-white btn-ghost lg:hidden">
                 <FaBars></FaBars>
              </div>
              <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {link}
              </ul>
          </div>
          <a className="btn btn-ghost hidden sm:block text-xl"> hai</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
          <ul className="menu text-white text-lg font-semibold gap-4 menu-horizontal px-1">
              {link}
          </ul>
      </div>
      <div className="navbar-end">
          {
              user? <div className="flex justify-center items-center gap-2"> 
              <p className="text-white">Wellcome, </p>
              <h1 className="text-white hidden sm:block">{user?.displayName}</h1>
                 
                 <img className="w-10 mr-6 rounded-full h-10 object-cover object-center" src={user?.photoURL} alt="" />
              </div>
              : 
               <div>
              {/* <img className="w-14 h-14 rounded-full" src={icon} alt="" /> */}
          </div>
          }
        
          {
              user?  <button onClick={()=>userSignOut()} className="btn bg-neutral-600 text-white">SignOut</button>
              :
           <div className="sm:*:ml-2 flex gap-1">
              <Link to={'/register'} className="btn bg-neutral-600 text-white ">signIn</Link>
              <Link to={'/login'} className="btn bg-neutral-600 text-white ">login</Link>
           </div>
          }
        
      </div>
  </div>
    );
};

export default Navbar;