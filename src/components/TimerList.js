import React from "react";
import TimerListItem from "./TimerListItem";

function TimerList({ timers, deleteTimer }) {
  return (
    <div className="timer-list">
      {/* <h2>Timers</h2> */}
      {timers.map((timer, index) => (
        <TimerListItem
          key={index}
          timer={timer}
          index={index}
          deleteTimer={deleteTimer}
        />
      ))}
    </div>
  );
}

export default TimerList;
