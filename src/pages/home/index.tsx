import { ChangeEvent, FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Checks, Input, Links } from '../../components';
import { checkValues } from '../../data/check';
import { checkForbiddenChars } from '../../utils/validation';

const Home: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [checks, setChecks] = useState(checkValues);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length % 5 === 0) {
      buttonRef.current?.focus();
    }
    setName(e.target.value);
  };

  const clearInput = () => {
    setName('');
  };

  const handleCheck = (e: number) => {
    setChecks(
      checks.map((item, i) => {
        return e === i ? { ...item, checked: !item.checked } : item;
      })
    );
  };

  const handleRoute = () => {
    navigate('/success');
  };

  const addToLink = (e: string) => {
    const str = link.length === 0 ? e : `/${e}`;
    setLink(`${link}${str}`);
  };

  const clearLink = () => {
    setLink('');
  };

  const incorrectText = checkForbiddenChars(name);
  const missingChecks =
    checks.find((item) => item.required && !item.checked) !== undefined;
  const validLink = link === "You're/A/Wizard/Harry";
  const validForm =
    !missingChecks && !incorrectText && validLink && name.length > 0;

  return (
    <main className="w-screen h-screen bg-slate-100">
      <section className="w-full h-full max-w-screen-lg mx-auto px-5 lg:px-10 flex justify-center items-center">
        <div className="space-y-4 shadow-lg p-10 w-full bg-white hover:-rotate-90 transition-all duration-50000">
          <h1 className="text-3xl font-bold">Expereo assignment form</h1>
          <Input
            placeholder="John Doe"
            value={name}
            classNameInput={name.length > 4 ? '-rotate-180 pl-8' : ''}
            label="Your name (some characters are invalid, so make sure you have the right name!)"
            alert={incorrectText ? 'Invalid characters used!' : undefined}
            onChange={handleChange}
            clearInput={clearInput}
          />
          <Checks checks={checks} valid={missingChecks} handle={handleCheck} />
          <Links
            link={link}
            valid={validLink}
            handle={addToLink}
            clear={clearLink}
          />
          <Button
            onClick={handleRoute}
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
