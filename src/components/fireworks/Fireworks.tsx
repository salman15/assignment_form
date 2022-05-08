import { CreateTypes } from 'canvas-confetti';
import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const canvasStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
};

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getAnimationSettings = (originXA: number, originXB: number) => {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
};

type ChildProps = { start?: () => void; stop: () => void; pause: () => void };

interface IFireworks {
  // eslint-disable-next-line no-undef
  children: (e: ChildProps) => JSX.Element;
}

const Fireworks: FC<IFireworks> = ({ children }) => {
  const refAnimationInstance = useRef<CreateTypes | null>(null);
  const [intervalId, setIntervalId] = useState<number | undefined>();

  const getInstance = useCallback((instance: CreateTypes | null) => {
    if (refAnimationInstance.current === null) startAnimation();
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(window.setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(undefined);
  }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(undefined);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      {children({
        start: startAnimation,
        stop: stopAnimation,
        pause: pauseAnimation,
      })}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  );
};

export default Fireworks;
