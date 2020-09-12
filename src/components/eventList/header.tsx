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
    <Grid style={{ paddingLeft: 16 }}>
      <Grid container justify="space-between">
        <Grid item xs={10}>
          <Typography variant="h5">{`Events for ${state.selectedDate}`}</Typography>
        </Grid>
        <Grid container item xs={1} justify="center">
          <AddCircleOutlineOutlinedIcon
            fontSize="large"
            onClick={() => setIsFormOpen(!isFormOpen)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
