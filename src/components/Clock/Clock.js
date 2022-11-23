import React, { useEffect, useState } from 'react';

const Clock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="clock">{clock}</div>;
};

export default Clock;
