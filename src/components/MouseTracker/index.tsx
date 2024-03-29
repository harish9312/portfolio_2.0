"use client";
import { useEffect, useState } from "react";

export const MouseTracker = () => {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  const onMove = (e: MouseEvent) => {
    setClientX(e.clientX);
    setClientY(e.clientY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="mouse-tracker"
      style={{
        background: `radial-gradient(500px at ${clientX}px ${clientY}px, rgba(150, 133, 133, 0.20), transparent 80%)`,
      }}
    />
  );
};
