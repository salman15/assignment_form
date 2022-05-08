import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { HTMLComponent } from '../../interfaces';

interface ICheckbox extends HTMLComponent {
  active: boolean;
  label?: string;
  onClick?: () => void;
  labelClassName?: string;
  checkboxClassName?: string;
}

const Checkbox: FC<ICheckbox> = ({
  active,
  label,
  onClick,
  className = '',
  labelClassName = '',
  checkboxClassName = '',
  role,
}) => {
  return (
    <button
      role={role}
      className={`flex items-center ${className} cursor-pointer`}
      onClick={onClick}
    >
      <FontAwesomeIcon
        className={`mr-2 text-blue-500 ${checkboxClassName}`}
        size="1x"
        icon={active ? faCheckSquare : faSquare}
      />
      {label && <p className={` ${labelClassName}`}>{label}</p>}
    </button>
  );
};

export default Checkbox;
