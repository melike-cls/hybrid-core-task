import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import Image from 'next/image';

const Partners = () => {
  // Logolarınızın olduğu bir array
  const logos = [
    { src: '/images/logo1.png', alt: 'Logo 1', width: 322, height: 186 },
    { src: '/images/logo2.png', alt: 'Logo 2', width: 311, height: 79 },
    { src: '/images/logo3.png', alt: 'Logo 3', width: 322, height: 186 },
    { src: '/images/logo4.png', alt: 'Logo 4', width: 322, height: 186 },
    { src: '/images/logo5.png', alt: 'Logo 5', width: 233, height: 186 },
    { src: '/images/logo6.png', alt: 'Logo 6', width: 322, height: 186 },
    { src: '/images/logo7.png', alt: 'Logo 7', width: 322, height: 186 },
    { src: '/images/logo8.png', alt: 'Logo 8', width: 322, height: 186 },
    
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: '137px', mb:'46px' }} >
        Consortium Partners
      </Typography>
      <Typography variant="body1" align="center" paragraph>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br></br>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et</Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ mb: '137px' }}>
        {logos.map((logo, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 140,
                boxShadow: 'none',
              }}
            >
              <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} objectFit="contain" />
            </Paper>
          </Grid>
        ))}
      </Grid>

 {/* Sarı çizgi */}
 <Box
        sx={{
          position: 'absolute',
          bottom: '137.5', // Çizginin dikey konumunu ayarlayın
          left: '50%', // Çizginin yatay başlangıç noktasını ayarlayın, bu değer ilk logonun sol hizasına denk gelmeli
          width: 'calc(100% - 35%)', // Çizginin genişliği, bu değer son logonun sağına denk gelmeli
          height: '2px', // Çizginin kalınlığı
          bgcolor: '#F6AE2D', // Çizginin rengi
          transform: 'translateX(-50%)', // Çizgiyi yatayda ortalamak için
        }}
      />

    </Container>
  );
};

export default Partners;
