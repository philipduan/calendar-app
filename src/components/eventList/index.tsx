import React from "react";
import Header from "./header";
import Event from "./event";

interface Props {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
}

const EventList = (props: Props) => {
  const { isFormOpen, setIsFormOpen } = props;
  return (
    <div>
      <Header isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <Event />
    </div>
  );
};

export default EventList;
