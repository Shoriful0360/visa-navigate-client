import { useContext } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import Swal from "sweetalert2";
import { authContext } from "../Provider/AuthProvider";


const UpdateModal = ({modalData,handleCloseModal,isModalOpen,setModalData}) => {
  
const{name,img,application,fee,processingTime,validity,visaType,_id}=modalData
// console.log(modalData?.name)
// console.log(modalData)
    console.log(processingTime)
    const {user}=useContext(authContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
       
        const form=e.target;
        const name=form.name.value;
        const img=form.img.value
        const application=form.application.value;
        const fee=form.fee.value;
        const validity=form.validity.value;
        const visaType=form.visaType.value;
        const updateVisa={name,fee,application,img,processingTime,validity,visaType}
        fetch(`http://localhost:7000/visas/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateVisa)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data. modifiedCount) {
                Swal.fire({
                    icon: "success",
                    title: "Congratulation",
                    text: "apply is success",

                });
                // form.reset()
                setModalData(data)
              

            }
        })

    }
    return (
        <div>
             <>
            {isModalOpen && (
                <div className="modal modal-open ">
                    <div className="modal-box bg-[#F8EDE3]">

                        <form onSubmit={handleSubmit} >
                           
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" name='name' 
                                defaultValue={name}
                                className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Country Image</span>
                                </label>
                                <input type="text" name='img' placeholder="Enter your last Name" 
                                defaultValue={img} className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Visa Type</span>
                                </label>
                                <input type="text" name='visaType' defaultValue={visaType} className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="text" name='processingTime'  
                              defaultValue={processingTime}  className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label ">
                                    <span className="label-text flex items-center gap-2">Visa Fee  <AiOutlineDollar className="text-lg text-red-500" /> </span>
                                   
                                </label>
                                <input type="text" name='fee' defaultValue={fee}  className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label ">
                                    <span className="label-text flex items-center gap-2">Validity  </span>
                                   
                                </label>
                                <input type="text" name='validity' defaultValue={validity}  className="input w-full input-bordered" required />

                            </div>
                            <div className="w-full">
                                <label className="label ">
                                    <span className="label-text flex items-center gap-2">Applycation Method </span>
                                   
                                </label>
                                <input type="text" name='application' defaultValue={application}  className="input w-full input-bordered" required />

                            </div>
                            <button  type="submit" className="btn w-full mt-3 text-white bg-[#1C7A9C]">Apply</button>
                        </form>


                        <div className="modal-action">
                            <button className="btn btn-secondary " onClick={handleCloseModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
        </div>
    );
};

export default UpdateModal;