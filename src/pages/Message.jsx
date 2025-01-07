import { useLoaderData } from "react-router-dom";


const Message = () => {
    
const loader=useLoaderData()
console.log(loader)
    return (
        <div>
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead className="">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Subject</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        loader?.map((item,idx)=>  <tr key={idx}>
        <th>{idx+1}</th>
        <td>{item?.name}</td>
        <td>{item?.email}</td>
        <td>{item.phone}</td>
        <td>{item.subject}</td>
        <td>{item.description}</td>
      </tr>)
      }
    
   
    </tbody>
  </table>
</div> 
        </div>
    );
};

export default Message;