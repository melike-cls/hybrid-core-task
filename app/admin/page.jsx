"use client";
import React, { useState } from "react";
import { Container, Button, Dialog, TextField } from "@mui/material";
import Layout from "../layout";
import axios from "axios"
import { blueGrey } from "@mui/material/colors";

export default function Admin() {
  const [newComponent, setNewComponent] = useState({
    
    title: "",
   
  });
  const [openDialog, setOpenDialog] = useState(false);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComponent((prevComponent) => ({
      ...prevComponent,
      [name]: value,
    }));
  };

  
  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        "https://api.server.test/v1/component/1",
        {
          title: "Yeni Bileşen",
          summary: "Bu bir örnek bileşen özeti",
          text: "Bu bir örnek bileşen metni",
          path: "/ornek/yol",
          buttons: [
            {
              visibleText: "Düğme 1",
              url: "https://ornek.com",
            },
            {
              visibleText: "Düğme 2",
              url: "https://ornek2.com",
            },
          ],
          images: [
            "https://ornek.com/resim1.jpg",
            "https://ornek.com/resim2.jpg",
          ],
          videos: [
            "https://ornek.com/video1.mp4",
            "https://ornek.com/video2.mp4",
          ],
          files: [
            "https://ornek.com/dosya1.pdf",
            "https://ornek.com/dosya2.pdf",
          ],
          order: 1,
          published: true,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to create component");
      }
     
      setNewComponent({
        title: "",
        
      });
      setOpenDialog(false);
      
    } catch (error) {
      console.error("Error creating component:", error);
      
    }
  };

  return (
    <Layout useLayout={false}>
      <Container maxWidth="lg" sx={{ display:'flex', justifyContent:'center', pb:50 }}>
        <Button variant="contained" onClick={() => setOpenDialog(true)} sx={{backgroundColor:blueGrey[900]}} >
          Create New Component
        </Button>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <Container sx={{ p: 4 }}>
            <TextField
              name="title"
              label="Title"
              value={newComponent.title}
              onChange={handleInputChange}
              fullWidth
            />
            
            <Button onClick={handleSubmit}>Create</Button>
          </Container>
        </Dialog>
      </Container>
    </Layout>
  );
}
