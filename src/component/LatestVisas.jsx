import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";


const LatestVisas = () => {
    const{visas}=useContext(authContext)
    const visa=visas.slice(0,6)
    

    return (
      <div>
        <h1 className="text-3xl text-center mb-4 text-red-500">Latest visas</h1>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          
          {
              visa?.map(visa=>
                  <div key={visa._id} className="card bg-neutral text-neutral-content">
<div className="card-body items-center text-center">
  <h2 className="card-title">Cookies!</h2>
  <p>We are using cookies for no reason.</p>
  <div className="card-actions justify-end">
    <button className="btn btn-primary">Accept</button>
    <button className="btn btn-ghost">Deny</button>
  </div>
</div>
</div>
              )
          }
      </div>
      </div>
    );
};

export default LatestVisas;