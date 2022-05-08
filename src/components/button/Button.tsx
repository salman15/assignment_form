import { FC, ReactNode, RefObject } from 'react';
import { HTMLComponent } from '../../interfaces';

export const buttonTypes = {
  base: '',
  default: 'rounded-full py-2 px-4 bg-blue-500 text-white',
};

export interface IButton extends HTMLComponent {
  children?: ReactNode;
  type?: keyof typeof buttonTypes;
  disabled?: boolean;
  buttonRef?: RefObject<HTMLButtonElement>;
  onClick?: (e: unknown) => void;
}

const Button: FC<IButton> = ({
  children,
  className,
  type = 'default',
  disabled,
  onClick,
  buttonRef,
}) => {
  const selectedType = buttonTypes[type];
  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`${className} ${selectedType} ${disabled ? 'opacity-30' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
