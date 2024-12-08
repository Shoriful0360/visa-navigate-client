/* eslint-disable react/no-unknown-property */

import { Typewriter } from "react-simple-typewriter";


const Service = () => {
    const service=[
        {
            img:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-3.png',
            name:'Student Visa',
          icon:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-icon-3.png'
        },
        {
            img:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-4.png',
            name:'Tourist Visa',
            icon:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-icon-4.png'
        },
        {
            img:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-5.png',
            name:'Residence Visa',
            icon:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-icon-5.png'
        },
        {
            img:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-1.png',
            name:'Student Visa',
              icon:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-icon-1.png'
        },
        {
            img:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-2.png',
            name:'Business Visa',
            icon:'https://wp.rrdevs.net/routex/wp-content/uploads/2024/10/service-icon-2.png'
        },
    ]
    return (
        <div>
            
<div className="text-center  mt-10">
    <h1 className="text-[#034833]">Our Services</h1>
    <span className="text-[#659287] text-4xl uppercase font-bold font-serif italic">
       <Typewriter
           words={[' Outstanding immigration visa services.']}
           loop={0} // Loops 5 times
           cursor
           cursorStyle="_"
           typeSpeed={150}
           deleteSpeed={70}
           delaySpeed={1000}
          >

          </Typewriter>
       </span>
    <p className="mt-2">Experience unparalleled growth with our expert guidance. Navigate challenges, seize opportunities, and watch your business.</p>
</div>        
            <div className="grid mt-5 lg:grid-cols-4 md:grid-cols-2 gap-3">
            {service.map((data,idx)=><div className="relative " key={idx} >
            <div className="card w-full  bg-base-100  shadow-xl">
            <figure className="">
              <img
                src={data.img}
                alt="Shoes"
                className="rounded-xl" />
            </figure>
           <div>
           </div>
           
           
          </div>
         <div className="bg-[#034833]  object-center absolute w-20 h-20 rounded-full  top-10 right-10 z-50 flex justify-center p-4">
         <img className="w-full" src={data.icon} alt="" />
         </div>
          <h1 className="absolute bottom-3 ml-10 text-white text-lg font-semibold">{data.name}</h1>
          <div class="absolute inset-0 rounded-lg bg-[#034833] opacity-30 "></div>
          </div>
)}
            </div>
        </div>
    );
};

export default Service;