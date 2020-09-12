import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { DayDetail } from "./index";
import "./calendar.css";

interface Props {
  weeks: Array<Array<DayDetail>>;
  setDate: (date: number) => void;
}

const CalendarBodyDay = (props: Props) => {
  const { weeks, setDate } = props;

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
      {weeks.length ? (
        weeks.map((week: Array<DayDetail>, weekIndex: number) => (
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
              <Grid
                className={`${dayDetail.today ? "today" : ""} ${
                  dayDetail.ofMonth ? "hover clickable" : ""
                } ${dayDetail.selected ? "selected" : ""}`}
                item
                key={+`${weekIndex}${dayIndex}${dayDetail.day}`}
                xs={1}
                onClick={() => setDate(dayDetail.day)}
              >
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
        ))
      ) : (
        <div />
      )}
    </Grid>
  );
};

export default CalendarBodyDay;
