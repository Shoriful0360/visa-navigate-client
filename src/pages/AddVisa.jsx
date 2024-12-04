
const AddVisa = () => {

    const handleBack = () => {

    }

    const handleSubmit = (e) => {

        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const img=form.img.value;
        const visaType=form.visaType.value;
        const processingTime=form.processingTime.value
        const description=form.description.value
        const age=form.age.value;
        const fee=form.fee.value;
        const validity=form.validity.value;
        const application=form.application.value;
        const option1=form.option1.value;
        const option2=form.option2.value;
   const visaForm={name,img,visaType,processingTime,description,age,fee,validity,application}
   console.log(visaForm)
        
     
    }
    return (
        <div className='bg-[#F4F3F0] p-10'>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter your coffe name" className="input input-bordered w-full " required />
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Country Image</span>
                                    </label>
                                    <input type="text" name='img' placeholder="Enter your coffee cheif" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Visa Type</span>
                                    </label>
                                    {/* <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full " required /> */}
                                    <select name="visaType" className="select  input-bordered  w-full ">
                                        <option disabled selected>What is the best visa</option>
                                        <option>Tourist visa</option>
                                        <option>Student visa</option>
                                        <option>Official visa</option>
                                        <option>JOb visa</option>
                                    </select>
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Processing Time</span>
                                    </label>
                                    <input type="text" name='processingTime' placeholder="Enter Processing Time" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex   gap-4'>
                                <div className=" w-1/2">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <textarea
                                    name="description"
                                        placeholder="Description"
                                        className="textarea textarea-bordered textarea-xs w-full "></textarea>
                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Age</span>
                                    </label>
                                    <input type="number" name='age' placeholder="Enter your age year" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Fee</span>
                                    </label>
                                    <input type="number" name='fee' placeholder="Enter photo URL" className="input w-full input-bordered" required />
                                  

                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Validity</span>
                                    </label>
                                    <input type="text" name='validity' placeholder="Enter Validity" className="input w-full input-bordered" required />

                                </div>
                            </div>
                            <div className='md:flex gap-4'>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Application Method</span>
                                    </label>
                                    <input type="number" name='application' placeholder="Enter your application method" className="input w-full input-bordered" required />
                                  

                                </div>
                                <div className="w-1/2">
                                    <label className="label">
                                        <span className="label-text">Required Document</span>
                                    </label>
                                    {/* <input type="text" name='validity' placeholder="Enter Validity" className="input w-full input-bordered" required /> */}
                                  <div  id="checkboxForm">
                                  <label>
      <input type="checkbox" name="option1" value=" Valid Password" />
      Valid Password
    </label>
    <label>
      <input type="checkbox" name="option2" value="Visa application " />
  Visa application
    </label>
    <label>
      <input type="checkbox" name="option3" value="Recent passport-sized photograph" />
      Recent passport-sized photograph
    </label>
    <label>
      <input type="checkbox" name="option4" value=" Travel itinerary" />
      Travel itinerary
    </label>
    <label>
      <input type="checkbox" name="option5" value='  Proof of financial means' />
      Proof of financial means
    </label>

                                  </div>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#D2B48C]">Add visa</button>
                            </div>
                        </form>
                        <div className='flex justify-center'>
                            <button onClick={handleBack} className='btn bg-secondary '>Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVisa;