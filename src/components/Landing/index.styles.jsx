import { makeStyles} from '@material-ui/core/styles';

export default makeStyles(theme => ({
  mainBackground: {
    background: "linear-gradient(6deg, #0052d4 0%, #0052d4 100%)"
  },
  header: {
    position: "relative",
    // marginTop: "0px",
    height: "400px",
    backgroundImage: "linear-gradient(to top, #9cecfb, #65c7f7, #0052d4)",
    paddingTop: "40px"
  },
  svg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "100px"
  },
  titulo: {
    textAlign: "center",
    margin: "50px 10px 0px 50px",
    color: "#ffff"
  },
  Image: {
    height: "500px",
    width: "50%",
    marginLeft: "120px",
    position: "relative",
    boxShadow: "10px 15px 25px 0 rgba(0,0,0,.8)",
    borderRadius: "5px"
  },
  tituloParrafo: {
    textAlign: "justify",
    color: "#2f3542",
    margin: "50px 80px",
    position: "relative"
  },
  botonRegistro: {
    backgroundColor: "#50d890",
    margin: theme.spacing(1, 35),
    color: "#ffff",
    boxShadow: "10px 15px 25px 0 rgba(0,0,0,.8)"
  },
  divider: {
    height: "2px",
    borderRadius: "20px",
    margin: "180px 0px 50px 50px",
    width: "90%",
    backgroundColor: "#DEF4FE"
  },
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#5fdde5",
    marginTop: "-30px",
    paddingTop: "80px"
  },
  paper: {
    width: "250px",
    height: "380px",
    padding: "20px 20px 25px 20px",
    marginLeft: "80px",
    marginBottom: "40px",
    borderRadius: "10px",
    boxShadow: "10px 15px 25px 0 rgba(0,0,0,.8)"
  },
  vacanteTitulo: {
    color: "#10375c",
    textAlign: "center"
  },
  vacanteParrafo: {
    color: "#10375c",
    textAlign: "justify",
    fontSize: "1.2em"
    // "&:hover": {
    //   backgroundColor: "#000"
    // }
  },
  footer: {
    marginTop: "0px",
    width: "100%",
    
  },
  footerHeader: {
    position: "relative",
    height: "300px",
    backgroundImage: "linear-gradient(#5fdde5, #4C9CAA, #324B50)"
  },
  footerSvg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "120px"
  },
  footerPaper: {
    position: "absolute",
    borderRadius: "10px",
    width: "300px",
    padding: "20px",
    margin: "-150px 10%",
    marginBottom: "50px",
    boxShadow: "10px 15px 25px 0 rgba(0,0,0,.8)",
    backgroundColor: "#000",
    color: "#ffff"
  },
  
}));