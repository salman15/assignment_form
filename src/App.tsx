import { ChangeEvent, FC, useState } from 'react';
import Button from './components/button/Button';
import Form from './components/form/Form';
import Input from './components/input/Input';
import { checkForbiddenChars } from './utils/validation';

/**
 * ideas
 * fade in text when validation fails with requirement
 */

const App: FC = () => {
  const [firstInput, setFirstInput] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstInput(e.target.value);
  };

  const forbiddenInput = checkForbiddenChars(firstInput);
  return (
    <main className="w-screen h-screen bg-slate-100">
      <section className="w-full h-full max-w-screen-lg mx-auto px-5 lg:px-10 flex justify-center items-center">
        <Form className="space-y-4 shadow-lg p-10 w-full bg-white hover:-rotate-90 transition-all duration-50000">
          <h1 className="text-3xl font-bold">Form</h1>
          <Input
            classNameInput={firstInput.length > 4 ? '-rotate-180' : ''}
            label="Hello world"
            alert={
              firstInput.length > 0 && forbiddenInput
                ? 'Invalid characters used!'
                : undefined
            }
            onChange={handleChange}
          />
          <Input label="Hello world" alert="Goodbye world" />
          <Input label="Hello world" alert="Goodbye world" />
          <Button className="w-full font-bold">Submit</Button>
        </Form>
      </section>
    </main>
  );
};

export default App;
