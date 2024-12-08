import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { authContext } from "../Provider/AuthProvider";

const AddVisa = () => {
    const { user } = useContext(authContext)
    const { email } = user
    const [selectOption, setSelectOption] = useState([])
    const options = ["Valid passport", "Visa application form", "Recent passport-sized photograph", "Proof of financial means", "Travel itinerary",];
  
 

    const handleSubmit = (e) => {



        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value
        const description = form.description.value
        const age = form.age.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const application = form.application.value
        // handleCheckboxChange()

        const visaForm = { name, img, visaType, processingTime, description, age, fee, validity, application, selectOption, email }
        fetch('https://visa-navigator-server-ten.vercel.app/visas', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visaForm)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "successfull,added your visa!",

                    });
                    form.reset()

                }
               
            })


    }


    const handleCheckboxChange = (e) => {
        e.preventDefault()
        const form = e.target
        const value = form.value;
        const isChecked = form.checked;
        console.log('value :',value,'checked:',isChecked)
        
        if (isChecked) {
            setSelectOption((prev) => [...prev, value])

        }
        else {
            setSelectOption((prev) => prev.filter((opt) => opt !== value));
           
        }
        form.reset()
    }
    return (
        <div className=' sm:w-10/12 mx-auto w-full '>
        <div className="">
            <div className="hero-content flex-col  lg:flex-row-reverse">

                <div className="card w-full shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Country Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your country name" className="input input-bordered w-full " required />
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Country Image</span>
                                </label>
                                <input type="text" name='img' placeholder="Enter your country photo url" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Visa Type</span>
                                </label>
                                {/* <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full " required /> */}
                                <select name="visaType" className="select  input-bordered  w-full ">
                                    <option disabled selected>What is the best visa</option>
                                    <option>Tourist visa</option>
                                    <option>Student visa</option>
                                    <option>Official visa</option>
                                    <option>Job visa</option>
                                    <option>Residential visa</option>
                                </select>
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="text" name='processingTime' placeholder="Enter Processing Time" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    className="textarea textarea-bordered textarea-xs w-full "></textarea>
                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Age</span>
                                </label>
                                <input type="number" name='age' placeholder="Enter your age year" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Fee</span>
                                </label>
                                <input type="number" name='fee' placeholder="Enter fee" className="input w-full input-bordered" required />


                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Validity</span>
                                </label>
                                <input type="text" name='validity' placeholder="Enter Validity" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Application Method</span>
                                </label>
                                <input type="text" name='application' placeholder="Enter your application method" className="input w-full input-bordered" required />


                            </div>
                            <div className="sm:w-1/2">
                                <label className="label">
                                    <span className="label-text">Required Document</span>
                                </label>
                                {/* <input type="text" name='validity' placeholder="Enter Validity" className="input w-full input-bordered" required /> */}
                                {
                                    options.map((option, index) => (
                                        <div key={index} className="mb-2">
                                            <label >
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    onChange={handleCheckboxChange}
                                                    className="mr-2"
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D2B48C]">Add visa</button>
                        </div>
                    </form>
                    <div className='flex justify-center'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AddVisa;