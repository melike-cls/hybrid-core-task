"use client";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import UploadIcon from "@mui/icons-material/Upload";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/lab/Alert";
import axios from "axios"; // axios kütüphanesini içeri aktar

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  input: {
    display: "none",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function VideoUploadPage() {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleVideoUpload = async (event) => {
    const file = event.target.files[0]; // Seçilen video dosyasını al

    try {
      const formData = new FormData();
      formData.append("video", file);

      // API isteği gönder
      const response = await axios.post(
        `https://api.example.com/file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response", response);
      // Başarılı yanıt aldığında bildirimleri ayarla
      setSnackbarSeverity("success");
      setSnackbarMessage("Video uploaded successfully!");
      setOpenSnackbar(true);
    } catch (error) {
      // Hata durumunda bildirimleri ayarla
      setSnackbarSeverity("error");
      setSnackbarMessage("An error occurred while uploading the video.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Video Upload
      </Typography>
      <input
        accept="video/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={handleVideoUpload} // Dosya seçildiğinde yükleme işlemini başlat
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={classes.button}
          startIcon={<UploadIcon />}
        >
          Upload Video
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
