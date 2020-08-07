import React from 'react';

function FormField({label, name, type, value, onChange}) {
    return (
        <div>
        <label>
          {label} 
          <input type={type} 
          label={label}
          value={value} 
          name={name}
           onChange={onChange} />
        </label>
        </div>
      

    )
}

export default FormField;