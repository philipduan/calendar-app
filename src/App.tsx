import React, { useState, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import Calendar from "./components/calendar";
import EventList from "./components/eventList";
import EventForm from "./components/eventForm";
import { Dialog } from "@material-ui/core";
import reducer from "./reducer";
import AppContext, { initialState } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App" style={{ padding: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Calendar />
          </Grid>
          <Grid item xs={4}>
            <EventList isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
          </Grid>
        </Grid>
        <Dialog open={isFormOpen}>
          <EventForm setIsFormOpen={setIsFormOpen} />
        </Dialog>
      </div>
    </AppContext.Provider>
  );
}

export default App;
