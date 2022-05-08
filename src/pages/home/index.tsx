import { ChangeEvent, FC, useRef, useState } from 'react';
import { Button, Checkbox, Input } from '../../components';
import { checkForbiddenChars } from '../../utils/validation';

const checkValues = [
  {
    label: 'Do you pick your nose?',
    checked: false,
    required: true,
  },
  {
    label: 'Does your breath smell nice?',
    checked: false,
    required: false,
  },
  {
    label:
      'Do you approve pull requests without checking if the code actually works?',
    checked: false,
    required: false,
  },
  {
    label: 'Did you enjoy this filling in this form?',
    checked: false,
    required: true,
  },
  {
    label: 'Do you approve of this message?',
    checked: false,
    required: false,
  },
];

const Home: FC = () => {
  const [firstInput, setFirstInput] = useState('');
  const [checks, setChecks] = useState(checkValues);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length % 5 === 0) {
      buttonRef.current?.focus();
    }
    setFirstInput(e.target.value);
  };

  const clearInput = () => {
    setFirstInput('');
  };

  const handleCheck = (e: number) => {
    setChecks(
      checks.map((item, i) => {
        return e === i ? { ...item, checked: !item.checked } : item;
      })
    );
  };

  const incorrectText = checkForbiddenChars(firstInput);
  const missingChecks =
    checks.find((item) => item.required && !item.checked) !== undefined;
  const validForm = !missingChecks && !incorrectText && firstInput.length > 0;

  return (
    <main className="w-screen h-screen bg-slate-100">
      <section className="w-full h-full max-w-screen-lg mx-auto px-5 lg:px-10 flex justify-center items-center">
        <div className="space-y-4 shadow-lg p-10 w-full bg-white hover:-rotate-90 transition-all duration-50000">
          <h1 className="text-3xl font-bold">Expereo assignment form</h1>
          <Input
            placeholder="John Doe"
            value={firstInput}
            classNameInput={firstInput.length > 4 ? '-rotate-180 pl-8' : ''}
            label="Your name"
            alert={incorrectText ? 'Invalid characters used!' : undefined}
            onChange={handleChange}
            clearInput={clearInput}
          />
          <div className="flex flex-col space-y-4">
            <p className="italic text-sm">Some of these are required:</p>
            {checks.map((item, i) => (
              <Checkbox
                labelClassName="text-left"
                key={i}
                active={item.checked}
                label={item.label}
                onClick={() => handleCheck(i)}
              />
            ))}
          </div>
          <Button
            disabled={!validForm}
            buttonRef={buttonRef}
            className="w-full font-bold"
          >
            Submit
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
