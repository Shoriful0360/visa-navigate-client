
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";



const LatestVisas = ({loadedvisa}) => {

    return (
      <div className="md:mt-24 mt-36">
 <h1 className="text-3xl text-center mb-4 text-red-500">
   
       <span className="text-[#034833] text-5xl font-bold font-serif italic">
       <Typewriter
           words={[' Latest visas']}
           loop={0} // Loops 5 times
           cursor
           cursorStyle="_"
           typeSpeed={100}
           deleteSpeed={50}
           delaySpeed={1000}
          >

          </Typewriter>
       </span>


        </h1>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          
          {
              loadedvisa?.map(visa=>
                  <div key={visa._id}  data-aos="zoom-in-up" className="card  bg-[#E9EFEC] ">
<div className="card-body">
<div className="flex justify-between items-center">
<h2 className="card-title">{visa?.name}</h2>
<img src={visa?.img} alt="" className="w-14 h-14 animate-pulse rounded-full" />
</div>
<div className="divider divider-success"></div>

  <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>We are using cookies for no reason.</p>
  <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>{visa?.visaType}</p>
  <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Processing Time: {visa?.processingTime}</p>
  <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Fee: {visa?.fee} $</p>
  <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Validity: {visa?.validity}</p>
  <p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Application by {visa?.application}</p>
  <div className="card-actions justify-end">
   <Link to={`/visaDetails/${visa?._id}`}> <button className="btn bg-[#1C7A9C] text-white">See Details</button></Link>
   
  </div>
</div>
</div>
              )
          }
      </div>
     <div className="flex justify-center mt-6">
    <Link to={'/allVisa'}> <button className="btn  bg-[#1C7A9C] text-white"> See All Visa</button></Link>
     </div>
      </div>
    );
};

export default LatestVisas;