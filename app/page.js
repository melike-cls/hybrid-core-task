"use client"
import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Banner from "./components/Banner/page";
import Navbar from "./components/Navbar/page";


const Home = () => {
  const statisticsData = [
    { number: "12M+", label: "Lorem ipsum" },
    { number: "100K+", label: "Lorem ipsum" },
    { number: "31M+", label: "Lorem ipsum" },
    { number: "123", label: "Lorem ipsum" },
  ];

  return (
    <div>
      <Navbar />
      <Banner pageName="Main Page" />
      {/* MaınPage Bölümü */}
      <Box sx={{ paddingY: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Main Page
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            {/* Resim */}
            <Paper elevation={3} sx={{ mb: 4 }}>
              <img
                src="/images/image1.png"
                alt="What We Do"
                style={{ width: "100%", height: "auto" }}
              />
            </Paper>

            {/* Metin */}
            <Typography variant="body1" paragraph textAlign={"left"}>
              China is a key global actor and a leading economic and
              technological power. China’s increasing relevance in the...
            </Typography>
            <Typography variant="body1" paragraph textAlign={"left"}>
              However, the European level expertise on contemporary China is
              often fragmented and difficult to access. In this regard, it is
              essential to connect established and emerging knowledge nodes as
              well as gathering, categorising, and mainstreaming their work on a
              publicly accessible platform.
            </Typography>
            <Typography variant="body1" paragraph textAlign={"left"}>
              To address these challenges, EuroHub4Sino is funded by the
              European Research Executive Agency (REA) of the European
              Commission, through a 3-years Horizon Europe grant.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ paddingY: 8, textAlign: "center", bgcolor: "#F7F7F7" }}>
        {/* İstatistikler Bölümü */}
        <Grid container spacing={2} justifyContent="center">
          {statisticsData.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box textAlign="center" p={2}>
                <Typography variant="h4" color="primary" gutterBottom>
                  {stat.number}
                </Typography>
                <Typography variant="subtitle1">{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
     
    </div>
  );
};

export default Home;
