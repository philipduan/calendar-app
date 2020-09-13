import React, { useState, useContext } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import SendIcon from "@material-ui/icons/Send";
import moment from "moment";
import AppContext from "../../context";
import { ReducerTypes } from "../../reducer";

export enum EventTypes {
  Appointment = "A",
  Meeting = "M",
  Task = "T",
}

interface Props {
  setIsFormOpen: (isFormOpen: boolean) => void;
}
const EventForm = (props: Props) => {
  const { dispatch } = useContext(AppContext);

  const { setIsFormOpen } = props;

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>(EventTypes.Appointment);
  const [time, setTime] = useState<string>(`${moment().format("HH")}:00`);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({
      type: ReducerTypes.AddEvent,
      payload: {
        name,
        type,
        time,
      },
    });
    setIsFormOpen(false);
  };
  return (
    <Grid container style={{ padding: 20 }}>
      <Grid container style={{ marginBottom: 10 }} justify="space-between">
        <Typography variant="h5">New Event</Typography>
        <CancelOutlinedIcon
          onClick={() => {
            setIsFormOpen(false);
          }}
          style={{ cursor: "pointer" }}
        />
      </Grid>
      <Grid container>
        <form
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
          autoComplete="off"
          onSubmit={(event) => {
            onFormSubmit(event);
          }}
        >
          <FormControl component="fieldset" style={{ marginBottom: 10 }}>
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            />
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              name="gender1"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
              style={{ paddingLeft: 20 }}
            >
              <FormControlLabel
                value={EventTypes.Appointment}
                control={<Radio />}
                label="Appointment"
              />
              <FormControlLabel
                value={EventTypes.Meeting}
                control={<Radio />}
                label="Meeting"
              />
              <FormControlLabel
                value={EventTypes.Task}
                control={<Radio />}
                label="Task"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            id="time"
            label="Time"
            type="time"
            defaultValue={time}
            onChange={(event) => setTime(event.target.value)}
          />
          <Grid container justify="flex-end" style={{ marginTop: 20 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Add
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default EventForm;
