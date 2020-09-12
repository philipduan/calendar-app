export enum ReducerTypes {
  UpdateDate = "UPDATE_DATE",
  AddEvent = "ADD_EVENT",
  DeleteEvent = "DELETE_EVENT",
}

export interface Event {
  name: string;
  time: string;
  type: string;
}

export interface State {
  selectedDate: string;
  eventList: {
    [key: string]: Array<Event>;
  };
}

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ReducerTypes.UpdateDate:
      return {
        ...state,
        selectedDate: action.payload,
      };
    case ReducerTypes.AddEvent:
      const keys = Object.keys(state.eventList);
      const exist = keys.some((key: string) => key === state.selectedDate);
      let events: Array<Event> = [];
      if (exist) {
        events = [
          ...state.eventList[state.selectedDate],
          { ...action.payload },
        ];
      } else {
        events.push(action.payload);
      }
      return {
        ...state,
        eventList: {
          ...state.eventList,
          [state.selectedDate]: events,
        },
      };
    case ReducerTypes.DeleteEvent:
      const eventsToSplice: Array<Event> = state.eventList[state.selectedDate];
      eventsToSplice.splice(action.payload, 1);
      return {
        ...state,
        eventList: {
          ...state.eventList,
          [state.selectedDate]: eventsToSplice,
        },
      };
    default:
      return state;
  }
};

export default reducer;
