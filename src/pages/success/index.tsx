import { FC } from 'react';
import { Button, Fireworks } from '../../components';

const Success: FC = () => {
  return (
    <main className="w-screen h-screen bg-slate-100">
      <section className="w-full h-full max-w-screen-lg mx-auto px-5 lg:px-10 flex justify-center items-center">
        <div className="space-y-4 shadow-lg p-10 w-full bg-white ">
          <Fireworks>
            {({ pause, stop, start }) => {
              return (
                <>
                  <h1 className="font-bold text-4xl">Congratulations</h1>
                  <p>
                    Despite my best efforts you managed to successfully complete
                    the form!
                  </p>
                  <div className="p-4 border-2 border-gray-200 rounded space-y-4">
                    <p className="italic text-sm">Fireworks controls:</p>
                    <div className="space-x-4 ">
                      <Button onClick={start}>Start</Button>
                      <Button onClick={pause}>Pause</Button>
                      <Button onClick={stop}>Stop</Button>
                    </div>
                  </div>
                </>
              );
            }}
          </Fireworks>
        </div>
      </section>
    </main>
  );
};

export default Success;
