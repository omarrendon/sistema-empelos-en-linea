import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: { display: "flex", flexWrap: "wrap", justifyContent: "center" },
  card: {
    width: "99%",
    margin: "20px 0px "
  },
  tituloPropuesta: {
    textAlign: "center",
    marginBottom: "20px"
  },
  descripcionPropuesta:{
    fontSize: "1.5em"
  },
  botonPropuesta: {
    marginLeft: "25%",
    margin: "20px 0px"
  }
});