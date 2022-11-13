import { Button, Grid } from "@mui/material";
import React from "react";
import { CustomButton } from "../customComponents/CustomButton";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import styles from "./landing.module.css";
import UssfComponent from "./UssfComponent";
function LandingPage() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <div className={styles.intelsatDiv}>
            <Navbar />
            <Grid container spacing={2}>
              <Grid
                sx={{ marginTop: "30%", marginLeft: "5%", color: "white" }}
                item
                xs={12}
                md={4}
              >
                <p>RECENT MISSION</p>
                <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
                  INTELSAT G-31/G-32 MISSION
                </h1>
                <CustomButton variant="contained">REWATCH</CustomButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6} md={12}>
          <div className={styles.ussfDiv}>
            <Grid container spacing={2}>
              <Grid
                sx={{ marginTop: "30%", marginLeft: "5%", color: "white" }}
                item
                xs={12}
                md={4}
              >
                <p>RECENT MISSION</p>
                <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
                  USSF-44 MISSION
                </h1>
                <CustomButton variant="contained">REWATCH</CustomButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6} md={12}>
          <div className={styles.starshipDiv}>
            <Grid container spacing={2}>
              <Grid
                sx={{ marginTop: "30%", marginLeft: "5%", color: "white" }}
                item
                xs={12}
                md={4}
              >
                <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
                  STARSHIP UPDATE
                </h1>
                <CustomButton variant="contained">LEARN MORE</CustomButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6} md={12}>
          <div className={styles.starshipToLandDiv}>
            <Grid container spacing={2}>
              <Grid
                sx={{ marginTop: "30%", marginLeft: "5%", color: "white" }}
                item
                xs={12}
                md={4}
              >
                <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>
                  STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON
                </h1>
                <CustomButton variant="contained">LEARN MORE</CustomButton>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
