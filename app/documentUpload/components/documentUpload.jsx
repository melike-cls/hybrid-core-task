"use client";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UploadIcon from "@mui/icons-material/Upload";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  dragDropContainer: {
    border: "2px dashed #aaaaaa",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FileUploadPage() {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleFileUpload = async (files) => {
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://api.server.test/v1/file", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed.");
      }

      setSnackbarSeverity("success");
      setSnackbarMessage("File uploaded successfully!");
      setOpenSnackbar(true);
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage("File upload failed.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFileUpload(files);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Document Upload
      </Typography>
      <div
        className={classes.dragDropContainer}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Typography variant="body1">Drag and drop your file here</Typography>
        <Typography variant="body2" color="textSecondary">
          Supported formats: PDF, DOC, DOCX, TXT
        </Typography>
      </div>
      <input
        accept=".pdf,.doc,.docx,.txt"
        type="file"
        className={classes.input}
        id="contained-button-file"
        onChange={(event) => handleFileUpload(event.target.files)}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.button}
          startIcon={<UploadIcon />}
        >
          Upload
        </Button>
      </label>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
