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
  dropArea: {
    border: "2px dashed #ccc",
    borderRadius: "8px",
    padding: theme.spacing(3),
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function PhotoUploadPage() {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];

    // Kontrol edilecek dosya türleri
    const supportedTypes = ["image/jpeg", "image/png"];

    // Seçilen dosyanın türünü kontrol et
    if (!supportedTypes.includes(file.type)) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "Unsupported file type. Please select a JPEG or PNG image."
      );
      setOpenSnackbar(true);
      return;
    }

    // Dosya boyutunu kontrol et (örneğin, 5MB'dan büyük dosyaları kabul etmeme)
    if (file.size > 5 * 1024 * 1024) {
      setSnackbarSeverity("error");
      setSnackbarMessage(
        "File size exceeds the limit. Please select a smaller image."
      );
      setOpenSnackbar(true);
      return;
    }

    // Dosya yükleme işlemi için gerekli kod buraya gelecek
    try {
      // FormData oluştur
      const formData = new FormData();
      formData.append("photo", file);

      // API isteği gönder
      const response = await axios.post(
        "https://api.example.com/upload/photo",
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
      setSnackbarMessage("Photo uploaded successfully!");
      setOpenSnackbar(true);
    } catch (error) {
      // Hata durumunda bildirimleri ayarla
      setSnackbarSeverity("error");
      setSnackbarMessage("An error occurred while uploading the photo.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handlePhotoUpload({ target: { files: [file] } });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Photo Upload
      </Typography>
      <div
        className={classes.dropArea}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <Typography variant="body1" gutterBottom>
          Drag and drop your photo here
        </Typography>
        <input
          accept="image/jpeg,image/png"
          type="file"
          onChange={handlePhotoUpload}
          style={{ display: "none" }}
          id="photo-upload-input"
        />
        <label htmlFor="photo-upload-input">
          <Button
            variant="contained"
            color="primary"
            component="span"
            className={classes.button}
            startIcon={<UploadIcon />}
          >
            Upload Photo
          </Button>
        </label>
      </div>
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
