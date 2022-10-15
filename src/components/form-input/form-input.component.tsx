import React from 'react';

import './form-input.styles.scss';

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  name: string;
  value?: string;
}

const FormInput = ({ handleChange, label, type, name, value }: IProps) => (
  <div className="group">
    <input
      className="form-input"
      type={type}
      name={name}
      onChange={handleChange}
    />
    {label ? (
      <label
        className={`${value ? (value ? 'shrink' : '') : ''} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
