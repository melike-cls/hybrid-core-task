import { Box, Card, CardMedia } from "@mui/material";
import Image from "next/image";
import React from "react";

const World = () => {
  return (
    <div>
      <img
        style={{width:"100%", padding:"2rem", backgroundColor:"#2F4858"}}
        src="/images/world.png"
        title="Title of the image"
      />
     
    </div>
  );
};

export default World;
