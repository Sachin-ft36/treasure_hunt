"use client";

import { useState, useEffect } from "react";

const GameTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState("15:55:00");

  useEffect(() => {
    // Timer logic could be implemented here
    // For now, displaying static time as per design
  }, []);

  return (
    <section className="flex flex-col self-start ml-16 max-md:ml-2.5">
      <p className="text-sm">Time remaining</p>
      <time className="self-start text-xl font-semibold tracking-wider">
        {timeRemaining}
      </time>
    </section>
  );
};

export default GameTimer;
