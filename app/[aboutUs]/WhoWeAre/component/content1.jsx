'use client'
import React from 'react';
import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

const Content1 = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={4}  sx={{ padding: theme.spacing(30)}}>
      <Grid item xs={12} sm={6} sx={{ flexGrow: 1, position: 'relative'}}>
      <Paper elevation={0} sx={{ position: 'relative', width: '100%'}}>
        <Image
          src="/images/image1.png"
          alt="Ana Resim"
          // layout="fill"
          // objectFit="cover"
          width={530}
          height={646}
          
        />
        <Box sx={{ position: 'absolute', top: '-10%', right: '30%', width: 120, height: 120 }}>
          <Image
            src="/images/imageTop.png"
            alt="Üst Sağ Küçük Resim"
            width={349}
            height={189}
            objectFit="cover"
          />
        </Box>
        <Box sx={{ position: 'absolute', bottom: '35%', left: '-20%', width: 120, height: 120 }}>
          <Image
            src="/images/imageBottom.png"
            alt="Alt Sol Küçük Resim"
            width={266}
            height={266}
            objectFit="cover"
          />
        </Box>
      </Paper>
    </Grid>
      <Grid item xs={12} sm={4} sx={{position: 'absolute', top: '105%', right: '10%' }} >
        <Typography variant="subtitle1" gutterBottom color="#F6AE2D">
        Lorem ipsum
        </Typography>
        <Typography variant="h4" gutterBottom>
        Who we are?
        </Typography>
        <Typography variant="body1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat
         
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Content1;

