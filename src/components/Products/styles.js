import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "#0F0F0F",
    padding: theme.spacing(3),
  },
  root: {
    backgroundColor: "#0F0F0F",
    flexGrow: 1,
  },
}));
