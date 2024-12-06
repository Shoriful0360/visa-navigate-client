import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const VisaApplication = () => {
    const loadedApplyVisa=useLoaderData()
    const[applyVisa,setApplyVisa]=useState(loadedApplyVisa)
    console.log(applyVisa)
    // console.log(applyVisa)
    const handleDelete=(id)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:7000/apply/${id}`,{
            method:'DELETE',
           
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.deletedCount>0){
console.log(id)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
            }
            const remainingData=applyVisa?.filter(data=>data._id!==id)
            setApplyVisa(remainingData)
          })
          
        }
      });
    }
    return (
       <div className="mt-20">
        {
          applyVisa?.applyVisa? 

          <div className=" mt-10">
          <h1 className="uppercase text-lg mb-2 font-bold text-center" >Applicant's copy</h1>
       <div className="grid gap-10 sm:gap-4 sm:grid-cols-2">
       {
            applyVisa?.map(data=> 
            <div key={data._id} className="sm:p-6 bg-gray-100 ">
                <div className="">
                  <table className="table-auto w-full border-collapse border border-gray-300 bg-white">
                    <thead className="w-full">
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Contry Name</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.name}</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Contry Image</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <div className="flex justify-center">
                        <th className="border w-[45%] flex justify-center border-gray-300 px-4 py-2 text-gray-700"><img src={data.img} alt="" className="w-14 h-14 rounded-full" /></th>
                        </div>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Visa Type</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.visaType}</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Processing Time</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.processingTime}</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Visa fee</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.fee}$</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Validity</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.validity}</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Application Method</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.application}</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Applied Date</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.date}</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Application Name</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.firstName}{data.lastName}</th>
                      </tr>
                      <tr className="w-full">
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">Email</th>
                        <th className="border w-[10%] border-gray-300 px-4 py-2 text-gray-700">:</th>
                        <th className="border w-[45%] border-gray-300 px-4 py-2 text-gray-700">{data.email}</th>
                      </tr>
                    </tbody>
                 
                  </table>
                  
                  <div className="text-center w-full bg-gray-100">
                    <button onClick={()=>handleDelete(data._id)} className="btn w-full  bg-[#1C7A9C] text-white ">Cancel</button>
                  </div>
                </div>
              </div>)
         }
       </div>

        </div>
        :
        <div className="flex flex-col justify-center items-center">
        <img src="https://i.ibb.co.com/mSBFqs4/error.webp" alt="" className="w-80" />
        <h1 className="uppercase text-red-600 text-3xl">NO data found please add data</h1>
      </div>
        }
       </div>
    );
};

export default VisaApplication;