import React from "react";
import CalendarBody from "./CalendarBody";
import CalenderWeekdaysBar from "./CalenderWeekdaysBar";

const Calendar = () => {
  return (
    <div>
      <CalenderWeekdaysBar />
      <CalendarBody />
    </div>
  );
};

export default Calendar;
