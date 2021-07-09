import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
  const classes = useStyles();
  return (
    <Card
      style={{
        backgroundColor: "#0f0f0f",
        boxShadow: "0px 0px 10px #ffbe33",
        borderRadius: "50px",
        borderBottom: "solid #ffbe33 10px",
      }}
    >
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" style={{ color: "white" }}>
          {item.name}
        </Typography>
        <Typography variant="h5" style={{ color: "#ffbe33" }}>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            style={{ color: "#ffbe33" }}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            style={{ color: "#ffbe33" }}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          onClick={() => onRemoveFromCart(item.id)}
          style={{ backgroundColor: "#ffbe33", color: "#0f0f0f" }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
