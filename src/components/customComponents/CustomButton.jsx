import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)(({ theme }) => ({
  //   color: theme.palette.getContrastText(white),
  color: "black",
  padding: "1.5%",
  borderRadius: "15px",
  marginTop: "1em",
  width: "12em",
  fontWeight: "bold",
  backgroundColor: "theme.primary",
  "&:hover": {
    backgroundColor: "theme.primary",
    color: "white",
  },
}));
