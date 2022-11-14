import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { StyledTextField } from "../customComponents/tableComponent";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DragonPopupDialogue({ open, handleClose }) {
  const { capsuleTableIndividualRecord } = useSelector(
    (state) => state?.capsuleTable
  );

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {`${capsuleTableIndividualRecord?.name} Details`}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Active"
                value={capsuleTableIndividualRecord?.active}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Crew Capacity"
                value={capsuleTableIndividualRecord?.crew_capacity}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                value={`${capsuleTableIndividualRecord?.diameter?.meters} meter ${capsuleTableIndividualRecord?.diameter?.meters} feet`}
                disabled
                label="Diameter"
              />
            </Grid>
            <Grid item xs={9} md={6}>
              <StyledTextField
                type="date"
                disabled
                label="First Flight"
                sx={{ width: "80%" }}
                value={capsuleTableIndividualRecord?.first_flight}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Dry Mass(kg)"
                value={capsuleTableIndividualRecord?.dry_mass_kg}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Dry Mass(lb)"
                value={capsuleTableIndividualRecord?.dry_mass_lb}
              />
            </Grid>
            {capsuleTableIndividualRecord?.flickr_images?.map((el) => (
              <Grid item xs={12} md={6}>
                <img
                  style={{ borderRadius: "50%", marginLeft: "3em" }}
                  src={el}
                  alt="flickr image"
                  width="40%"
                  height="40%"
                />
              </Grid>
            ))}

            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Heat Shield material "
                value={capsuleTableIndividualRecord?.heat_shield?.material}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Heat Shield size(meters)"
                value={capsuleTableIndividualRecord?.heat_shield?.size_meters}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Heat Shield temp(degree)"
                value={capsuleTableIndividualRecord?.heat_shield?.temp_degrees}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Heat Shield Dev Partner "
                value={capsuleTableIndividualRecord?.heat_shield?.dev_partner}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                disabled
                label="Height"
                value={`${capsuleTableIndividualRecord?.height_w_trunk?.meters} meter ${capsuleTableIndividualRecord?.height_w_trunk?.feet} feet`}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <StyledTextField
                value={capsuleTableIndividualRecord?.id}
                disabled
                label="ID"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            CLOSE
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
