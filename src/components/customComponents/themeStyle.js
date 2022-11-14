import { createTheme } from "@mui/material";
import { blue, grey, green, red, yellow } from "@mui/material/colors";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import React from "react";
export const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
      light: red[500],
      dark: blue[700],
    },
    secondary: {
      main: grey[50],
      main: blue[50],
    },
  },
});

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "black" : "white",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px",
    },
  });
};
export const ScrollToChangeNavbarColor = (props) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};
