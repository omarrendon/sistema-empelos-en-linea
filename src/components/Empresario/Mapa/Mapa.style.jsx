import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  principal: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center"
    
  },
  titulo: {
    margin: "70px 10px 10px 10px",
    textAlign: "center"
  },
  paper: {

    width: "100%"
  },
  descripcion: {
    margin: "50px 0px 20px 0px",
    padding: "0px 20px"
  },
  subtitulo: {
    textAlign: "center",
    padding: "20px 20px"
  },
  root: {
    display: "flex",
    flexDirection: "column"
  },
  field: {
    width: "80%",
    margin: "10px 0px 0px 10%"
  },
  buton: {
    width: "120px",
    margin: "20px 0px 20px 40%"
  },
  mapa: {
    margin: "50px 0px 20px 0px",
    padding: "0px 20px"
  }
}));