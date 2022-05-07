import Form from './components/form/Form';
import Input from './components/input/Input';

function App() {
  return (
    <main className="w-screen h-screen">
      <section className="w-full h-full">
        <Form>
          <Input label="Hello world" />
        </Form>
      </section>
    </main>
  );
}

export default App;
