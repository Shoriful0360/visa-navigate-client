/* eslint-disable react/prop-types */

import { useState, useEffect, useContext } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import Swal from "sweetalert2";
import { authContext } from "../Provider/AuthProvider";
const Modal = ({ modalData, closeModal, isModalOpen }) => {
   
    const {user}=useContext(authContext)
   
    const{age,application,img,name,processingTime,validity,visaType}=modalData ||{}
  
    const [currentDate, setCurrentDate] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const firstName=form.firstName.value
        const lastName=form.lastName.value;
        const date=form.date.value;
        const fee=form.fee.value;
        const document={email,firstName,lastName,date,fee,age,application,img,name,processingTime,validity,visaType}
        fetch('https://visa-navigator-server-ten.vercel.app/apply',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(document)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Congratulation",
                    text: "apply is success",

                });
                form.reset()

            }
        })

    }



    useEffect(() => {
      // Get today's date in YYYY-MM-DD format
      const today = new Date().toISOString().split("T")[0];
      setCurrentDate(today);
    }, []);
    return (
        <>
            {isModalOpen && (
                <div className="modal modal-open ">
                    <div className="modal-box bg-[#F8EDE3]">

                        <form onSubmit={handleSubmit} >
                           
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name='firstName' placeholder="Enter your first Name" className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name='lastName' placeholder="Enter your last Name" className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' value={user?.email} className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Applied Date</span>
                                </label>
                                <input type="date" name='date' value={currentDate} placeholder="Enter date" className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label ">
                                    <span className="label-text flex items-center gap-2">Visa Fee  <AiOutlineDollar className="text-lg text-red-500" /> </span>
                                   
                                </label>
                                <input type="text" name='fee' value={modalData?.fee} className="input w-full input-bordered" required />

                            </div>
                            <button  type="submit" className="btn w-full mt-3 text-white bg-[#1C7A9C]">Apply</button>
                        </form>


                        <div className="modal-action">
                            <button className="btn btn-secondary " onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;