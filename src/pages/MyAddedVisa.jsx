

const MyAddedVisa = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your coffe name" className="input input-bordered w-full " required />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">chef</span>
                                </label>
                                <input type="text" name='chef' placeholder="Enter your coffee cheif" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" w-1/2">
                                <label className="label">
                                    <span className="label-text">Supplier</span>
                                </label>
                                <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full " required />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Taste</span>
                                </label>
                                <input type="text" name='taste' placeholder="Enter coffee taste" className="input w-full input-bordered" required />

                            </div>
                        </div>
                        <div className='md:flex   gap-4'>
                            <div className=" w-1/2">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full " required />
                            </div>
                            <div className="w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <input type="text" name='details' placeholder="Enter coffee-details" className="input w-full input-bordered" required />

                            </div>
                        </div>
                       <div className='md:flex gap-4'>
                       <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">photo</span>
                            </label>
                            {/* <input type="text" name='photoUrl' placeholder="Enter photo URL" className="input w-full input-bordered" required /> */}
                            <input type="file" name='photoUrl'  placeholder="Enter photo URL" className="file-input w-full max-w-xs" />

                        </div>
                        <div className="w-1/2">
                            <label className="label">
                                <span className="label-text">price</span>
                            </label>
                            <input type="text" name='price' placeholder="Enter Price" className="input w-full input-bordered" required />

                        </div>
                       </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#D2B48C]">Add coffee</button>
                        </div>
                    </form>
                 <div className='flex justify-center'>
                 <button  className='btn bg-secondary '>Back</button>
                 </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyAddedVisa;