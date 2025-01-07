/* eslint-disable react/jsx-key */

import { useState } from "react";






const Text = () => {
    const options = ["Valid passport", "Visa application form", "Recent passport-sized photograph", "Proof of financial means", "Travel itinerary",];
    const [formData, setFormData] = useState({
        terms: [],
        name: "",
      });
    
 
    
      const handleCheckboxChange = (value) => {
        setFormData((prev) => {
          const terms = prev.terms.includes(value)
            ? prev.terms.filter((term) => term !== value)
            : [...prev.terms, value];
          return { ...prev, terms };
        });
      };
    
    //   const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    //   };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const name=e.target.name.value
        console.log("Selected Checkbox Values:",name, formData);
     
      };
    return (
  <div>
     <form onSubmit={handleSubmit}>
      <div className="form-control">
        {options.map((data) => (
          <label className="label cursor-pointer" key={data}>
            <div className="flex gap-5">
              <input
                type="checkbox"
                value={data}
                className="checkbox"
                onChange={() => handleCheckboxChange(data)}
              />
              <span className="label-text">{data}</span>
            </div>
          </label>
        ))}
      </div>
      <input
        type="text"
        name="name"
        className="border"
        value={formData.name}
      
        placeholder="Enter your name"
      />
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
   <div>
   
   </div>
  </div>
    );
};

export default Text;