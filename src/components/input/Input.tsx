import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  clearInput?: () => void;
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
  clearInput,
}) => {
  return (
    <div className={className}>
      {label && <label className="font-bold">{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          className={`${classNameInput} rounded border-inactive border w-full pl-4 pr-8 py-1 ${
            alert
              ? 'focus-visible:outline-red-700'
              : 'focus-visible:outline-blue-500'
          }`}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {value && value.length > 0 && (
          <button onClick={clearInput}>
            <FontAwesomeIcon
              className="absolute right-4 top-1/2 -translate-y-1/2"
              icon={faTimes}
            />
          </button>
        )}
      </div>
      {alert && <p className="text-red-700 italic text-sm">{alert}</p>}
    </div>
  );
};

export default Input;
