import { Avatar, Grid, Typography } from "@material-ui/core";
import React from "react";
import { EventTypes } from "../eventForm";
import { eventTypeColor } from "../eventList/event";

const Legend = () => {
  const eventDetailsArray = [
    {
      type: EventTypes.Appointment,
      name: "Appointment",
    },
    {
      type: EventTypes.Meeting,
      name: "Meeting",
    },
    {
      type: EventTypes.Task,
      name: "Task",
    },
  ];

  return (
    <Grid container direction="row" spacing={2} style={{ marginTop: 10 }}>
      {eventDetailsArray.map((eventDetail) => (
        <Grid
          key={eventDetail.name}
          container
          item
          style={{ width: "fit-content" }}
          direction="row"
          alignItems="center"
        >
          <Avatar
            style={{
              backgroundColor: eventTypeColor[eventDetail.type],
              marginRight: 5,
            }}
          >
            {eventDetail.type}
          </Avatar>
          <Typography variant="subtitle1">{eventDetail.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Legend;
