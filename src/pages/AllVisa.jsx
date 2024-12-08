
import { useContext, useEffect, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";
import NoData from "../component/NoData";
import { Typewriter } from "react-simple-typewriter";

const CheckboxField = () => {
  const visaType = ['Job Visa', 'Student Visa', 'Bunsiness Visa', 'Tourist Visa', 'Official Visa', 'Residential Visa']
  const [filter, setFilter] = useState([])

  const { visas, setVisas } = useContext(authContext)

  const handleFilterSubmit = (e) => {
    e.preventDefault()
    const filter = e.target.value;
    setFilter(filter)
  }

  useEffect(() => {
    fetch(`https://visa-navigator-server-ten.vercel.app/allvisas?searchParams=${filter}`)
      .then(res => res.json())
      .then(data => setVisas(data))

  }, [filter])

  return (
    <div>


      <select onChange={handleFilterSubmit} name="filter" className="select mt-5 select-bordered w-full max-w-xs">
        <option disabled selected>Filter</option>
        {visaType.map((type, idx) => <option key={idx}>{type}</option>)}
      </select>

      {
        visas?.length ?
          <div>
            <h1 className="text-3xl text-center mb-3 font-bold">

              <span style={{ color: '#034833' }}>
                <Typewriter
                  words={['All Visa']}
                  loop={0} // Loops 5 times
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className="grid lg:grid-cols-3 gap-4 mt-5 md:grid-cols-2">

              {
                visas?.map(visa =>
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
          :
          <NoData></NoData>
      }
    </div>
  );
};

export default CheckboxField;
