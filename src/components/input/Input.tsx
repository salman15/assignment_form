import React, { FC } from 'react';
import { HTMLComponent } from '../../interfaces';

export interface Iinput extends HTMLComponent {
  label?: string;
  name?: string | undefined;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  alert?: string;
  className?: string;
  classNameInput?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
}

const Input: FC<Iinput> = ({
  name,
  type,
  label,
  value,
  placeholder,
  className,
  classNameInput,
  alert,
  inputRef,
  onChange,
  onKeyDown,
}) => {
  return (
    <div className={className}>
      {label && <label className="font-bold">{label}</label>}
      <input
        ref={inputRef}
        className={`${classNameInput} rounded border-inactive border w-full pl-4 pr-8 py-1 focus-visible:blue`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {alert && <p className="text-red-700 italic text-sm">{alert}</p>}
    </div>
  );
};

export default Input;
