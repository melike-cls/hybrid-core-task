"use client"
import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";

const Content1 = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flexGrow: 1, border:"2px solid red",  mr:20, overflow: 'hidden', display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              mx:4,
              position: 'relative',
              height: '100%',
              width: '400px',
              '& .mainImage': {
                border:"2px solid red",
                height: '300px',
                objectFit: 'cover',
                objectPosition: 'center right', // Adjust the position as needed
              },
              '& .overlayImage': {
                position: 'absolute',
                zIndex: 2,
              },
              '& .overlayTopRight': {
                top: '5%',
                right: '5%',
                width: theme.spacing(20),
                height: theme.spacing(20),
              },
              '& .overlayBottomLeft': {
                bottom: '5%',
                left: '5%',
                width: theme.spacing(10),
                height: theme.spacing(10),
              },
            }}
          >
            <Box className="mainImage">
              <Image src="/images/image1.png" alt="Main" layout="fill" />
            </Box>
            <Box className="overlayImage overlayTopRight">
              <Image src="/images/imageTop.png" alt="Top Right" layout="fill" />
            </Box>
            <Box className="overlayImage overlayBottomLeft">
              <Image src="/images/imageBottom.png" alt="Bottom Left" layout="fill" />
            </Box>
          </Box>
        </Grid>

        {/* Text Content Section */}
        <Grid item xs={12} md={6} sx={{border:"2px solid red"}}>
          <Typography variant="h2" gutterBottom component="div">
            Who we are?
          </Typography>
          <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content1;
