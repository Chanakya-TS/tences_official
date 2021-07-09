import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../tences_logo_tra.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  return (
    <>
      <AppBar
        position="fixed"
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
        }}
        className={classes.appBar}
        color="inherit"
      >
        <Toolbar>
          <Link to="/">
            <img
              src={logo}
              alt="Tences Official"
              height="75px"
              className={classes.image}
            />
          </Link>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} style={{ color: "#ffbe33" }}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
