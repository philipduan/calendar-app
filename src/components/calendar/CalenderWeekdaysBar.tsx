import React from "react";
import moment from "moment";
import { Grid, Typography } from "@material-ui/core";

interface Props {
  mode: string;
}
const CalenderWeekdaysBar = (props: Props) => {
  const { mode } = props;

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
      {mode ? (
        <Grid item xs={12}>
          <Typography variant="h5" align="center" style={{ color: "#ffffff" }}>
            {`Select a ${mode}`}
          </Typography>
        </Grid>
      ) : (
        weekdayShortName.map((weekday: string) => (
          <Grid item key={weekday} xs={1}>
            <Typography
              variant="h5"
              align="center"
              style={{ color: "#ffffff" }}
            >
              {weekday}
            </Typography>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CalenderWeekdaysBar;
