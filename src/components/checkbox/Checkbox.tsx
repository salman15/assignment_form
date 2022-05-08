import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

interface ICheckbox {
  active: boolean;
  label?: string;
  onClick?: () => void;
  className?: string;
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
}) => {
  return (
    <button
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
