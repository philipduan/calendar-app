import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import AppContext from "../../context";

interface Props {
  isFormOpen: boolean;
  setIsFormOpen: (isFormOpen: boolean) => void;
}

const Header = (props: Props) => {
  const { state } = useContext(AppContext);

  const { isFormOpen, setIsFormOpen } = props;

  return (
    <Grid
      container
      justify="space-between"
      style={{ paddingLeft: 16, marginBottom: 20 }}
    >
      <Grid item xs={6}>
        <Typography variant="h5">{`${state.selectedDate} Events`}</Typography>
      </Grid>
      <Grid container item xs={1} justify="center">
        <AddCircleOutlineOutlinedIcon
          fontSize="large"
          onClick={() => setIsFormOpen(!isFormOpen)}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
