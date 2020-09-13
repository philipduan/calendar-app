import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import { DayDetail } from "./index";
import "./calendar.css";
import AppContext from "../../context";
import { ReducerTypes } from "../../reducer";

interface Props {
  weeks: Array<Array<DayDetail>>;
  setDate: (date: number) => void;
}

const CalendarBodyDay = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  const { eventList } = state;

  const { weeks, setDate } = props;

  const selectedDayClick = (dayDetail: DayDetail) => {
    if (dayDetail.ofMonth) setDate(dayDetail.day);
    dispatch({
      type: ReducerTypes.UpdateDate,
      payload: `${dayDetail.day}-${dayDetail.month < 9 ? "0" : ""}${
        dayDetail.month + 1
      }-${dayDetail.year}`,
    });
  };

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
                className={`hover  clickable ${
                  dayDetail.selected
                    ? "selected"
                    : dayDetail.today
                    ? "today"
                    : ""
                }`}
                item
                key={+`${weekIndex}${dayIndex}${dayDetail.day}`}
                xs={1}
                onClick={() => selectedDayClick(dayDetail)}
              >
                <Typography
                  variant="h5"
                  align="center"
                  style={{ color: dayDetail.ofMonth ? "#000000" : "#a7afb2" }}
                >
                  {dayDetail.day || ""}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  style={{
                    color: "#a8dadc",
                    visibility:
                      eventList[
                        `${dayDetail.day}-${dayDetail.month < 9 ? "0" : ""}${
                          dayDetail.month + 1
                        }-${dayDetail.year}`
                      ] &&
                      eventList[
                        `${dayDetail.day}-${dayDetail.month < 9 ? "0" : ""}${
                          dayDetail.month + 1
                        }-${dayDetail.year}`
                      ].length
                        ? "visible"
                        : "hidden",
                  }}
                >
                  {eventList[
                    `${dayDetail.day}-${dayDetail.month < 9 ? "0" : ""}${
                      dayDetail.month + 1
                    }-${dayDetail.year}`
                  ]
                    ? eventList[
                        `${dayDetail.day}-${dayDetail.month < 9 ? "0" : ""}${
                          dayDetail.month + 1
                        }-${dayDetail.year}`
                      ].length
                    : `0`}
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
