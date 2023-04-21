import React, { useState, useEffect } from "react";
import TimerList from "./components/TimerList";
import NewTimerForm from "./components/AddTimer";
import "./App.css";



function App() {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers(
        timers.map((timer) => {
          const remainingTime = timer.endTime - Date.now();
          if (remainingTime <= 0) {
            return null;
          }
          return { ...timer, remainingTime };
        }).filter(timer => timer !== null)
      );
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [timers]);

  const addTimer = (seconds) => {
    const newTimer = {
      startTime: Date.now(),
      endTime: Date.now() + seconds * 1000,
      remainingTime: seconds * 1000
    };
    setTimers([...timers, newTimer]);
  };

  const deleteTimer = (index) => {
    setTimers(timers.filter((timer, i) => i !== index));
  };

  return (
    <div className="container">
      
      <TimerList timers={timers} deleteTimer={deleteTimer} />
      <NewTimerForm addTimer={addTimer} />
    </div>
  );
}

export default App;
