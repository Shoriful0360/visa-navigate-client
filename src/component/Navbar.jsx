import {  useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";





const Navbar = () => {
  const {user,signOutUser}=useContext(authContext)
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
        <li><NavLink to={`/myVisa/${user?.email}`}>My Added Visas</NavLink></li>
        <li><NavLink  to={`/visaApplication/${user?.email}`}>My visa Application</NavLink></li>
        {/* <li><NavLink to={'/'}>My Profile</NavLink></li> */}
    
    </>
    return (
   
      <div className={`navbar  rounded-md right-0 left-0 z-50 py-4 px-5 ${isScrolled? 'bg-white/30   backdrop-blur-md shadow-md':'bg-blue-950 '}`}>
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
          <a className="btn btn-ghost text-white hidden sm:block text-3xl"> Visa Navigate</a>
      </div>
      <div className="navbar-center  hidden lg:flex">
          <ul className="menu text-white text-lg font-semibold gap-4 menu-horizontal px-1">
              {link}
          </ul>
      </div>
      <div className="navbar-end">
          {
              user? <div className={`flex relative group justify-center  hover:text-white${user?.displayName} items-center gap-2`}> 
              
                 
                 <img className={`w-10 mr-6 rounded-full h-10 object-cover object-center `} src={user?.photoURL} alt="" />

                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-white text-xl font-semibold">{user?.displayName}</span>
        </div>
                 <button onClick={()=>signOutUser()} className="btn bg-neutral-600 text-white">SignOut</button>
              </div>
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