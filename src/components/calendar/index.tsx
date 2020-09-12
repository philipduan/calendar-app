import React, { useState, useEffect, useContext, useCallback } from "react";
import moment from "moment";
import CalendarBodyDay from "./CalendarBodyDay";
import CalendarHeaderBar from "./CalendarHeaderBar";
import CalenderWeekdaysBar from "./CalenderWeekdaysBar";
import CalendarBodyMonth from "./CalendarBodyMonth";
import CalendarBodyYear from "./CalendarBodyYear";
import AppContext from "../../context";
import { ReducerTypes } from "../../reducer";

export enum SelectionMode {
  None = "",
  Month = "MONTH",
  Year = "YEAR",
}
export interface DayDetail {
  day: number;
  month: number;
  year: number;
  ofMonth: boolean;
  today: boolean;
  selected: boolean;
}

const Calendar = () => {
  const monthLongNameArry: Array<string> = moment.months();

  const { dispatch } = useContext(AppContext);

  const dateDispatch = useCallback(
    (date) =>
      dispatch({
        type: ReducerTypes.UpdateDate,
        payload: date,
      }),
    [dispatch]
  );

  const [date, setDate] = useState(moment().date());
  const [weeks, setWeeks] = useState<Array<Array<DayDetail>>>([]);
  const [month, setMonth] = useState<number>(+moment().month());
  const [year, setYear] = useState<number>(moment().year());
  const [modeSelection, setModeSelection] = useState<string>("");

  useEffect(() => {
    dateDispatch(`${date}-${month + 1}-${year}`);
    const today = moment();
    const selectedDate = moment(`${date}-${month + 1}-${year}`, "DD-MM-YYYY");
    const selectedDateMonth = selectedDate.month();
    const selectedDateYear = selectedDate.year();
    const numberOfDaysOfPreviousMonth = +moment(
      `${selectedDate.year()}-${
        selectedDate.month() ? selectedDate.month() : "12"
      }`,
      "YYYY-MM"
    ).daysInMonth();
    const firstDayOfMonth: number = +moment(selectedDate)
      .startOf("month")
      .format("d");
    let days: Array<DayDetail> = [];
    const results: Array<Array<DayDetail>> = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({
        day: numberOfDaysOfPreviousMonth - firstDayOfMonth + i + 1,
        month: selectedDateMonth ? selectedDateMonth - 1 : 11,
        year: selectedDateMonth ? selectedDateYear : selectedDateYear - 1,
        ofMonth: false,
        today: false,
        selected: false,
      });
    }

    for (let i = 1; i <= selectedDate.daysInMonth(); i++) {
      days.push({
        day: +i,
        month: selectedDateMonth,
        year: selectedDateYear,
        ofMonth: true,
        today:
          today.date() === i &&
          today.month() === selectedDateMonth &&
          today.year() === selectedDateYear,
        selected:
          date === i &&
          today.month() === selectedDateMonth &&
          today.year() === selectedDateYear,
      });
    }

    const missingDays = 42 - days.length;
    for (let i = days.length; i < 42; i++) {
      days.push({
        day: missingDays - (42 - i) + 1,
        month: selectedDateMonth === 11 ? 0 : selectedDateMonth + 1,
        year:
          selectedDateMonth === 11 ? selectedDateYear + 1 : selectedDateYear,
        ofMonth: false,
        today: false,
        selected: false,
      });
    }

    for (let i = 0; i < 6; i++) {
      results.push(days.slice(7 * i, 7 * (i + 1)));
    }

    setWeeks(results);

    return () => {};
  }, [date, month, year, dateDispatch]);

  return (
    <div>
      <CalendarHeaderBar
        monthName={monthLongNameArry[month]}
        month={month}
        setMonth={setMonth}
        setModeSelection={setModeSelection}
        year={year}
        setYear={setYear}
      />
      <CalenderWeekdaysBar mode={modeSelection} />
      {modeSelection === SelectionMode.Year ? (
        <CalendarBodyYear
          setYear={setYear}
          setModeSelection={setModeSelection}
        />
      ) : modeSelection === SelectionMode.Month ? (
        <CalendarBodyMonth
          monthLongNameArry={monthLongNameArry}
          setMonth={setMonth}
          setModeSelection={setModeSelection}
        />
      ) : (
        <CalendarBodyDay weeks={weeks} setDate={setDate} />
      )}
    </div>
  );
};

export default Calendar;
