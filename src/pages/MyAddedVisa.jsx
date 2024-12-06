import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";


const MyAddedVisa = () => {
   const loadedVisas=useLoaderData()
   const[filterVisa,setFilterVisa]=useState(loadedVisas)
   console.log(filterVisa)
     
    return (
        <div className="mt-10">
        <h1 className="text-3xl text-center mb-4 text-red-500">My added visas</h1>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          
          {
              filterVisa?.map(visa=>
                  <div key={visa._id} className="card bg-[#E9EFEC] ">
    <div className="card-body">
    <div className="flex justify-between items-center">
    <h2 className="card-title">{visa?.name}</h2>
    <img src={visa?.img} alt="" className="w-14 h-14 rounded-full" />
    </div>
    <div className="divider divider-success"></div>
    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>{visa?.visaType}</p>
    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Processing Time: {visa?.processingTime}</p>
    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Fee: {visa?.fee} $</p>
    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>validity:   {visa?.validity}</p>
    <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Application Method: {visa?.application}</p>
    <div className="card-actions justify-between">
    <button className="btn bg-[#1C7A9C] text-white">Update</button>
    <button className="btn bg-secondary text-white">Delete</button>
    
    </div>
    </div>
    </div>
              )
          }
      </div>
      </div>
    );
};

export default MyAddedVisa;