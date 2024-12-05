
import { useContext, useState } from "react";

const CheckboxField = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);

  // Checkbox options
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions((prev) => [...prev, value]);
      console.log(`Checked: ${value}`);
    } else {
      setSelectedOptions((prev) => prev.filter((opt) => opt !== value));
      console.log(`Unchecked: ${value}`);
    }
  };

  return (
    <div className="checkbox-field p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Choose Your Options</h2>
      <form>
        {options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value={option}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </form>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Selected Options:</h3>
        <ul className="list-disc list-inside mt-2">
          {selectedOptions.length > 0 ? (
            selectedOptions.map((opt, index) => (
              <li key={index} className="text-gray-700">{opt}</li>
            ))
          ) : (
            <p className="text-gray-500">No options selected.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxField;
