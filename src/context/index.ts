import React, { createContext } from "react";
import moment from "moment";
import { Event, State } from "../reducer";

const key = moment().format("DD-MM-YYYY");
let events: Array<Event> = [];
for (let i = 0; i < 20; i++) {
  events.push({
    name: `something ${i}`,
    type: "A",
    time: "10:00",
  });
}
export const initialState: State = {
  selectedDate: moment().format("DD-MM-YYYY"),
  eventList: {
    [key]: events,
  },
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
