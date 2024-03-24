"use client";
// Page.jsx
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RichTextEditor from "./component/richTextEditor";
import Layout from "../layout";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  pageContainer: {
    width: "80%",
    maxWidth: 600,
    padding: theme.spacing(3),
    border: "1px solid #ccc",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
}));

const TextInput = ({ value, onChange }) => {
  return (
    <TextField
      label="Tek Satırlı Metin"
      variant="outlined"
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{ maxLength: 150 }}
    />
  );
};

const TextArea = ({ value, onChange }) => {
  return (
    <TextField
      label="Çok Satırlı Metin"
      variant="outlined"
      fullWidth
      multiline
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{ maxLength: 250 }}
    />
  );
};

const Page = () => {
  const classes = useStyles();
  const [textInputValue, setTextInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextInputChange = (value) => {
    setTextInputValue(value);
  };

  const handleTextAreaChange = (value) => {
    setTextAreaValue(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://api.server.test/v1/component", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: textInputValue, // Tek satırlı metin
          summary: textAreaValue, // Çok satırlı metin
          // Diğer gerekli alanları da buraya ekleyebilirsiniz
        }),
      });

      if (response.ok) {
        console.log("Veri başarıyla gönderildi.");
        // İstek başarılıysa istediğiniz işlemleri gerçekleştirin
      } else {
        console.error("İstek başarısız:", response.status);
        // Hata durumunda uygun bir şekilde kullanıcıya bilgi verin
      }
    } catch (error) {
      console.error("İstek sırasında bir hata oluştu:", error);
      // Hata durumunda uygun bir şekilde kullanıcıya bilgi verin
    }
  };

  return (
    <Layout useLayout={false}>
      <div className={classes.root}>
        <div className={classes.pageContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextInput
                value={textInputValue}
                onChange={handleTextInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextArea value={textAreaValue} onChange={handleTextAreaChange} />
            </Grid>
            <Grid item xs={12}>
              <RichTextEditor />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Gönder
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
