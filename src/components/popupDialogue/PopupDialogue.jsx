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

export default function CustomizedDialogs({ open, handleClose }) {
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
          {`${capsuleTableIndividualRecord?.capsule_serial} Details`}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <StyledTextField
                name={"capsule_serial"}
                disabled
                label="Capsule Serial"
                value={capsuleTableIndividualRecord?.capsule_serial}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                name={"capsule_id"}
                disabled
                label="ID"
                value={capsuleTableIndividualRecord?.capsule_id}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                value={capsuleTableIndividualRecord?.status}
                name={"status"}
                disabled
                label="Status"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  border: "1px solid grey",
                  width: "80%",
                  padding: "0.8em",
                  borderRadius: "0.3em",
                }}
              >
                {capsuleTableIndividualRecord?.original_launch}
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                name={"original_launch_unix"}
                disabled
                label="Original Launch Unix"
                value={capsuleTableIndividualRecord?.original_launch_unix}
              />
            </Grid>
            {capsuleTableIndividualRecord?.missions?.map((el) => (
              <>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    value={el?.name}
                    name={"missions_name"}
                    disabled
                    label="Mission Name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    name={"missions_flight"}
                    disabled
                    label="Mission Flight"
                    value={el?.flight}
                  />
                </Grid>
              </>
            ))}
            <Grid item xs={12} md={6}>
              <StyledTextField
                value={capsuleTableIndividualRecord?.landing}
                name={"landing"}
                disabled
                label="Landing"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                value={capsuleTableIndividualRecord?.type}
                name={"type"}
                disabled
                label="Type"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                value={capsuleTableIndividualRecord?.details}
                name={"details"}
                disabled
                label="Details"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField
                value={capsuleTableIndividualRecord?.reuse_count}
                name={"reuse_count"}
                disabled
                label="Reuse Count"
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
