import React, { useState } from "react";
import moment from "moment";
import { Grid, Typography } from "@material-ui/core";

interface DayDetail {
  day: number;
  month: number;
  year: number;
  ofMonth: boolean;
}
const CalendarBody = () => {
  const createWeeksArray = () => {
    const today = moment("2020-12", "YYYY-MM");
    const currentMonth = today.month();
    const currentYear = today.year();
    const numberOfDaysOfPreviousMonth = +moment(
      `${today.year()}-${today.month() ? today.month() : "12"}`,
      "YYYY-MM"
    ).daysInMonth();
    const firstDayOfMonth: number = +today.startOf("month").format("d");
    let days: Array<DayDetail> = [];
    const weeks: Array<Array<DayDetail>> = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({
        day: numberOfDaysOfPreviousMonth - firstDayOfMonth + i + 1,
        month: currentMonth ? currentMonth - 1 : 11,
        year: currentMonth ? currentYear : currentYear - 1,
        ofMonth: false,
      });
    }

    for (let i = 1; i <= today.daysInMonth(); i++) {
      days.push({
        day: +i,
        month: currentMonth,
        year: currentYear,
        ofMonth: true,
      });
    }

    const missingDays = 42 - days.length;
    for (let i = days.length; i < 42; i++) {
      days.push({
        day: missingDays - (42 - i) + 1,
        month: currentMonth === 11 ? 0 : currentMonth + 1,
        year: currentMonth === 11 ? currentYear + 1 : currentYear,
        ofMonth: false,
      });
    }

    for (let i = 0; i < 6; i++) {
      weeks.push(days.slice(7 * i, 7 * (i + 1)));
    }
    return weeks;
  };

  const weeks = createWeeksArray();
  console.log("CalendarBody -> weeks", weeks);
  return (
    <Grid
      container
      spacing={2}
      style={{
        border: "1px solid black",
        backgroundColor: "#f1faee",
        height: "100%",
      }}
    >
      {weeks.map((week: Array<DayDetail>, weekIndex: number) => (
        <Grid
          key={weekIndex}
          container
          item
          xs={12}
          spacing={1}
          direction="row"
          justify="space-evenly"
          alignContent="center"
        >
          {week.map((dayDetail: DayDetail, dayIndex: number) => (
            <Grid item key={+`${weekIndex}${dayIndex}${dayDetail.day}`} xs={1}>
              <Typography
                variant="h5"
                align="center"
                style={{ color: dayDetail.ofMonth ? "#000000" : "#a7afb2" }}
              >
                {dayDetail.day || ""}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default CalendarBody;
