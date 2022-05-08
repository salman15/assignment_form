import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { LinksValues } from '../../data/check';

interface ILinks {
  link: string;
  valid: boolean;
  handle: (e: string) => void;
  clear: () => void;
}

const Links: FC<ILinks> = ({ link, valid, handle, clear }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <p className="font-bold">Link Assemble! (Assemble the correct link)</p>
        {valid && (
          <FontAwesomeIcon className="ml-2 text-green-500" icon={faCheck} />
        )}
      </div>
      <p>
        Link: {link}
        {link.length > 0 && (
          <button className="ml-4" aria-label="Clear links" onClick={clear}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </p>
      <ul className="flex space-x-2">
        {LinksValues.map((item) => (
          <li key={item}>
            <button onClick={() => handle(item)}>{item}</button>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Links;
