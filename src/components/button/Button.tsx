import { FC, ReactNode } from 'react';
import { HTMLComponent } from '../../interfaces';

export const buttonTypes = {
  base: '',
  default: 'rounded-full py-2 px-4 bg-blue-500 text-white',
};

export interface IButton extends HTMLComponent {
  children?: ReactNode;
  type?: keyof typeof buttonTypes;
  disabled?: boolean;
  onClick?: (e: unknown) => void;
}

const Button: FC<IButton> = ({
  children,
  className,
  type = 'default',
  disabled,
  onClick,
}) => {
  const selectedType = buttonTypes[type];
  return (
    <button
      onClick={onClick}
      className={`${className} ${selectedType} ${disabled ? 'opacity-30' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
