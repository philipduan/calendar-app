import { Grid, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { SelectionMode } from ".";
import "./calendar.css";

interface Props {
  monthLongNameArry: Array<string>;
  setMonth: (month: number) => void;
  setModeSelection: (mode: string) => void;
}
const CalendarBodyMonth = (props: Props) => {
  const { monthLongNameArry, setMonth, setModeSelection } = props;

  const [months, setMonths] = useState<Array<Array<string>>>([]);

  useEffect(() => {
    let monthArr: Array<Array<string>> = [];
    for (let i = 0; i < 4; i++) {
      //Create 4 rows 3 columns of month name
      monthArr.push(monthLongNameArry.slice(3 * i, 3 * (i + 1)));
    }
    setMonths(monthArr);
    return () => {};
  }, [monthLongNameArry]);

  const handleMonthClick = (monthIndex: number) => {
    setMonth(monthIndex);
    setModeSelection(SelectionMode.None);
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        border: "1px solid black",
        backgroundColor: "#f1faee",
        height: 420,
      }}
    >
      {months.length ? (
        months.map((monthsArr: Array<string>, index: number) => (
          <Grid
            key={index}
            container
            item
            xs={12}
            spacing={1}
            direction="row"
            justify="space-evenly"
            alignContent="center"
          >
            {monthsArr.map((month: string, subIndex: number) => (
              <Grid item key={`${month}`} xs={4} className="clickable hover">
                <Typography
                  variant="h5"
                  align="center"
                  onClick={() => handleMonthClick(3 * index + subIndex)}
                >
                  {`${month}`}
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

export default CalendarBodyMonth;
