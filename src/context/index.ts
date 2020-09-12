import React, { createContext } from "react";
import moment from "moment";
import { State } from "../reducer";

const key = moment().format("DD-MM-YYYY");
let events = new Array(20);
export const initialState: State = {
  selectedDate: moment().format("DD-MM-YYYY"),
  eventList: {
    [key]: events.fill({
      name: "something",
      type: "A",
      time: "10:00",
    }),
  },
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
