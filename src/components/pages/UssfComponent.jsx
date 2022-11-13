import { Grid } from "@mui/material";
import React from "react";
import styles from "./landing.module.css";
function UssfComponent() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <div className={styles.ussfDiv}></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default UssfComponent;
