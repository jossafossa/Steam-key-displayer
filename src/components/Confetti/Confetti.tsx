import { useEffect, useState } from "react";
import ConfettiBoom from "react-confetti-boom";

type ConvettiBoom = {
  x: number;
  y: number;
};

const SPAWN_EVERY_MS = 2000;
const BOOM_DURATION_MS = 4000;

export const Confetti = () => {
  const [confettiBooms, setConfettiBooms] = useState<ConvettiBoom[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = Math.random();
      const y = Math.random();
      setConfettiBooms((prev) => [...prev, { x, y }]);
      setTimeout(() => {
        setConfettiBooms((prev) => prev.slice(1));
      }, BOOM_DURATION_MS);
    }, SPAWN_EVERY_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ConfettiBoom mode="fall" />
      {confettiBooms.map(({ x, y }) => (
        <ConfettiBoom key={`${x}-${y}`} x={x} y={y} mode="boom" />
      ))}
    </>
  );
};
