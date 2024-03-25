"use client";
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
      <Box sx={{ backgroundColor: "#33576B", color: "white", py: 3, px: 4 }}>
        <Grid
          container
          sx={{
            color: "white",
            backgroundColor: "#33576B",
            py: 3,
            px: 4,
            justifyContent: "center",
          }}
        >
          {/* Publication Types */}
          <Grid item sm={3} xs={12}>
            <Typography>
              <Typography gutterBottom>
                List of Publication Types
                <Box
                  component="div"
                  sx={{
                    width: "20%",
                    height: "2px",
                    bgcolor: "#F6AE2D",
                    margin: "10px auto 5",
                  }}
                />
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
              <Typography gutterBottom>
                List of Publication Themes
                <Box
                  component="div"
                  sx={{
                    width: "20%",
                    height: "2px",
                    bgcolor: "#F6AE2D",
                    margin: "10px auto 5",
                  }}
                />
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
              <Typography gutterBottom>
                About Us Pages
                <Box
                  component="div"
                  sx={{
                    width: "20%",
                    height: "2px",
                    bgcolor: "#F6AE2D",
                    margin: "10px auto 5",
                  }}
                />
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
            <Typography gutterBottom>
              Communication Department
              <Box
                component="div"
                sx={{
                  width: "20%",
                  height: "2px",
                  bgcolor: "#F6AE2D",
                  margin: "10px auto 5",
                }}
              />
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "socialIconBg",
                  "&:hover": { bgcolor: "socialIconHoverBg" },
                }}
              >
                <LinkedInIcon style={{ color: "#ffffff" }} />
              </Box>
              <Box
                sx={{
                  borderRadius: "50%",
                  width: 36,
                  height: 36,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "socialIconBg",
                  "&:hover": { bgcolor: "socialIconHoverBg" },
                }}
              >
               
                <XIcon style={{ color: "#ffffff" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "absolute",
            bottom: "137.5",
            left: "50%",
            width: "calc(100% - 35%)",
            height: "1px",
            bgcolor: "#E9E9EA",
            transform: "translateX(-50%)",
          }}
        />

        {/* Footer Bottom Bar */}
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "#33576B" }}
        >
          <Toolbar sx={{ justifyContent: "center", minHeight: 20 }}>
            <Typography variant="caption" color="white">
              © The EuroHub4Sino project. All rights reserved.
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Footer;
