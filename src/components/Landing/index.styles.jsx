import { makeStyles} from '@material-ui/core/styles';

export default makeStyles({
  mainBackground: {
    background: "linear-gradient(6deg, #0052d4 0%, #0052d4 100%)"
  },
  header: {
    position: "relative",
    marginTop: "-38px",
    height: "400px",
    backgroundImage: "linear-gradient(to top, #9cecfb, #65c7f7, #0052d4)"
  },
  svg: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "100px"
  }
});