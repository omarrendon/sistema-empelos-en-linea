import React from "react";
import Listas from "./Listas";
import { Drawer, Divider, makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerPaper: {
    width: 240
  }
}));

function Cajon(props) {
  const classes = styles();

  return (
    <Drawer
      className={classes.drawer}
      variant={props.variant}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <Divider />
      <Listas />
    </Drawer>
  );
}

export default Cajon;
