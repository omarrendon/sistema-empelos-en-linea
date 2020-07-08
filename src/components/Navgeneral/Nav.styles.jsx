import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `clac(100% - ${240}px)`,
      marginLeft: 240
    }
  },
  link: {
    color: "#ffff",
    fontSize: "1.2em",
    textDecoration: "none",
    padding: theme.spacing(2, 4)
  },
  close: {
    padding: theme.spacing(2, 10),
    flexGrow: 1,
    color: "#ff3f34",
    fontSize: "1.4em",
    textDecoration: "none"
  },
  icon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));
