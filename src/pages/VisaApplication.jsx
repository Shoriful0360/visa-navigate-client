import { useLoaderData } from "react-router-dom";


const VisaApplication = () => {
    const applyVisa=useLoaderData()
    console.log(applyVisa)
    return (
        <div className="">
          <h1 className="uppercase text-lg font-bold text-center" >Applicant's copy</h1>
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
                    <button className="btn w-full  bg-[#1C7A9C] text-white ">Cancel</button>
                  </div>
                </div>
              </div>)
         }
       </div>

        </div>
    );
};

export default VisaApplication;