import React from "react";
import Grid from "@material-ui/core/Grid";
import Calendar from "./components/calendar";
function App() {
  return (
    <div className="App" style={{ padding: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Calendar />
        </Grid>
        <Grid item xs={4}>
          <p>Event List</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
