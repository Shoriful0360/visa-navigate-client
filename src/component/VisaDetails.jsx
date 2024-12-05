import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { authContext } from "../Provider/AuthProvider";
import { IoCheckmark } from "react-icons/io5";
import Modal from "./Modal";
import Swal from "sweetalert2";

const VisaDetails = () => {
    const navigate=useNavigate()
    const { visas } = useContext(authContext)
    const { id } = useParams()
    const visa = visas.find(visa => visa._id === id)
   
    const[isModalOpen,setModalOpen]=useState(false)
    const[price,setPrice]=useState(0)

    const modalOpen=(price)=>{
        setModalOpen(true)
        setPrice(price)


    }
    const closeModal=()=>{
      
        setModalOpen(false)
        setPrice(0)
    }



    return (
        <div>
            <div className="mt-4">
                <img src="https://www.siecindia.com/uploads/blog/blog_3ab2ab2db12f55924148b531c2bc3c21_1708432181schengen_countries%20copy.webp" alt="" className="w-full"/>
            </div>
            <div key={visa?._id} className="card w-10/12 sm:w-4/6 mx-auto lg:-mt-20 md:-mt-10 -mt-5 bg-[#E9EFEC] ">
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{visa?.name}</h2>
                        <img src={visa?.img} alt="" className="w-14 h-14 rounded-full" />
                    </div>
                    <div className="divider divider-success"></div>

                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>We are using cookies for no reason.</p>
                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>{visa?.visaType}</p>
                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Processing Time: {visa?.processingTime}</p>
                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Fee: {visa?.fee} $</p>
                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Validity: {visa?.validity}</p>
                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Application by {visa?.application}</p>
                 
                    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Requirement:</p>
                   <div className="ml-10">
                   {visa?.selectOption.map((data,idx)=> <li key={idx}>{data}</li>)}
                   </div>
                    
                    <div className="card-actions justify-between">
                        <button onClick={()=>navigate(-1)} className="btn bg-[#1C7A9C] text-white">back</button>
                        <button onClick={()=>modalOpen(visa?.fee)} className="btn bg-[#1C7A9C] text-white">Apply Now</button>

                    </div>
                <div><Modal isModalOpen={isModalOpen} price={price} closeModal={closeModal} ></Modal></div>
                </div>
            </div>
        </div>
    );
};

export default VisaDetails;