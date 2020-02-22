import React from 'react';

const Input = ({
  label = 'Default Label',
  type = 'text',
  name = '',
  value = '',
  onChange = null,
}) => {
  const changeToInput = (event) => {
    event.preventDefault();
    onChange();
  };
  return (
    <label htmlFor={name} className="label">
      {label}
      <input type={type} name={name} value={value} className="input" onChange={(event) => changeToInput(event)} />
    </label>
  );
};

export default Input;
