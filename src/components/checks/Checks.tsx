import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { ICheckValues } from '../../data/check';
import Checkbox from '../checkbox/Checkbox';

interface IChecks {
  checks: ICheckValues[];
  valid: boolean;
  handle: (i: number) => void;
}

const Checks: FC<IChecks> = ({ checks, valid, handle }) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center">
        <p className="italic text-sm">Some of these are required:</p>
        {!valid && (
          <FontAwesomeIcon className="ml-2 text-green-500" icon={faCheck} />
        )}
      </div>
      {checks.map((item, i) => (
        <Checkbox
          labelClassName="text-left"
          key={i}
          active={item.checked}
          label={item.label}
          onClick={() => handle(i)}
        />
      ))}
    </div>
  );
};

export default Checks;
