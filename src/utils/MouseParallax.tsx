'use client'
import { useEffect, useState, ReactNode, HTMLAttributes } from 'react';

interface MouseParallaxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  factorX?: number;
  factorY?: number;
  maxX?: number;
  maxY?: number;
}

const MouseParallax = ({
  children,
  factorX = 0.1,
  factorY = 0.1,
  maxX = 50,
  maxY = 50,
  className,
  style,
  ...rest
}: MouseParallaxProps) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xRaw = (window.innerWidth / 2 - e.clientX) * factorX;
      const yRaw = (window.innerHeight / 2 - e.clientY) * factorY;

      const x = Math.max(Math.min(xRaw, maxX), -maxX);
      const y = Math.max(Math.min(yRaw, maxY), -maxY);

      setPos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [factorX, factorY, maxX, maxY]);

  return (
    <div
      className={className}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default MouseParallax;
