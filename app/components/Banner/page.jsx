'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Banner = ({pageName}) => {
  return (
    <div >
         <Box
        sx={{
          position: "relative",
          height: "650px", 
          width: "100%",
          overflow: "hidden", 
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", 
          },
          "&::before": {
            backgroundImage: "url(/images/aboutus2.png)",
            opacity: 0.5, 
            zIndex: 1, 
          },
          "&::after": {
            backgroundImage: "url(/images/aboutUs.png)",
            zIndex: 2, 
          },
        }}
      >
        
        
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3, 
            color: "white", 
            textAlign: "center", 
            maxWidth: "600px", 
           p: 2, 
          
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            {pageName}
          </Typography>
          <Typography variant="h5" component="h2">
            We believe in making the world a better place
          </Typography>
          
        </Box>
      </Box>
    </div>
  )
}

export default Banner