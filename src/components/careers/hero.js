import React from 'react'
import { Typography, Box } from '@mui/material'

const Hero = () => {
  return (
    <>
          <Box sx={{ width: '100%', m: 20}}>
            <Typography variant="lead" component="h1" textAlign='left' gutterBottom>
                Launch a new chapter  
                  <br />
                in your career
            </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: '#731dff'}}>
                With exciting opportunities in hybrid, 
                  <br />
                be part of a revolutionary platform and 
                  <br />
                an enthusiastic team.
            </Typography>
          </Box>
    </>
  )
}

export default Hero