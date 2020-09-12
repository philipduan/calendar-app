import React from "react";
import { Grid, Typography } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { SelectionMode } from "./index";
import "./calendar.css";
interface Props {
  monthName: string;
  month: number;
  setMonth: (month: number) => void;
  setModeSelection: (mode: string) => void;
  year: number;
  setYear: (year: number) => void;
}

const CalendarHeaderBar = (props: Props) => {
  const { monthName, month, setMonth, setModeSelection, year, setYear } = props;
  const handlePreviousButton = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextButton = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-evenly"
      alignItems="center"
      style={{ border: "1px solid black", backgroundColor: "#e63946" }}
    >
      <Grid item xs={2}>
        <KeyboardArrowLeftIcon
          style={{ color: "#ffffff" }}
          className="clickable"
          onClick={handlePreviousButton}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography
          className="clickable"
          variant="h5"
          align="center"
          style={{ color: "#ffffff" }}
          onClick={() => setModeSelection(SelectionMode.Month)}
        >
          {monthName}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography
          className="clickable"
          variant="h5"
          align="center"
          style={{ color: "#ffffff" }}
          onClick={() => setModeSelection(SelectionMode.Year)}
        >
          {year}
        </Typography>
      </Grid>
      <Grid container item xs={2} justify="flex-end">
        <KeyboardArrowRightIcon
          style={{ color: "#ffffff" }}
          className="clickable"
          onClick={handleNextButton}
        />
      </Grid>
    </Grid>
  );
};

export default CalendarHeaderBar;
