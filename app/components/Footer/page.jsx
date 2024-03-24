import React from "react";
import { AppBar, Toolbar, Typography, Grid, Box } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* EU Funded Project Info Section */}
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#2F4858", px: 4, py: 2 }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img width="200" src="/images/euFlag.png" alt="EU Flag" />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography color="white" sx={{ textAlign: "justify" }}>
            The project “European Hub for Contemporary China (EuroHub4Sino)” has
            received funding from the European Union’s Horizon Europe research
            and innovation programme under grant agreement number 101131737.
          </Typography>
          <Typography color="white" sx={{ textAlign: "justify", mt: 1 }}>
            “Funded by the European Union. Views and opinions expressed are
            however those of the author(s) only and do not necessarily reflect
            those of the European Union or European Research Executive Agency
            (REA). Neither the European Union nor the granting authority can be
            held responsible for them.” 
          </Typography>
        </Grid>
      </Grid>

      {/* Footer Links Section */}
      <Grid
        container
        sx={{ color: "white", backgroundColor: "#33576B", py: 3, px: 4 }}
      >
        {/* Publication Types */}
        <Grid item sm={3} xs={12}>
          <Typography>
            <Typography variant="h6" gutterBottom>
              List of Publication Types
            </Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
          </Typography>
        </Grid>

        {/* Publication Themes */}
        <Grid item sm={3} xs={12}>
          <Typography>
            <Typography variant="h6" gutterBottom>
              List of Publication Themes
            </Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography> Lorem ipsum</Typography>
          </Typography>
        </Grid>

        {/* About Us Pages */}
        <Grid item sm={3} xs={12}>
          <Typography>
            <Typography variant="h6" gutterBottom>
              About Us Pages
            </Typography>
            <Typography>Who we are?</Typography>
            <Typography>What we do?</Typography>
            <Typography>How we work?</Typography>
            <Typography>Events & Activities</Typography>
            <Typography> Lorem ipsum</Typography>
            <Typography>Lorem ipsum</Typography>
          </Typography>
          {/* Add more links here */}
        </Grid>

        {/* Communication Department */}
        <Grid item sm={3} xs={12}>
          <Typography variant="h6" gutterBottom>
            Communication Department
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LinkedInIcon style={{ color: "#ffffff" }} />
            <XIcon style={{ color: "#ffffff" }} />
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom Bar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#33576B" }}
      >
        <Toolbar sx={{ justifyContent: "center", minHeight: 20 }}>
          <Typography variant="caption" color="white">
            The EuroHub4Sino project. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
