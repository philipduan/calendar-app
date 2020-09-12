import React, { useContext } from "react";
import moment from "moment";
import { Avatar, CardHeader, Grid, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AppContext from "../../context";
import { Event as EventInterface, ReducerTypes } from "../../reducer";
import { EventTypes } from "../eventForm";

interface color {
  [key: string]: string;
}
const eventTypeColor: color = {
  [EventTypes.Appointment]: "#e63946",
  [EventTypes.Meeting]: "#a8dadc",
  [EventTypes.Task]: "#457b9d",
};

const Event = () => {
  const { state, dispatch } = useContext(AppContext);

  const deleteEvent = (index: number) => {
    dispatch({
      type: ReducerTypes.DeleteEvent,
      payload: index,
    });
  };
  return (
    <div>
      {state.selectedDate &&
      state.eventList &&
      state.eventList[state.selectedDate] &&
      state.eventList[state.selectedDate].length ? (
        state.eventList[state.selectedDate].map(
          (event: EventInterface, index: number) => (
            <CardHeader
              avatar={
                <Avatar style={{ backgroundColor: eventTypeColor[event.type] }}>
                  {event.type}
                </Avatar>
              }
              action={
                <DeleteIcon
                  style={{ marginTop: 15, cursor: "pointer" }}
                  onClick={() => {
                    deleteEvent(index);
                  }}
                />
              }
              title={event.name}
              subheader={moment(event.time, "HH:mm").format("hh:mm A")}
            />
          )
        )
      ) : (
        <Grid
          container
          justify="space-between"
          style={{ paddingLeft: 16, marginBottom: 20 }}
        >
          <Grid item xs={6}>
            <Typography variant="h6">No Events</Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Event;
