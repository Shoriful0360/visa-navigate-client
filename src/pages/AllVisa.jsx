
import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const CheckboxField = () => {

  const{visas}=useContext(authContext)

  return (
    <div>
    <h1 className="text-3xl text-center mb-4 text-red-500">All visas</h1>
   <div className="flex justify-center mb-10">
   <div className="dropdown  dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">filter</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
   </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
      
      {
          visas?.map(visa=>
              <div key={visa._id} className="card bg-[#E9EFEC] ">
<div className="card-body">
<div className="flex justify-between items-center">
<h2 className="card-title">{visa?.name}</h2>
<img src={visa?.img} alt="" className="w-14 h-14 rounded-full" />
</div>
<div className="divider divider-success"></div>

<p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>We are using cookies for no reason.</p>
<p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>{visa?.visaType}</p>
<p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Processing Time: {visa?.processingTime}</p>
<p className="flex items-center gap-3"><IoCheckmark></IoCheckmark>Fee: {visa?.fee} $</p>
<div className="card-actions justify-end">
<Link to={`/visaDetails/${visa?._id}`}> <button className="btn bg-[#1C7A9C] text-white">See Details</button></Link>

</div>
</div>
</div>
          )
      }
  </div>
  </div>
  );
};

export default CheckboxField;
