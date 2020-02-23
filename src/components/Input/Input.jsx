import React, { useState } from 'react';
import './styles.scss';

const Input = ({
  label = 'Default Label',
  type = 'text',
  name = '',
  value = '',
  onChange = () => null,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const changeToInput = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    onChange(event);
  };
  return (
    <label htmlFor={name} className="input-wrapper">
      <span className="label">{label}</span>
      <input type={type} name={name} value={inputValue} className="input" onChange={(event) => changeToInput(event)} />
    </label>
  );
};

export default Input;
