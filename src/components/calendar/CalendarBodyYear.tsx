import React, { useState, useEffect } from "react";
import moment from "moment";
import { Grid, Typography } from "@material-ui/core";
import { SelectionMode } from ".";

interface Props {
  setYear: (year: number) => void;
  setModeSelection: (mode: string) => void;
}
const CalendarBodyYear = (props: Props) => {
  const { setYear, setModeSelection } = props;

  const [years, setYears] = useState<Array<Array<number>>>([]);

  useEffect(() => {
    const yearsArr: Array<Array<number>> = [];
    const currentYear = moment().year();
    for (let i = 0; i < 4; i++) {
      //Create 4 rows 3 columns of years
      yearsArr.push([
        currentYear + 3 * i,
        currentYear + 3 * i + 1,
        currentYear + 3 * i + 2,
      ]);
    }
    setYears(yearsArr);
    return () => {};
  }, []);

  const handleYearClick = (year: number) => {
    setYear(year);
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
      {years.length ? (
        years.map((yearsArr: Array<number>, index: number) => (
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
            {yearsArr.map((year: number) => (
              <Grid item key={`${year}`} xs={4} className="clickable hover">
                <Typography
                  variant="h5"
                  align="center"
                  onClick={() => handleYearClick(year)}
                >
                  {`${year}`}
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

export default CalendarBodyYear;
