import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    borderRadius: "50px",
    borderBottom: "solid #ffbe33 10px",
    backgroundColor: "#0f0f0f",
    boxShadow: "0px 0px 10px #ffbe33",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
