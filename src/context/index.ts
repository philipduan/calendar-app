import React, { createContext } from "react";
import moment from "moment";
import { State } from "../reducer";

export const initialState: State = {
  selectedDate: moment().format("DD-MM-YYYY"),
  eventList: {},
};

const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
