"use client"
import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
  
} from "@mui/material";
import Banner from "@/app/components/Banner/page";
import Layout from "../../layout"


const statisticsData = [
  { number: '12M+', label: 'Lorem ipsum' },
  { number: '100K+', label: 'Lorem ipsum' },
  { number: '31M+', label: 'Lorem ipsum' },
  { number: '123', label: 'Lorem ipsum' }
];

const objectives = [
  
  {
    icon: '/icons/iconBag.png',
    title: 'Develop an enhanced, digital platform',
    description: 'Sed EuroHub4Sino will develop an enhanced digital platform to support European China experts’ research, collaboration and communication activities.  do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    icon: '/icons/iconBag.png',
    title: 'Establish an inclusive and engaging Network',
    description: 'EuroHub4Sino will establish an independent European network of China experts and stakeholders, including China researchers as well as EU & MS officials, businesspeople, journalists and CSO representatives.',
  },
  {
    icon: '/icons/iconBag.png',
    title: 'Policy Research & Analysis',
    description: 'EuroHub4Sino consortium, together with its network, will provide independent European policy research and analysis to the EU & MS officials, China researchers and to the stakeholders (businesspeople, journalists, representatives of CSOs) as well as the wider civil society in order to mainstream the created knowledge.',
  },
  {
    icon: '/icons/iconBag.png',
    title: 'Achieve an Innovative and Sustainable Business Model',
    description: 'The sustainable business model (KER4) requires interdependent key exploitable results: The inclusive and diverse network (KER2) of independent European China experts will make the most of the EH4S platform (KER1) for collaborative (policy) research and activities (KER3)',
  },
 
  // Diğer objective kartlarınızı buraya ekleyin
];

// `Objectives` bölümü için stil ayarlamaları
const objectiveStyles = {
  paperContainer: {
    padding: '48px', // İç boşluğu ayarlayın
    margin: '10px', // Dış boşluğu ayarlayın
    textAlign: 'left', // Metni ortala
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)', // Gölgelendirmeyi ayarlayın
    borderRadius: '10px', // Köşe yuvarlaklığını ayarlayın
  },
  icon: {
    width: '50px', // İkon genişliği
    height: '50px', // İkon yüksekliği
    marginBottom: '15px', // İkon alt boşluğu
  },
  title: {
    fontWeight: 'bold', // Başlık kalınlığı
    color: '#333', // Başlık rengi
  },
  description: {
    color: '#666', // Açıklama metni rengi
  }
};

const WhatWeDo = () => {
  return (
    <Layout useLayout={true}>
    <div >
    {/* aboutus bölümü */}
      <Banner pageName="What We Do" />

      {/* What We Do Bölümü */}
      <Box sx={{ paddingY: 8, textAlign: "center"}}>
        <Typography variant="h3" gutterBottom>
          What we do
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
      <Box sx={{ paddingY: 8, textAlign: "center", bgcolor: '#F7F7F7'  }}>
         {/* İstatistikler Bölümü */}
         <Grid container spacing={2} justifyContent="center">
          {statisticsData.map((stat, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box textAlign="center" p={2}>
                <Typography variant="h4" color="primary" gutterBottom>
                  {stat.number}
                </Typography>
                <Typography variant="subtitle1">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
       
      
        {/* Objectives Bölümü */}

      <Box sx={{ bgcolor: 'background.default', py: 4}}>
        <Grid container spacing={4} justifyContent="center">
        {/* Sol taraftaki büyük kutu */}
        <Grid item xs={12} md={5} lg={4} sx={{ ml:5, mt:10, p:10}}>
              {/* Yüksekliği diğer kutulara göre ayarlamak için marginTop kullanılıyor */}
              <Paper elevation={3} sx={{ textAlign: 'left', boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px', mt:30, p:10}}>
                <Typography variant="subtitle1" gutterBottom component="div" sx={{ color: '#f6ae2d', fontWeight: 'bold' }}>
                  Lorem ipsum
                </Typography>
                <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                  Objectives
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#333' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris re
                </Typography>
                {/* Diğer içerikler burada devam edebilir... */}
              </Paper>
            </Grid>

          {/* Sağ taraftaki dört kutu */}
          {/* İlk iki kutu için container */}
          <Grid item xs={12} md={6} >
            <Grid container spacing={2} >
              {objectives.slice(0, 2).map((objective, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper elevation={3} sx={{ ...objectiveStyles.paperContainer, mt: index === 0 ? 0 : 4 }}>
                    <Box component="img" src={objective.icon} alt={`Objective ${index + 1}`} sx={objectiveStyles.icon} />
                    <Typography variant="h6" gutterBottom sx={objectiveStyles.title}>
                      {objective.title}
                    </Typography>
                    <Typography variant="body1" sx={objectiveStyles.description}>
                      {objective.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            {/* İkinci iki kutu için container */}
            <Grid container spacing={2} >
              {objectives.slice(2, 4).map((objective, index) => (
                <Grid item xs={12} sm={6} key={index} >
                  <Paper elevation={3} sx={{ ...objectiveStyles.paperContainer, mt: index === 0 ? 6 : 4 }}>
                    <Box component="img" src={objective.icon} alt={`Objective ${index + 3}`} sx={objectiveStyles.icon} />
                    <Typography variant="h6" gutterBottom sx={objectiveStyles.title}>
                      {objective.title}
                    </Typography>
                    <Typography variant="body1" sx={objectiveStyles.description}>
                      {objective.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>



    </div>
    </Layout>
  );
};

export default WhatWeDo;
