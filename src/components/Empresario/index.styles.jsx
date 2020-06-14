import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: ".5px solid #edf2f4",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "10px 15px 25px 0 rgba(0,0,0,.8)",
    paddingBottom: "50px",
    width: "100%",
    padding: "30px 30px 40px 30px"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  titulo: {
    textAlign: "center",
    color: "#264653"
  }
}));