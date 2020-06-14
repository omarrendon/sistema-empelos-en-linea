import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  link: {
    color: "#ffff",
    fontSize: "1.2em",
    textDecoration: "none",
    padding: theme.spacing(4, 4)
  },
  close: {
    padding: theme.spacing(0, 140),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ff3f34",
    fontSize: "1.4em",
    textDecoration: "none",
    // fontWeight: "20px"
  },
  
}));
