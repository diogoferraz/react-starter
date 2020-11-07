import React from 'react';

const Button = ({
  onSubmit,
  label,
  disabled = false,
  extraClass = '',
}) => (
  <button className={`button ${extraClass}`} type="button" onClick={onSubmit} disable={disabled}>{label}</button>
);

export default Button;
