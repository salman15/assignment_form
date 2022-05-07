import { FC, ReactNode } from 'react';

interface IForm {
  children: ReactNode;
}

const Form: FC<IForm> = ({ children }) => {
  return <form className="rounded">{children}</form>;
};

export default Form;
