import React, { useState } from 'react';
import './Dynamic.css';

const DynamicForm = () => {
    const [fields, setFields] = useState([{ id: 1, value: '' }]);
  
    const addField = () => {
      setFields([...fields, { id: fields.length + 1, value: '' }]);
    };
  
    const removeField = (id) => {
      const updatedFields = fields.filter((field) => field.id !== id);
      setFields(updatedFields);
    };
  
    const handleChange = (id, value) => {
      const updatedFields = fields.map((field) =>
        field.id === id ? { ...field, value } : field
      );
      setFields(updatedFields);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(fields);
    };
  
    return (
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.id}>
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
              />
              <button type="button" onClick={() => removeField(field.id)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addField}>
            Add Field
          </button>
          <button type="submit">Submit</button>
        </form>
    );
  };


  export default DynamicForm;