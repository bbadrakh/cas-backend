"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div>
      <p>Hello world</p>
      <p>{count}</p>
    </div>
  );
}
