import { FC, ReactNode } from 'react';
import { HTMLComponent } from '../../interfaces';

interface IForm extends HTMLComponent {
  children: ReactNode;
}

const Form: FC<IForm> = ({ children, className }) => {
  return <form className={`${className} rounded`}>{children}</form>;
};

export default Form;
