import React, { useState } from 'react';
import CustomDropdown from './CustomDropdown';
import formConfig from '../data/formConfig.json';

const FormComponent = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [formValues, setFormValues] = useState(null);

  const handleSelectionChange = (id, selectedOptions) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [id]: selectedOptions,
    }));
  };

  const handleApplyFilter = () => {
    setFormValues(selectedValues);
  };

  return (
    <div>
      {formConfig.map((config) => (
        <div key={config.id} className="form-field">
          <CustomDropdown
            config={config}
            onSelectionChange={handleSelectionChange}
          />
        </div>
      ))}
      <button onClick={handleApplyFilter}>Apply Filter</button>
      {formValues && (
        <div className="form-values">
          <h3>Form Values</h3>
          <pre>{JSON.stringify(formValues, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
