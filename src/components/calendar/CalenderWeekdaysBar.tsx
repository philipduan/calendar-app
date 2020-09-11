import React from "react";
import moment from "moment";
import { Grid, Typography } from "@material-ui/core";

const CalenderWeekdaysBar = () => {
  const weekdayShortName: Array<string> = moment.weekdaysShort();
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="space-evenly"
      alignItems="center"
      style={{ border: "1px solid black", backgroundColor: "#1d3557" }}
    >
      {weekdayShortName.map((weekday: string) => (
        <Grid item key={weekday} xs={1}>
          <Typography variant="h5" align="center" style={{ color: "#ffffff" }}>
            {weekday}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default CalenderWeekdaysBar;
