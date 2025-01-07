

import Marquee from "react-fast-marquee";
import toast from "react-hot-toast";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";


const Immigration = () => {

    const handleform=async(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const subject=form.subject.value;
        const description=form.description.value;
        const formData={name,email,phone,subject,description}
        console.log(formData)

        
        fetch('https://visa-navigator-server-ten.vercel.app/message',{

            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success('suceess,send your message')
                form.reset()
            }
        })
   
        

    }
    return (
        <div>
            <Marquee autoFill speed={70}  pauseOnHover className="bg-[#DF1119]  uppercase text-white font-medium mt-5 py-2">
        <div className="flex items-center gap-5  ml-8 text-2xl"> 
            <h1>visa Processing</h1>
            <IoAirplaneSharp className="-rotate-45" />
        </div>
        <div className="flex items-center gap-3 ml-8 text-2xl"> 
            <h1>Immigration</h1>
            <IoAirplaneSharp className="-rotate-45" />
        </div>
        <div className="flex items-center gap-3 ml-8 text-2xl"> 
            <h1>travel partners</h1>
            <IoAirplaneSharp className="-rotate-45" />
        </div>
        <div className="flex items-center gap-3 ml-8 text-2xl"> 
            <h1>tours & travelagency</h1>
            <IoAirplaneSharp className="-rotate-45" />
        </div>
        <div className="flex items-center gap-3 ml-8 text-2xl"> 
            <h1>help in documen2</h1>
            <IoAirplaneSharp className="-rotate-45" />
        </div>
            </Marquee>

            {/* background */}

            <div className="bg-banner_4 h-[700px]  bg-no-repeat bg-cover bg-center bg-opacity-70">
            <div className="h-[700px] bg-black bg-opacity-60 text-white md:flex lg:px-52 space-y-10 px-4 py-4 lg:pt-28 md:px-20 md:py-10 gap-10 justify-evenly  backdrop-blur-[3px]">
                {/* left side */}
        <div className="flex-1 ">
<button className="border-4 px-2 uppercase">why choose us</button>
<h1 className="text-3xl font-bold">We are professional expert in Imigration</h1>
<div className="flex items-center mt-5  gap-4">
    <div className="  bg-reded rounded-full  text-white">
    <GiAirplaneDeparture className="w-20 h-20" />
    </div>
    <div >
        <h2 className="text-base">Visa Process Responsibility</h2>
        <p className="text-xs text-gray-300 mt-4">Visa Process Responsibilities involve managing the end-to-end tasks required for obtaining a visa.  </p>
    </div>
</div>
        </div>
        <div className="flex-1 relative">
<p>Visa Process Management encompasses all tasks related to securing legal authorization for entry, stay, or work in a foreign country. ..</p>

{/* form */}
<div className="bg-reded rounded-md md:absolute -bottom-24 py-10 px-10">
    <form onSubmit={handleform} action="">
    <div className="flex gap-4">
    <input type="text" name="name" placeholder="Enter Name" className="input text-black  w-full max-w-xs" />
    <input type="email" name="email" placeholder="Enter Email" className="input text-black w-full max-w-xs" />
    </div>
   <div className="flex gap-4 mt-4">
   <input type="text" placeholder="Subject" name="subject" className="input text-black w-full max-w-xs" />
   <input type="text" placeholder="phone" name="phone" className="input w-full text-black max-w-xs" />
   </div>
    <textarea className="textarea w-full text-black h-48 mt-4" name="description" placeholder="Bio"></textarea>
   <div className="flex justify-center">
   <button type="submit" className="btn bg-black text-white">Send Message</button>
   </div>
    </form>
</div>
        </div>

            </div>
            </div>
        </div>
    );
};

export default Immigration;