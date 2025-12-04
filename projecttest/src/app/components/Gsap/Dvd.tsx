'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DVDBounce() {
  const dvdRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 100, y: 100 });
  const velocity = useRef({ x: 2, y: 2 });
  const frameRef = useRef<number>(null);

  useEffect(() => {
    const el = dvdRef.current;
    if (!el) return;

    const parent = el.parentElement;

    const animate = () => {
      if (!el || !parent) return;

      const parentRect = parent.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Bounce logic
      if (position.current.x + elRect.width >= parentRect.width || position.current.x <= 0) {
        velocity.current.x *= -1;
      }
      if (position.current.y + elRect.height >= parentRect.height || position.current.y <= 0) {
        velocity.current.y *= -1;
      }

      // Update position
      position.current.x += velocity.current.x;
      position.current.y += velocity.current.y;

      gsap.set(el, {
        x: position.current.x,
        y: position.current.y,
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current!);
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      <div
        ref={dvdRef}
        className="absolute top-0 left-0 w-24 h-12 bg-pink-500 rounded-md text-white font-bold flex items-center justify-center shadow-lg"
      >
        DVD
      </div>
    </div>
  );
}
